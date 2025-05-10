// /pages/api/stripe-webhook.js (Next.js com geração de contrato PDF personalizado)

import { buffer } from 'micro'
import Stripe from 'stripe'
import nodemailer from 'nodemailer'
import fs from 'fs'
import path from 'path'
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-08-16',
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed')
  }

  const buf = await buffer(req)
  const sig = req.headers['stripe-signature']

  let event
  try {
    event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET)
  } catch (err) {
    console.error('Webhook Error:', err.message)
    return res.status(400).send(`Webhook Error: ${err.message}`)
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object
    const customerEmail = session.customer_details.email
    const customerName = session.customer_details.name
    const planName = session.metadata?.plan || 'Basic'

    const templatePath = path.join(process.cwd(), 'public/contracts', `contract_${planName.toLowerCase()}.pdf`)
    const pdfBytes = fs.readFileSync(templatePath)

    const pdfDoc = await PDFDocument.load(pdfBytes)
    const pages = pdfDoc.getPages()
    const firstPage = pages[0]
    const { width, height } = firstPage.getSize()
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica)

    const currentDate = new Date().toLocaleDateString('en-US')

    // Escreve o nome e data no PDF
    firstPage.drawText(`Client: ${customerName}`, {
      x: 50,
      y: height - 50,
      size: 12,
      font,
      color: rgb(0, 0, 0),
    })

    firstPage.drawText(`Date: ${currentDate}`, {
      x: 400,
      y: height - 50,
      size: 12,
      font,
      color: rgb(0, 0, 0),
    })

    const finalPdfBytes = await pdfDoc.save()
    const tempOutputPath = path.join(process.cwd(), 'public', `temp_contract_${Date.now()}.pdf`)
    fs.writeFileSync(tempOutputPath, finalPdfBytes)

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: `Carsvroom <${process.env.EMAIL_USER}>`,
      to: customerEmail,
      subject: `Your Carsvroom ${planName} Service Contract`,
      text: `Hi ${customerName},\n\nAttached is your personalized Carsvroom contract for the ${planName} plan.\n\nThank you for joining us!`,
      attachments: [
        {
          filename: `Carsvroom_${planName}_Contract.pdf`,
          path: tempOutputPath,
        },
      ],
    }

    try {
      await transporter.sendMail(mailOptions)
      console.log('Personalized contract email sent to', customerEmail)
      fs.unlinkSync(tempOutputPath) // Limpa o arquivo temporário
    } catch (error) {
      console.error('Email send error:', error)
    }
  }

  res.status(200).send('Webhook received')
}

// pages/api/sendEmail.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  // Extraia os dados do corpo da requisição (adeque conforme os nomes dos seus campos)
  const { name, email, message } = req.body;

  // Configure o transporter com as suas credenciais de e-mail (use variáveis de ambiente para segurança)
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,       // Ex.: "smtp.gmail.com"
    port: process.env.EMAIL_PORT,       // Ex.: 465 para SSL ou 587 para TLS
    secure: process.env.EMAIL_SECURE === "true", // true para SSL, false para TLS
    auth: {
      user: process.env.EMAIL_USER,     // Seu e-mail de envio
      pass: process.env.EMAIL_PASS,     // Sua senha ou app password
    },
  });

  // Defina as opções do e-mail
  const mailOptions = {
    from: process.env.EMAIL_FROM,       // Remetente (pode ser o mesmo do auth.user)
    to: process.env.EMAIL_TO,           // Destinatário (por exemplo, seu e-mail para receber os formulários)
    subject: `New message from ${name}`,
    text: message,
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong> ${message}</p>`,
  };

  // Tente enviar o e-mail
  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Error sending email" });
  }
}

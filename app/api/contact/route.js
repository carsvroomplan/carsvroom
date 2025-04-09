import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // Recebe os dados enviados no corpo da requisição
    const { firstName, lastName, email, phone, message, captchaToken } = await req.json();

    // Validação básica dos campos obrigatórios
    if (!firstName || !email || !captchaToken) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Validação do reCAPTCHA
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`;

    const captchaRes = await fetch(verificationURL, { method: "POST" });
    const captchaData = await captchaRes.json();

    if (!captchaData.success) {
      return new Response(JSON.stringify({ error: "Failed reCAPTCHA verification" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Configuração do nodemailer usando as variáveis de ambiente
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // Por exemplo: smtp.gmail.com
      port: Number(process.env.EMAIL_PORT), // Por exemplo: 465
      secure: process.env.EMAIL_SECURE === "true", // true se porta for 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Monta o conteúdo do e-mail
    const mailOptions = {
      from: `"Carsvroom Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO, // e-mail que receberá os dados
      subject: "New Contact Form Submission",
      text: `
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    };

    // Envia o e-mail
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Email sent successfully!",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error in contact API:", error);
    return new Response(
      JSON.stringify({ error: "Internal Server Error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

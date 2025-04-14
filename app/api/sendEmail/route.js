import nodemailer from "nodemailer";
import validateRecaptcha from "../reCaptcha/validateReecaptcha"; // ajuste o caminho certo

export async function POST(request) {
  const body = await request.json();

  const { firstName, lastName, email, phone, message, captchaToken } = body;

  // 1. Valida o captcha
  const recaptchaResult = await validateRecaptcha(captchaToken);

  if (!recaptchaResult.success || (recaptchaResult.score !== undefined && recaptchaResult.score < 0.5)) {
    return new Response(JSON.stringify({ message: "reCAPTCHA verification failed." }), { status: 400 });
  }

  // 2. Configura o transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_SECURE === "true",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const fullName = `${firstName} ${lastName}`;

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: `New message from ${fullName}`,
    text: message,
    html: `
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Error sending email" }), { status: 500 });
  }
}

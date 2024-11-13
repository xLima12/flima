import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function sendContactEmail({ name, phone, email, subject, message }) {
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.TO_EMAIL,
    subject: subject,
    text: `Novo contato recebido!
    Nome: ${name}
    Telefone: ${phone}
    Email: ${email}
    Mensagem: ${message}
    `,
  };

  await transporter.sendMail(mailOptions);
}

export default sendContactEmail;

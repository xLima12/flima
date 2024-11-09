import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.HOST_EMAIL,
  port: process.env.PORT_EMAIL,
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASSWORD,
  },
});

async function sendContactEmail({ name, phone, email, subject, message }) {
  const mailOptions = {
    from: process.env.USER_EMAIL,
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

const nodemailer = require("nodemailer");

const sendMail = async ({ email, html, subject }) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_NAME,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });
  const info = await transporter.sendMail({
    from: '"Nhà Trọ Sạch Sẽ" <no-replay@cheemplus1@gmail.com>',
    to: email,
    subject: subject,
    html: html,
  });
  return info;
};

module.exports = sendMail;

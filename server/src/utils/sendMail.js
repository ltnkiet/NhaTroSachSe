const nodemailer = require("nodemailer");

const sendMail = async ({ email, html }) => {
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
    from: '"Nhà Trọ Sạch Sẽ" <no-replay@nhatrosachse.com>',
    to: email,
    subject: "[Nhà Trọ Sạch Sẽ] Password Reset E-Mail",
    html: html,
  });
  return info;
};

module.exports = sendMail;

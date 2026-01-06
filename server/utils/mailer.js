const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
})


async function sendlettermail(to , letterText) {
    await transporter.sendMail({
    from: `"Letter Late" <${process.env.EMAIL_USER}>`,
    to,
    subject: "A letter from your past self - Letter Late",
    text: letterText,
  });
}

module.exports = sendlettermail;
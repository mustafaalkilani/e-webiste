const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  const { html } = JSON.parse(event.body);

  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: "hackmeifyoucan0123@gmail.com",
      pass: "ezvmozlsgxeghhkx",
    }
  });

  let info = await transporter.sendMail({
    from: '"Mustafa Alkilani" <hackmeifyoucan0123@gmail.com>',
    to: 'alkilanymustafa@gmail.com',
    subject: 'Submit Form',
    html: html
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Email sent successfully' })
  };
};
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: "hackmeifyoucan0123@gmail.com",
    pass: "ezvmozlsgxeghhkx",
  }
});

const sendEmail = (html) => {
  const mailOptions = {
    from: 'hackmeifyoucan0123@gmail.com',
    to: 'alkilanymustafa@icloud.com',
    subject: 'New Submit',
    html
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

module.exports = sendEmail;
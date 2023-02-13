let nodemailer = require('nodemailer');

export const MailServer = ({inputFiledsValues}) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: "hackmeifyoucan0123@gmail.com",
          pass: "ezvmozlsgxeghhkx",
        }
      });
      
      let mailOptions = {
          from: `"${inputFiledsValues.firstName}" <${inputFiledsValues.email}>`,
          to: "alkilanymustafa@icloud.com",
          subject: 'Submit',
          text: `Full Name: ${inputFiledsValues.firstName} ${inputFiledsValues.lastName}
          Email: ${inputFiledsValues.email}
          Phone: ${inputFiledsValues.phone}
          Message: ${inputFiledsValues.message}`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

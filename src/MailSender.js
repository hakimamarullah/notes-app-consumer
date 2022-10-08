const nodemailer = require('nodemailer');
require('dotenv').config();

class MailSender {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTPHOST,
      port: process.env.SMTPPORT,
      auth: {
        user: process.env.SMTPUSER,
        pass: process.env.SMTPPASSWORD,
      },
    });
  }

  sendEmail(targetEmail, content) {
    const message = {
      from: 'Notes Apps',
      to: targetEmail,
      subject: 'Ekspor Catatan',
      text: 'Terlampir hasil dari ekspor catatan',
      attachments: [
        {
          filename: 'notes.json',
          content,
        },
      ],
    };

    return this.transporter.sendMail(message);
  }
}

module.exports = MailSender;

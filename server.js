const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/', (req, res) => {
  const { name, email, message } = req.body;

  // Send email using Nodemailer
const transporter = nodemailer.createTransport({
    host: 'smtp.mailersend.com',
    port: 587,
    secure: false, // upgrade later with STARTTLS
auth: {
      user: '<mlsn.a4db53cec5e1d9ea85bf934bf4b4345aa3837bf0a0a9735cd95c2ad444a78183>',
      pass: '<mlsn.a4db53cec5e1d9ea85bf934bf4b4345aa3837bf0a0a9735cd95c2ad444a78183>',
    },
  });
  

  const mailOptions = {
    from: `${name} <${email}>`,
    to: 'codecraftcollective73@gmail.com', // Replace with your email address
subject: 'New Contact Form Submission',
    text: message,
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Message sent successfully');
    }
  });
  
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

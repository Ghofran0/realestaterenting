function toggleContent(id) {
    var content = document.getElementById(id);
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;
    
    // Use a library like Nodemailer to send the email
    // Example using Nodemailer:
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ghofrandesigner03@gmail.com',
        pass: ''
      }
    });
    
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: 'ghofrandesigner03@example.com',
      subject: 'New message from your website',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Failed to send email');
      } else {
        console.log('Email sent:', info.response);
        res.status(200).send('Email sent successfully');
      }
    });
  });
const nodemailer = require('nodemailer');

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendTestEmail() {
  try {
    const emailTo = process.env.EMAIL_TO || process.env.EMAIL_USER;
    
    if (!emailTo || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email environment variables are not properly configured');
      console.log('Required variables:');
      console.log('- EMAIL_USER:', process.env.EMAIL_USER ? '✅ Set' : '❌ Missing');
      console.log('- EMAIL_PASS:', process.env.EMAIL_PASS ? '✅ Set' : '❌ Missing');
      console.log('- EMAIL_TO:', process.env.EMAIL_TO ? '✅ Set' : '❌ Missing (optional, will use EMAIL_USER if not set)');
      return;
    }
    
    // Prepare email content
    const mailOptions = {
      from: `"Test Email" <${process.env.EMAIL_USER}>`,
      to: emailTo,
      subject: 'Test Email from Portfolio Contact Form',
      html: `
        <h1>Test Email</h1>
        <p>This is a test email to verify that your contact form email notifications are working correctly.</p>
        <hr>
        <p><em>This email was sent from your portfolio website contact form.</em></p>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Test email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('Sent to:', emailTo);
  } catch (error) {
    console.error('Error sending test email:', error);
  }
}

// Call the function to send test email
sendTestEmail();
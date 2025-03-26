import nodemailer from 'nodemailer';
import { ContactRequest } from '@shared/schema';

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/**
 * Sends an email notification for a new contact form submission
 */
export async function sendContactNotification(contact: ContactRequest): Promise<boolean> {
  try {
    const emailTo = process.env.EMAIL_TO || process.env.EMAIL_USER;
    
    if (!emailTo || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email environment variables are not properly configured');
      return false;
    }
    
    // Email content
    const mailOptions = {
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: emailTo,
      subject: `New Contact: ${contact.subject}`,
      html: `
        <h1>New Contact Request</h1>
        <p><strong>From:</strong> ${contact.name} (${contact.email})</p>
        <p><strong>Subject:</strong> ${contact.subject}</p>
        <h2>Message:</h2>
        <p>${contact.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>This email was sent from your portfolio website contact form.</em></p>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}
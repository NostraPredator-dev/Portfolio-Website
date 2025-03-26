// @ts-check
import express from 'express';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Create Express app
const app = express();
app.use(express.json());

// Email validation schema
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
  privacy: z.boolean().refine(val => val === true, "You must agree to the privacy policy")
});

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Enable CORS for frontend requests
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    // Validate form data
    const contactData = contactSchema.parse(req.body);
    
    console.log('Received contact form submission:', contactData);
    
    // Email configuration
    const emailTo = process.env.EMAIL_TO || process.env.EMAIL_USER;
    
    if (!emailTo || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email environment variables are not properly configured');
      return res.status(500).json({
        success: false,
        message: "Email service is not properly configured"
      });
    }
    
    // Prepare email content
    const mailOptions = {
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: emailTo,
      subject: `New Contact: ${contactData.subject}`,
      html: `
        <h1>New Contact Request</h1>
        <p><strong>From:</strong> ${contactData.name} (${contactData.email})</p>
        <p><strong>Subject:</strong> ${contactData.subject}</p>
        <h2>Message:</h2>
        <p>${contactData.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>This email was sent from your portfolio website contact form.</em></p>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    
    // Return success response
    res.status(200).json({
      success: true,
      message: "Contact form submitted successfully",
      emailSent: true
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors: error.errors
      });
    }
    
    res.status(500).json({
      success: false,
      message: "An error occurred while processing your request"
    });
  }
});

// Test endpoint
app.get('/api/test-email', async (req, res) => {
  try {
    const testData = {
      name: "Test User",
      email: "test@example.com",
      subject: "Test Email",
      message: "This is a test email from your portfolio contact form.",
    };
    
    // Email configuration
    const emailTo = process.env.EMAIL_TO || process.env.EMAIL_USER;
    
    if (!emailTo || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email environment variables are not properly configured');
      return res.status(500).json({
        success: false,
        message: "Email service is not properly configured"
      });
    }
    
    // Prepare email content
    const mailOptions = {
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: emailTo,
      subject: `Test Email: ${testData.subject}`,
      html: `
        <h1>Test Email</h1>
        <p>This is a test email to verify that your contact form email notifications are working correctly.</p>
        <hr>
        <p><em>This email was sent from your portfolio website contact form.</em></p>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Test email sent successfully:', info.messageId);
    
    // Return success response
    res.status(200).json({
      success: true,
      message: "Test email sent successfully"
    });
  } catch (error) {
    console.error('Error sending test email:', error);
    res.status(500).json({
      success: false,
      message: "An error occurred while sending test email"
    });
  }
});

// Start server
const PORT = parseInt(process.env.EMAIL_SERVICE_PORT || "3001", 10);
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Email service running on port ${PORT}`);
});
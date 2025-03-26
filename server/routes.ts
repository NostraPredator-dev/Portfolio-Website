import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { contactRequestSchema, type ContactRequest } from "@shared/schema";
import { sendContactNotification } from "./mailService";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = contactRequestSchema.parse(req.body);
      
      // Store contact request in memory 
      const savedContact = await storage.saveContactRequest(validatedData);
      
      // Send email notification
      const emailSent = await sendContactNotification(validatedData);
      
      console.log("Contact form submission:", validatedData);
      console.log("Email notification sent:", emailSent);
      
      res.status(200).json({
        success: true,
        message: "Contact request received successfully",
        contactId: savedContact.id,
        emailSent
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors
        });
      } else {
        console.error("Error handling contact request:", error);
        res.status(500).json({
          success: false,
          message: "An error occurred while processing your request"
        });
      }
    }
  });

  // Test email endpoint (for verifying email configuration)
  app.get("/api/test-email", async (req, res) => {
    try {
      const testData: ContactRequest = {
        name: "Test User",
        email: "test@example.com",
        subject: "Test Email",
        message: "This is a test email from your portfolio contact form.",
        privacy: true,
      };
      
      const emailSent = await sendContactNotification(testData);
      
      res.status(200).json({
        success: emailSent,
        message: emailSent 
          ? "Test email sent successfully" 
          : "Failed to send test email. Check server logs for details."
      });
    } catch (error) {
      console.error("Error sending test email:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred while trying to send test email"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
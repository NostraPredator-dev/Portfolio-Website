import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { contactRequestSchema, type ContactRequest } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = contactRequestSchema.parse(req.body);
      
      // Store contact request in database
      const savedContact = await storage.saveContactRequest(validatedData);
      
      // In a production app, we would send an email here
      // using a service like nodemailer
      
      res.status(200).json({
        success: true,
        message: "Contact request received successfully",
        contactId: savedContact.id
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

  const httpServer = createServer(app);

  return httpServer;
}

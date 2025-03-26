import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { contactRequestSchema, type ContactRequest } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  /**
   * This is a simplified backend that mimics successful responses
   * for frontend development. In a production app, you would have
   * actual database operations and validations.
   */

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = contactRequestSchema.parse(req.body);
      
      // Store contact request in memory
      const savedContact = await storage.saveContactRequest(validatedData);
      
      console.log("Contact form submission:", validatedData);
      
      // Mock successful response
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

  // Generic API endpoint for any other requests
  app.all("/api/*", (req, res) => {
    console.log(`Mock API call to ${req.path}`, {
      method: req.method,
      body: req.body,
      query: req.query
    });
    
    // Return generic success response
    res.status(200).json({
      success: true,
      message: "Operation successful",
      data: {}
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}

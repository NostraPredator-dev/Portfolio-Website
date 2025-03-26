// Frontend-only portfolio - Mock schema types for compatibility
import { z } from "zod";

// Mock contact request schema (used in the Contact form)
export const contactRequestSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  privacy: z.boolean().refine(val => val === true, { 
    message: "You must agree to the privacy policy" 
  })
});

// Type definitions
export type ContactRequest = z.infer<typeof contactRequestSchema>;
export type SavedContactRequest = ContactRequest & { id: number };
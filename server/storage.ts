// Frontend-only placeholder file for storage.ts

// Import types from shared schema
import { ContactRequest } from '../shared/schema';

// Mock storage interface
export interface IStorage {
  // Empty interface for frontend-only mode
}

// Mock memory storage implementation
export class MemStorage implements IStorage {
  constructor() {
    console.log("MemStorage initialized (frontend-only mode)");
  }
}

// Export storage instance
export const storage = new MemStorage();
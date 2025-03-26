import { users, type User, type InsertUser, type ContactRequest, type SavedContactRequest } from "@shared/schema";

// Interface for storage operations
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  saveContactRequest(request: ContactRequest): Promise<SavedContactRequest>;
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactRequests: Map<number, SavedContactRequest>;
  currentUserId: number;
  currentContactId: number;

  constructor() {
    this.users = new Map();
    this.contactRequests = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  async saveContactRequest(request: ContactRequest): Promise<SavedContactRequest> {
    const id = this.currentContactId++;
    const now = new Date();
    
    const savedRequest: SavedContactRequest = {
      ...request,
      id,
      createdAt: now
    };
    
    this.contactRequests.set(id, savedRequest);
    console.log("Contact request saved:", savedRequest);
    return savedRequest;
  }
}

export const storage = new MemStorage();
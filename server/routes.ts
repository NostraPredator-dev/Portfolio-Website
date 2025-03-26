// Frontend-only placeholder file for routes.ts
import { Express } from 'express';
import { Server } from 'http';

// Register routes (stub for frontend-only application)
export async function registerRoutes(_app: Express): Promise<Server> {
  console.log("Routes registration skipped (frontend-only mode)");
  return {} as Server;
}
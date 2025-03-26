// Frontend-only replacement for server
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import http from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Start the development server for frontend-only application
 */
async function startFrontendDevServer() {
  try {
    console.log('Starting frontend-only development server...');
    
    const app = express();
    
    // Serve static files from client directory
    app.use(express.static(path.resolve(__dirname, '../client')));
    
    // All requests should serve the index.html for SPA
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '../client/index.html'));
    });
    
    // Start server
    const port = 5000;
    const server = http.createServer(app);
    
    server.listen(port, '0.0.0.0', () => {
      console.log(`  ➜  Local:   http://localhost:${port}/`);
      console.log(`  ➜  Network: http://0.0.0.0:${port}/`);
      console.log('[express] serving on port', port);
      console.log('Frontend-only portfolio application is running (server-side functionality removed)');
    });
    
    return server;
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

// Start the server
startFrontendDevServer();
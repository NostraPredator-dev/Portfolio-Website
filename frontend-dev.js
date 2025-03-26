// Import required modules
import { createServer } from 'vite';

// Start a Vite development server for frontend-only development
async function startFrontendServer() {
  try {
    // Create and configure the Vite server
    const server = await createServer({
      // Configure to use client directory as root
      root: './client',
      
      // Server configuration
      server: {
        port: 3000,
        host: '0.0.0.0', // Allow external connections
        strictPort: true, // Fail if port is in use
      },
    });
    
    // Start listening
    await server.listen();
    
    // Display server URLs
    server.printUrls();
    console.log('Frontend-only portfolio application is running (backend services removed)');
  } catch (error) {
    console.error('Error starting frontend server:', error);
    process.exit(1);
  }
}

// Run the server
startFrontendServer();
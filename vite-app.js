import { createServer } from 'vite';

// Start a standalone Vite server for frontend-only development
async function startFrontendServer() {
  const server = await createServer({
    // Configure server to use client directory as root
    root: './client',
    
    // Configure server settings
    server: {
      port: 5000,
      host: '0.0.0.0', // Allow external connections
      open: true,      // Open browser automatically
    },
  });
  
  await server.listen();
  server.printUrls();
  
  console.log('Frontend-only application running - backend services are mocked');
}

// Start the server
startFrontendServer().catch(err => {
  console.error('Error starting frontend server:', err);
  process.exit(1);
});
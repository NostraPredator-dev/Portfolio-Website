import { createServer } from 'vite';

// Start a Vite development server for the frontend only
async function startFrontendServer() {
  const server = await createServer({
    // Configure server to use client directory
    root: './client',
    server: {
      port: 5000,
      host: '0.0.0.0', // Allow external connections
    },
  });
  
  await server.listen();
  server.printUrls();
}

startFrontendServer().catch(err => {
  console.error('Error starting frontend server:', err);
  process.exit(1);
});
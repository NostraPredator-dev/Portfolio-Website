// server/index.ts
import express from "express";
import { createServer } from "http";
async function main() {
  const app = express();
  app.use(express.json());
  app.use((err, _req, res, _next) => {
    console.error("Unhandled error:", err);
    res.status(500).json({
      success: false,
      message: "An unexpected error occurred"
    });
  });
  app.get("/", (req, res) => {
    res.send(`
      <html>
        <head>
          <title>Portfolio API Server</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
              padding: 2rem;
              max-width: 800px;
              margin: 0 auto;
              line-height: 1.6;
            }
            h1 { color: #333; }
            a { color: #0070f3; }
            pre {
              background: #f6f8fa;
              padding: 1rem;
              border-radius: 5px;
              overflow: auto;
            }
          </style>
        </head>
        <body>
          <h1>Portfolio API Server</h1>
          <p>This is the backend server for the portfolio website. The frontend is served separately via Vite.</p>
          <p>The contact form is handled by the standalone emailService.js server.</p>
          <p>API Status: \u2705 Running</p>
        </body>
      </html>
    `);
  });
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: (/* @__PURE__ */ new Date()).toISOString() });
  });
  const server = createServer(app);
  const PORT = parseInt(process.env.PORT || "5000", 10);
  server.listen(PORT, "0.0.0.0", () => {
    console.log(`API server running on port ${PORT}`);
  });
}
main().catch((err) => {
  console.error("Fatal error during startup:", err);
  process.exit(1);
});

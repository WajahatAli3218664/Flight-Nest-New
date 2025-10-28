import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
// Assuming setupVite, serveStatic, and log are custom utility functions.
// We must ensure 'setupVite' is not called on Vercel.
import { setupVite, serveStatic, log } from "./vite";
import * as http from 'http'; // Import http to correctly type server

const app = express();

// 1. Extend IncomingMessage for rawBody access
declare module 'http' {
  interface IncomingMessage {
    rawBody: unknown
  }
}

// 2. Middleware for rawBody and standard parsing
app.use(express.json({
  verify: (req, _res, buf) => {
    (req as http.IncomingMessage).rawBody = buf; // Type assertion might be needed
  }
}));
app.use(express.urlencoded({ extended: false }));

// 3. Logger Middleware
app.use((req, res, next) => {
  // Vercel environment does not typically run the log function this way,
  // but keeping the logic for local development/debugging.
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      // Log only in non-Vercel env, Vercel handles logging internally
      if (!process.env.VERCEL) {
        log(logLine);
      }
    }
  });

  next();
});


// 4. Main initialization function (async is needed for registerRoutes)
const initializeApp = async () => {
  // registerRoutes is assumed to return the server instance which is not needed for Vercel,
  // but we call it to ensure routes are set up on the 'app' instance.
  const server = await registerRoutes(app);

  // Error Handling Middleware
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // 5. Static File Serving Logic Adjustment
  // VERCEL sets the NODE_ENV to 'production' during deployment.
  // We use 'process.env.VERCEL' for a more explicit check.
  if (app.get("env") === "development" && !process.env.VERCEL) {
    // Only setup Vite (dev server) in local development
    await setupVite(app, server);
  } else {
    // In production (Vercel), serve the built static assets from 'dist'
    serveStatic(app);
  }

  // If running locally (not on Vercel), start the HTTP server
  if (!process.env.VERCEL && server) {
    const port = parseInt(process.env.PORT || '5000', 10);
    server.listen({
      port,
      host: "localhost",
    }, () => {
      log(`serving on port ${port}`);
    });
  }

  return app;
};

// 6. Execution and Export
let initializedApp: express.Application | null = null;

// Initialize the app once and export the handler.
(async () => {
  initializedApp = await initializeApp();
})();

// Vercel requires the app instance to be exported as a handler (the default export).
// This is the CRITICAL change for Vercel deployment.
// Vercel will call this function/instance directly without listening on a port.
export default (req: Request, res: Response) => {
  if (!initializedApp) {
    // If for some reason initialization failed/is pending, return a 503
    res.status(503).json({ message: "Server initializing" });
    return;
  }
  initializedApp(req, res);
};

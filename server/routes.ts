import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactEmail } from "./email";
import { 
  insertContactSubmissionSchema, 
  insertVisaApplicationSchema,
  insertNewsletterSubscriptionSchema
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(data);
      
      // Send email notification
      try {
        await sendContactEmail(data);
      } catch (emailError) {
        console.error("Failed to send email:", emailError);
      }
      
      res.json({ success: true, submission });
    } catch (error) {
      res.status(400).json({ success: false, error: "Invalid request data" });
    }
  });

  app.post("/api/visa-application", async (req, res) => {
    try {
      const data = insertVisaApplicationSchema.parse(req.body);
      const application = await storage.createVisaApplication(data);
      res.json({ success: true, application });
    } catch (error) {
      res.status(400).json({ success: false, error: "Invalid request data" });
    }
  });

  app.post("/api/newsletter", async (req, res) => {
    try {
      const data = insertNewsletterSubscriptionSchema.parse(req.body);
      const subscription = await storage.createNewsletterSubscription(data);
      res.json({ success: true, subscription });
    } catch (error) {
      res.status(400).json({ success: false, error: "Invalid request data" });
    }
  });

  app.get("/api/contact-submissions", async (req, res) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch submissions" });
    }
  });

  app.get("/api/visa-applications", async (req, res) => {
    try {
      const applications = await storage.getAllVisaApplications();
      res.json(applications);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch applications" });
    }
  });

  app.get("/api/newsletter-subscriptions", async (req, res) => {
    try {
      const subscriptions = await storage.getAllNewsletterSubscriptions();
      res.json(subscriptions);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch subscriptions" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
# Flight Nest - Travel & Visa Services Platform

## Overview

Flight Nest is a premium travel and visa services landing page application built as a modern full-stack web application. The platform serves as a customer-facing website for a travel agency specializing in visa processing, flight booking, and curated travel packages. The application features a responsive, conversion-focused design inspired by premium travel platforms like Airbnb and Booking.com, with a luxury aesthetic using dark teal/navy and gold accent colors.

The system is designed to capture leads through multiple touchpoints including contact forms, visa applications, and newsletter subscriptions, while providing comprehensive information about destinations, services, and travel requirements.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- Wouter for client-side routing (lightweight alternative to React Router)
- TanStack Query (React Query) for server state management and API interactions

**UI Component System**
- Shadcn/ui component library built on Radix UI primitives for accessible, headless components
- Tailwind CSS for utility-first styling with custom design tokens
- Custom design system based on premium travel platform aesthetics:
  - Color palette: Dark Teal/Navy (#0A2E47, #1A4D5C) as primary, Gold (#D4AF37) as accent
  - Typography: Poppins and Montserrat font families
  - Spacing system using Tailwind's 4-based scale
  - Custom CSS variables for theming (supports light/dark modes)

**Page Structure**
- Single-page application with multiple routes:
  - Home: Main landing page with hero, services, destinations, testimonials
  - Schengen Countries: Dedicated visa information and application form
  - Other Countries: Visa services for non-Schengen destinations
  - Trips: Travel package catalog
  - FAQs: Frequently asked questions
  - Blog: Travel content and guides
  - Contact: Contact form and information
  - Refund Policy: Terms and conditions

**Component Architecture**
- Feature-based component organization under `client/src/components/`
- Reusable UI components from Shadcn/ui in `client/src/components/ui/`
- Page-level components in `client/src/pages/`
- Custom hooks for shared logic (toast notifications, mobile detection)
- SEO component using React Helmet Async for meta tag management

### Backend Architecture

**Server Framework**
- Express.js server for API endpoints and static file serving
- TypeScript for type safety across the stack
- Session-based architecture preparation (connect-pg-simple imported)

**API Design**
- RESTful API endpoints under `/api` prefix:
  - `POST /api/contact` - Contact form submissions
  - `POST /api/visa-application` - Visa application submissions
  - `POST /api/newsletter` - Newsletter subscriptions
  - `GET /api/contact-submissions` - Retrieve contact submissions
  - `GET /api/visa-applications` - Retrieve visa applications

**Request/Response Handling**
- JSON body parsing with raw body preservation for webhook verification
- Zod schema validation for request data using schemas from shared directory
- Structured error responses with appropriate HTTP status codes
- Request logging middleware for API routes with duration tracking

**Development/Production Setup**
- Vite middleware integration in development for HMR
- Separate build process for client and server
- Static file serving from dist/public in production
- Custom Vite configuration with Replit-specific plugins

### Data Storage Solutions

**Database Strategy**
- Drizzle ORM configured for PostgreSQL (Neon serverless)
- Schema-first approach with TypeScript types derived from database schema
- Schema location: `shared/schema.ts` for sharing between client and server

**Data Models**
- Users table: Basic authentication structure (id, username, password)
- Contact Submissions: Name, email, phone, subject, message, timestamp
- Visa Applications: Full name, email, phone, country, travel date, visa type, additional fields
- Newsletter Subscriptions: Email capture with timestamp

**Current Implementation**
- In-memory storage implementation (`MemStorage` class) for development
- Interface-based storage abstraction (`IStorage`) allows easy swapping to database implementation
- Database configuration present but not actively connected (migration files in `/migrations`)

**Data Validation**
- Drizzle-Zod integration generates Zod schemas from database schema
- Request validation using these schemas before storage operations
- Type-safe data flow from API to storage layer

### Authentication and Authorization

**Current State**
- User schema defined but authentication not implemented
- Session infrastructure prepared (connect-pg-simple for PostgreSQL session store)
- No active authentication middleware or protected routes

**Planned Implementation**
- Session-based authentication approach indicated by dependencies
- User table with username/password structure suggests credential-based auth
- No JWT or OAuth integrations present

### External Dependencies

**Third-Party UI Libraries**
- Radix UI component primitives for accessible UI elements (20+ component packages)
- Lucide React for icon system
- React Icons (specifically Simple Icons) for social media and brand logos
- Embla Carousel for image carousels
- React Hook Form with Zod resolver for form management
- React Day Picker (via Calendar component) for date selection

**Development Tools**
- ESBuild for server bundle compilation
- PostCSS with Tailwind and Autoprefixer
- TSX for TypeScript execution in development
- Drizzle Kit for database migrations and schema management

**Asset Management**
- Generated images stored in `attached_assets/generated_images/` directory
- Google Fonts integration (Poppins, Montserrat) via CDN
- Static assets served from Vite's public directory

**Database & Infrastructure**
- Neon serverless PostgreSQL (via @neondatabase/serverless)
- Database URL configured via environment variable
- No active caching layer (Redis, etc.)
- No CDN integration for static assets
- No email service integration (forms submit to database only)

**Deployment Considerations**
- Replit-specific plugins for development environment
- Environment variable required: `DATABASE_URL`
- Build outputs to `dist/` directory
- No containerization or orchestration configuration present
- Server runs on Node.js with ESM module format
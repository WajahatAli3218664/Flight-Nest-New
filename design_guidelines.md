# Flight Nest Landing Page - Design Guidelines

## Design Approach
**Reference-Based Approach** drawing from premium travel platforms (Airbnb, Booking.com, Expedia) combined with luxury service aesthetics. Focus on building trust, showcasing destinations, and creating an emotional connection while maintaining professional credibility for visa services.

## Color System
- **Primary**: Dark Teal/Navy Blue (#0A2E47, #1A4D5C)
- **Accent**: Gold (#D4AF37, #C5A572) - use sparingly for CTAs and highlights
- **Background**: White (#FFFFFF) with subtle off-white variations (#F8F9FA)
- **Text**: Dark navy for primary, medium gray (#4A5568) for secondary

## Typography
**Font Stack**: Poppins (primary) with Montserrat (secondary)
- **Hero Headline**: Poppins Bold, 3.5rem (desktop) / 2rem (mobile)
- **Section Headers**: Poppins SemiBold, 2.5rem (desktop) / 1.75rem (mobile)
- **Subheadings**: Poppins Medium, 1.5rem
- **Body Text**: Poppins Regular, 1rem with 1.6 line-height
- **Buttons**: Poppins SemiBold, 1rem

## Layout System
**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- **Section Padding**: py-20 (desktop) / py-12 (mobile)
- **Container**: max-w-7xl with px-6 (mobile) / px-12 (desktop)
- **Element Spacing**: gap-8 for grids, space-y-6 for vertical stacks

## Page Structure (7 Sections)

### 1. Hero Section (90vh)
- **Layout**: Full-screen high-quality tropical destination background image (Maldives/Bali style beach with crystal water)
- **Overlay**: Dark gradient overlay (rgba(10, 46, 71, 0.6)) for text readability
- **Content**: Centered layout with headline, subheadline, dual CTAs (primary gold button "Start Your Journey", secondary white outline "Explore Services"), trust badge ("Trusted by 10,000+ travelers")
- **Special**: Floating search card component at bottom third - includes destination selector, departure date, visa type dropdown, and search button

### 2. Services Grid (3-Column)
- **Layout**: 3 equal-width cards (stack to 1 column on mobile)
- **Cards**: White background, rounded-2xl, subtle shadow, 40px padding
- **Content**: Gold icon (60px), service title, 2-line description, "Learn More" link
- **Services**: "Visa Processing", "Flight Booking", "Travel Packages"

### 3. Why Choose Flight Nest (2-Column Split)
- **Left**: Large high-quality image of happy travelers at airport/destination
- **Right**: Content block with section header, 4 benefit points with checkmark icons, gold accent borders
- **Benefits**: Fast processing, expert guidance, competitive rates, 24/7 support

### 4. Destinations Showcase
- **Layout**: Asymmetric masonry grid (2 large cards, 3 smaller cards)
- **Cards**: Image-first with location name overlay, "From $XXX" pricing badge
- **Destinations**: Dubai, Maldives, Thailand, Singapore, Europe
- **CTA**: "View All Destinations" centered button below grid

### 5. Process Timeline (4 Steps)
- **Layout**: Horizontal timeline with connecting line (vertical on mobile)
- **Steps**: Numbered circles (gold background), step title, brief description
- **Flow**: "Choose Destination" → "Submit Documents" → "We Process" → "Travel Ready"

### 6. Testimonials (3-Column)
- **Layout**: 3 equal cards with customer photo, quote, name, location
- **Design**: White cards, rounded corners, subtle shadow, 5-star rating display
- **Images**: Circular customer photos at top of each card

### 7. Final CTA Section
- **Background**: Dark teal with subtle pattern overlay
- **Layout**: Centered content, white text
- **Content**: Compelling headline, subheadline, prominent gold CTA button, secondary white outline button
- **Addition**: Small trust indicators (payment methods, certifications)

## Component Specifications

### Buttons
- **Primary (Gold)**: Rounded-full, px-8, py-4, gold background, white text, smooth shadow
- **Secondary (Outline)**: Rounded-full, px-8, py-4, white border, transparent background
- **Hover**: Subtle scale (1.02), deeper shadow - NO custom hover states for hero buttons

### Cards
- **Border Radius**: rounded-2xl (16px) consistently
- **Shadow**: shadow-lg for cards, shadow-xl for elevated elements
- **Padding**: p-8 for content cards, p-6 for smaller components

### Search Component (Hero)
- **Background**: White with backdrop-blur-md
- **Layout**: Horizontal fields with gold search button on right
- **Fields**: 4 inputs (destination, dates, visa type, travelers) with subtle borders

## Navigation
- **Type**: Transparent over hero, transitions to white background on scroll
- **Logo**: Left-aligned, Flight Nest wordmark with small icon
- **Menu**: Right-aligned links (Services, Destinations, About, Contact), gold "Get Started" button
- **Mobile**: Hamburger menu, slide-in drawer

## Footer
- **Layout**: 4-column grid (Company, Services, Destinations, Newsletter)
- **Design**: Dark teal background, white/gray text
- **Content**: Quick links, social icons, newsletter signup form, payment/certification badges
- **Bottom Bar**: Copyright, privacy links, language selector

## Images Required
1. **Hero**: Wide tropical beach/luxury destination (2560x1440)
2. **Why Choose Us**: Happy travelers candid shot (1200x800)
3. **Destinations**: 5 high-quality location images (800x600 each)
4. **Testimonials**: 3 customer headshots (circular, 150x150)
5. **Icons**: Visa, flight, package icons from Heroicons library

## Animations
**Minimal & Purposeful**:
- Fade-in on scroll for section entries (subtle, once)
- Gentle hover scale (1.02) for cards
- Smooth scroll behavior for anchor links
- NO complex scroll-driven animations or parallax

## Responsive Breakpoints
- Mobile: < 768px (single column, stacked layout)
- Tablet: 768px - 1024px (2-column where appropriate)
- Desktop: > 1024px (full multi-column layouts)
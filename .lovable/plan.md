
# InnovationFlow ISRO — Introduction Landing Page

## Brand & Visual Identity
- **Color scheme**: Israeli Blue (#0038B8) + Romanian Gold (#FCD116) as primary accents, with deep navy (#0A1628) backgrounds and white sections
- **Typography**: Modern sans-serif (Inter for body, bold display font for headings)
- **Language toggle**: EN/RO switch in the header navbar, toggling all page text dynamically

## Page Structure

### 1. Sticky Navigation Header
- Company logo (placeholder until user uploads)
- Nav links that scroll to page sections: About, Services, How It Works, Contact
- EN | RO language toggle button
- Subtle blur backdrop on scroll

### 2. Hero Section — "The Bridge" Concept
- Full-screen dark navy background
- Animated connecting lines/particles flowing between two points (Israel → Romania) — abstract bridge visual
- Large bold headline: *"Your Bridge to the Romanian & European Market"*
- Subtitle describing the value proposition
- Smooth scroll-down indicator arrow
- Background gradient animation (blue ↔ gold subtle shift)

### 3. "Who We Are" Section
- Brief company intro: InnovationFlow ISRO as a strategic partner for Israeli tech companies entering Romania/EU
- Two audience cards side by side:
  - **For Israeli Tech Companies**: "We bring your technology to Romania & the EU"
  - **For Romanian Partners**: "Access cutting-edge Israeli innovation"
- Scroll-triggered fade-in animations

### 4. Services Overview (6 cards with icons)
Cards for each service, animated on scroll:
1. **Market Entry & Strategy** — Deep market analysis, regulatory navigation
2. **EU Grants & Funding** — Grant identification, consortium building
3. **Business Development & Sales** — Pipeline building, tender management, C-level access
4. **Marketing & Localization** — Translation, trade shows, local branding
5. **Deployment & Pilots** — Beta sites, logistics, technical support
6. **Soft Landing Services** — Legal infrastructure, HR recruitment, office hosting

Each card has an icon, title, and brief description with hover effects

### 5. "How It Works" — 90-Day Roadmap
Three-step timeline with animated progress:
- **Weeks 1-3**: Kickoff — Agreement, materials transfer, market research
- **Weeks 4-8**: Localization — Translate materials, initial client outreach
- **Weeks 9-12**: Meetings — Schedule meetings in Romania, demos, proposals

### 6. Key Differentiators (4 pillars)
Animated counter/cards:
1. Equal partnership & synergy
2. Success-based model
3. Execution power — navigate Romanian bureaucracy
4. Cross-domain flexibility (Water, Health, IT)

### 7. Contact / CTA Section
- "Let's Talk" heading with a simple contact form (name, email, company, message)
- Background with subtle gold gradient

### 8. Footer
- Company info, quick links, social media placeholders
- © InnovationFlow ISRO

## Technical Details
- All text stored in a translations object (EN + RO) for easy language switching via React context
- Framer Motion for scroll and background animations
- Canvas/CSS particles for the bridge hero visual
- Fully responsive (mobile-first)
- Smooth scroll navigation from header links

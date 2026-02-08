# BillEase - Healthcare Billing Solutions Website

A modern, fully responsive healthcare billing platform website built with Next.js, React, Tailwind CSS, and Framer Motion. The site features a professional design inspired by Plaid.com, adapted for healthcare billing solutions.

## Features

- **Multi-page Website**: Home, Services, About, Pricing, Blog, Contact, and 404 pages
- **Modern Design**: Clean, professional aesthetic with a blue/orange color scheme
- **Responsive**: Fully responsive design for mobile, tablet, and desktop
- **Smooth Animations**: Subtle animations and transitions using Framer Motion
- **Contact Form**: Fully functional contact form with validation using React Hook Form
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation
- **Performance**: Optimized for fast loading and smooth performance

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion 11
- **Form Management**: React Hook Form 7
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### Build for Production

```bash
# Build the project
npm run build

# Start production server
npm start
```

## Project Structure

```
├── app/
│   ├── page.tsx                 # Home page
│   ├── services/
│   │   └── page.tsx            # Services page
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── pricing/
│   │   └── page.tsx            # Pricing page
│   ├── blog/
│   │   └── page.tsx            # Blog page
│   ├── contact/
│   │   └── page.tsx            # Contact page
│   ├── not-found.tsx           # 404 page
│   ├── layout.tsx              # Root layout
│   └── globals.css             # Global styles
├── components/
│   ├── navbar.tsx              # Navigation component
│   └── footer.tsx              # Footer component
└── package.json                # Dependencies
```

## Pages

### Home (`/`)
- Hero section with CTA buttons
- Statistics dashboard with animated counters
- How it works section with 4-step process
- Services overview grid
- Testimonials carousel
- Call-to-action section

### Services (`/services`)
- Detailed service descriptions
- Security & compliance information
- Integration options
- Feature highlights

### About (`/about`)
- Company mission, vision, and values
- Company story and background
- Team member profiles
- Timeline of key milestones
- Call-to-action section

### Pricing (`/pricing`)
- Three pricing tiers (Starter, Professional, Enterprise)
- Feature comparison
- FAQ section
- Free trial CTA

### Blog (`/blog`)
- Featured articles
- Article categories and metadata
- Newsletter signup
- Related articles section

### Contact (`/contact`)
- Contact information (email, phone, address)
- Business hours
- Contact form with validation
- Success message feedback

### 404 Page
- Error page for non-existent routes
- Links back to home and contact pages

## Customization

### Colors
Update the color scheme in `/app/globals.css`:
```css
:root {
  --primary: 217 100% 38%;      /* Blue */
  --accent: 20 100% 50%;        /* Orange */
  --background: 0 0% 99.5%;     /* Off-white */
  /* ... more colors ... */
}
```

### Content
Edit content in each page's component. All text is easily replaceable:
- Hero headlines and CTAs
- Service descriptions
- Team bios
- Pricing details
- Blog articles

### Fonts
Font families are configured in `layout.tsx`. Currently uses Geist fonts from Google Fonts.

## Performance Optimizations

- Image lazy loading
- Code splitting with Next.js
- Optimized animations with Framer Motion
- Tailwind CSS tree-shaking
- Minimal dependencies

## Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance
- Alt text for images

## Deployment

### Deploy to Vercel

```bash
# Push to GitHub and connect to Vercel
# or

# Deploy directly with Vercel CLI
vercel
```

### Deploy to Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Google Cloud Run
- Azure Static Web Apps
- Self-hosted servers

## Dependencies

Key dependencies included:

```json
{
  "next": "16.1.6",
  "react": "^19",
  "react-dom": "^19",
  "framer-motion": "^11.0.3",
  "react-hook-form": "^7.54.1",
  "tailwindcss": "^3.4.17",
  "lucide-react": "^0.544.0"
}
```

## Environment Variables

Currently, no environment variables are required. For future integrations (email service, analytics, etc.), add them to `.env.local`:

```
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

## License

This project is built with v0. See v0.app for more information.

## Support

For questions or issues, contact the development team at support@billease.com or visit /contact page.

---

**Built with v0** - The AI-powered UI builder for modern web applications.

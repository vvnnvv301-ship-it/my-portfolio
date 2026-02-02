# Dilmurod Yusupov - Portfolio Website

Professional portfolio showcasing AI expertise, Prompt Engineering skills, and AgroTech innovation.

## 🚀 Features

- ✨ Modern, responsive design with dark mode
- 🎨 Smooth animations with Framer Motion
- 🌐 Multi-language support (Uzbek, English, Russian)
- 📱 PWA-ready (installable as mobile app)
- ♿ Accessibility-focused (WCAG compliant)
- 🔍 SEO optimized with Open Graph & Twitter Cards
- 📧 Functional contact form with EmailJS
- 🎖️ Interactive certificate gallery
- 🔝 Back to top button
- ⚡ Built with Next.js 16 & TypeScript

## 📋 Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure EmailJS (for Contact Form)

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content
   - `{{to_name}}` - Your name (Dilmurod Yusupov)
4. Get your credentials:
   - Public Key
   - Service ID
   - Template ID
5. Update `src/components/contact.tsx`:
   ```typescript
   emailjs.init('YOUR_PUBLIC_KEY')
   await emailjs.send(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     { ... }
   )
   ```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### 4. Build for Production

```bash
npm run build
npm start
```

## 🛠️ Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Email:** EmailJS
- **Theme:** next-themes
- **Deployment:** Vercel

## 📁 Project Structure

```
my-portfolio/
├── public/
│   ├── assets/
│   │   └── images/         # Images and certificates
│   └── manifest.json       # PWA manifest
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with metadata
│   │   ├── page.tsx        # Home page
│   │   ├── sitemap.ts      # Dynamic sitemap
│   │   ├── robots.ts       # Robots.txt config
│   │   └── not-found.tsx   # Custom 404 page
│   ├── components/
│   │   ├── hero.tsx
│   │   ├── summary.tsx
│   │   ├── skills.tsx
│   │   ├── experience.tsx
│   │   ├── projects.tsx
│   │   ├── education.tsx
│   │   ├── certificates.tsx
│   │   ├── contact.tsx
│   │   ├── footer.tsx
│   │   ├── navbar.tsx
│   │   ├── back-to-top.tsx
│   │   ├── skip-to-content.tsx
│   │   └── structured-data.tsx
│   ├── contexts/
│   │   └── language-context.tsx
│   └── lib/
│       └── translations/    # Multi-language support
└── package.json
```

## 🎯 SEO Features

- ✅ Comprehensive meta tags
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card support
- ✅ JSON-LD structured data
- ✅ Dynamic sitemap.xml
- ✅ Robots.txt configuration
- ✅ Canonical URLs
- ✅ Multi-language support

## ♿ Accessibility Features

- ✅ Skip to content link
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Semantic HTML structure
- ✅ Focus indicators
- ✅ Screen reader friendly

## 📱 PWA Features

- ✅ Web app manifest
- ✅ Theme color configuration
- ✅ Installable on mobile devices
- ✅ Responsive design

## 📊 Performance

- Fast page loads with Next.js optimization
- Image optimization with next/image
- Code splitting
- Lazy loading
- Optimized fonts

## 🔗 Links

- **Live Site:** https://dilmurod-yusupov.vercel.app
- **GitHub:** https://github.com/vvnnvv301-ship-it/my-portfolio
- **LinkedIn:** https://linkedin.com/in/dilmurod-yusupov-a921ab253

## 📝 License

© 2026 Dilmurod Yusupov. All rights reserved.

## 🤝 Contact

- **Email:** dilmurodyusupov2022@gmail.com
- **Phone:** +998 90 643 11 03

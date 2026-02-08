# Portfolio Website

A modern, interactive portfolio website built with React, TypeScript, and Vite.

## ✨ Features

- 🎨 Beautiful floating panel UI with 3D effects
- 📱 Fully responsive design
- ⚡ Fast and optimized with Vite
- 🎯 Single Page Application (SPA)
- 🌙 Dark theme with smooth animations

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev:client

# Open http://localhost:5000
```

### Build for Production

```bash
# Build static site
npm run build:static

# Preview production build
npm run preview
```

## 📦 Project Structure

```
Portfolio/
├── client/              # Frontend React app
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── sections/    # Page sections
│   │   └── ...
│   └── index.html
├── server/              # Express server (for local dev)
├── dist/                # Build output (generated)
└── script/              # Build scripts
```

## 🌐 Deployment

This is a **frontend-only** static site. See [HOSTING.md](./HOSTING.md) for detailed deployment instructions.

### Quick Deploy Options:

1. **Vercel** (Recommended): `vercel` or connect GitHub repo
   - ✅ **Custom domains supported (FREE)** with automatic SSL
   - ✅ Automatic HTTPS certificates
   - ✅ Global CDN included
2. **Netlify**: `netlify deploy --prod` or connect GitHub repo
   - ✅ Custom domains supported
3. **GitHub Pages**: See HOSTING.md for GitHub Actions setup
4. **Cloudflare Pages**: Connect repo and deploy

All hosting configurations are already set up! Just push to GitHub and connect.

### Custom Domain Setup

**Vercel (Recommended):**
1. Deploy your site
2. Go to Settings → Domains
3. Add your domain (e.g., `yourname.com`)
4. Configure DNS records (CNAME or A record)
5. SSL certificate is automatically provisioned!

See [HOSTING.md](./HOSTING.md) for detailed custom domain instructions.

## 🛠️ Available Scripts

- `npm run dev:client` - Start Vite dev server (port 5000)
- `npm run dev` - Start full dev server with Express
- `npm run build:static` - Build static site for production
- `npm run preview` - Preview production build locally
- `npm run check` - Type check TypeScript

## 📝 Notes

- No database required - all data is static/hardcoded
- No environment variables needed
- Pure frontend application
- Optimized for performance and SEO

## 🎨 Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Wouter** - Routing
- **Radix UI** - Component primitives

## 📄 License

MIT

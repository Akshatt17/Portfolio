# Hosting Guide

Your portfolio is now a **frontend-only static site** and can be hosted on any static hosting platform!

## 🚀 Quick Start (Local Development)

```bash
# Install dependencies (if not already done)
npm install

# Run development server
npm run dev:client

# Open http://localhost:5000 in your browser
```

## 📦 Build for Production

```bash
# Build static site
npm run build:static

# Preview the built site locally
npm run preview
```

The built files will be in `dist/public/` directory.

## 🌐 Hosting Options

### Option 1: Vercel (Recommended - Easiest)

1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```
   Or connect your GitHub repo at [vercel.com](https://vercel.com)

3. **Configuration**: Already set up in `vercel.json`
   - Build command: `npm run build:static`
   - Output directory: `dist/public`
   - Framework: Vite

**Benefits:**
- ✅ Free tier with generous limits
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Automatic deployments from Git
- ✅ Preview deployments for PRs
- ✅ **Custom domain support (FREE)**

### Custom Domain on Vercel

**Yes! Vercel supports custom domains for FREE** with automatic SSL certificates! 🔒

#### Setup Steps:

1. **Deploy your site first** (get the default `your-project.vercel.app` URL)

2. **Add Custom Domain:**
   - Go to your project dashboard on Vercel
   - Click on **Settings** → **Domains**
   - Enter your domain (e.g., `yourname.com` or `www.yourname.com`)
   - Click **Add**

3. **Configure DNS:**
   
   **Option A: Root Domain (yourname.com)**
   - Add an **A record** pointing to Vercel's IP:
     ```
     Type: A
     Name: @
     Value: 76.76.21.21
     ```
   - Or use **CNAME** (recommended):
     ```
     Type: CNAME
     Name: @
     Value: cname.vercel-dns.com
     ```
   
   **Option B: Subdomain (www.yourname.com)**
   - Add a **CNAME record**:
     ```
     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     ```

4. **Wait for DNS propagation** (usually 5-60 minutes)

5. **SSL Certificate:** Vercel automatically provisions and renews SSL certificates (HTTPS) - no extra setup needed!

6. **Redirects (Optional):** You can set up redirects in `vercel.json`:
   ```json
   {
     "redirects": [
       {
         "source": "/old-path",
         "destination": "/new-path",
         "permanent": true
       }
     ]
   }
   ```

#### Features:
- ✅ **FREE** custom domains (no extra cost)
- ✅ **Automatic SSL/HTTPS** (Let's Encrypt certificates)
- ✅ **Automatic renewal** of SSL certificates
- ✅ **WWW redirect** - automatically redirect www to non-www (or vice versa)
- ✅ **Multiple domains** - add as many domains as you want
- ✅ **Domain verification** - Vercel verifies you own the domain

#### Example Domain Providers:
- **Namecheap** - Popular and affordable
- **Google Domains** - Simple interface
- **Cloudflare** - Free DNS + DDoS protection
- **GoDaddy** - Widely used
- **Any registrar** - Vercel works with any DNS provider

#### Pro Tips:
- Use **CNAME** records when possible (easier to manage)
- Vercel supports **apex domains** (yourname.com) via A records or CNAME flattening
- You can add both `yourname.com` and `www.yourname.com` - Vercel handles redirects
- SSL certificates are issued automatically within minutes of DNS propagation

### Option 2: Netlify

1. **Install Netlify CLI** (optional):
   ```bash
   npm i -g netlify-cli
   ```

2. **Deploy**:
   ```bash
   netlify deploy --prod
   ```
   Or connect your GitHub repo at [netlify.com](https://netlify.com)

3. **Configuration**: Already set up in `netlify.toml`
   - Build command: `npm run build:static`
   - Publish directory: `dist/public`

**Benefits:**
- ✅ Free tier
- ✅ Automatic HTTPS
- ✅ Form handling (if needed later)
- ✅ Serverless functions support

### Option 3: GitHub Pages

1. **Update `vite.config.ts`** to set `base: '/your-repo-name/'`:
   ```typescript
   export default defineConfig({
     base: '/Portfolio/', // Your repo name
     // ... rest of config
   })
   ```

2. **Add GitHub Actions workflow** (create `.github/workflows/deploy.yml`):
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [ main ]
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '20'
         - run: npm install
         - run: npm run build:static
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist/public
   ```

3. **Enable GitHub Pages** in repo settings → Pages → Source: GitHub Actions

### Option 4: Cloudflare Pages

1. Connect your GitHub repo at [pages.cloudflare.com](https://pages.cloudflare.com)

2. **Build settings**:
   - Build command: `npm run build:static`
   - Build output directory: `dist/public`
   - Framework preset: Vite

**Benefits:**
- ✅ Free unlimited bandwidth
- ✅ Fast global CDN
- ✅ Automatic HTTPS

### Option 5: Render

1. Create a new **Static Site** at [render.com](https://render.com)

2. **Settings**:
   - Build command: `npm run build:static`
   - Publish directory: `dist/public`

### Option 6: Traditional Hosting (cPanel, FTP, etc.)

1. Build the site:
   ```bash
   npm run build:static
   ```

2. Upload everything in `dist/public/` to your web server's `public_html` or `www` directory

3. Ensure your server serves `index.html` for all routes (SPA routing)

## 🔧 Environment Variables

Since this is frontend-only, **no environment variables are needed**! 🎉

## 📝 Notes

- The site is a **Single Page Application (SPA)** using client-side routing
- All hosting platforms above handle SPA routing automatically via the config files
- The build output is optimized and minified for production
- No backend/server required - pure static files

## 🐛 Troubleshooting

**Build fails:**
- Make sure all dependencies are installed: `npm install`
- Check Node.js version (requires Node 18+)

**Routes not working:**
- Ensure your hosting platform is configured to serve `index.html` for all routes
- Check the hosting config files (`vercel.json`, `netlify.toml`) are correct

**Assets not loading:**
- Verify the build output directory matches your hosting config
- Check that public assets are in `client/public/` directory

## 🎯 Recommended: Vercel

For the easiest setup, use **Vercel**:
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy! (It auto-detects Vite and uses `vercel.json`)

Your site will be live in under 2 minutes! 🚀

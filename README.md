# Providence Elite HVAC Website

A professional, conversion-focused HVAC website built with Next.js and Tailwind CSS.

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI (Recommended)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Link to existing project? **No** (first time)
   - Project name: `hvac-providence` (or your choice)
   - Directory: `./` (current directory)
   - Override settings? **No**

4. For production deployment:
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via GitHub

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) and sign in

3. Click **"Add New Project"**

4. Import your GitHub repository

5. Vercel will auto-detect Next.js settings - just click **"Deploy"**

6. Your site will be live in ~2 minutes!

### Option 3: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in

2. Click **"Add New Project"**

3. Click **"Browse"** and select this folder

4. Vercel will auto-detect Next.js - click **"Deploy"**

## Environment Variables

No environment variables needed for this static site. If you add features later (like form submission), you can add them in the Vercel dashboard under Project Settings → Environment Variables.

## Custom Domain

After deployment:
1. Go to your project in Vercel dashboard
2. Click **Settings** → **Domains**
3. Add your custom domain (e.g., `providencehvac.com`)
4. Follow DNS configuration instructions

## Build

```bash
npm run build
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Fonts**: Google Fonts (Playfair Display + Inter)

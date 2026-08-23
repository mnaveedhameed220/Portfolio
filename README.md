# Muhammad Naveed — Portfolio

A static one-page portfolio built from your resume. No build step, no framework — just `index.html`, `style.css`, and `script.js`.

## Deploy on Vercel (easiest — no GitHub needed)

1. Go to https://vercel.com and sign up / log in (free).
2. Click **Add New → Project**.
3. Choose **"Deploy without Git"** (drag-and-drop option), or if that's not visible:
   - Install the Vercel CLI instead — see the "Deploy via CLI" steps below.
4. Drag the whole `portfolio` folder (this folder) into the upload area.
5. Click **Deploy**. Vercel auto-detects it as a static site — no settings to change.
6. You'll get a live link like `https://your-project.vercel.app` in under a minute.

## Deploy via CLI (if you have Node.js installed)

```bash
npm install -g vercel
cd portfolio
vercel
```

Follow the prompts (press Enter to accept defaults). It will give you a live URL immediately, and a production URL after you run `vercel --prod`.

## Deploy via GitHub (best if you want auto-updates)

1. Create a new repo on GitHub and push these three files to it:
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. On vercel.com, click **Add New → Project → Import Git Repository**, pick the repo.
3. Leave all settings as default (it's a static site) and click **Deploy**.
4. Every future push to `main` will auto-redeploy.

## Editing content

Everything is in `index.html` — experience, projects, skills, and contact info are plain HTML you can edit directly (no build tools required). Colors and fonts live in `style.css` under the `:root` section at the top if you ever want to change the theme.

## Custom domain (optional)

In your Vercel project → **Settings → Domains**, add your own domain and follow the DNS instructions Vercel gives you.

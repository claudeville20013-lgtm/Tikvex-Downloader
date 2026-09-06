# Tikvex — landing page

A static landing page for **Tikvex**, an app for saving TikTok videos in HD without the watermark. No build step — it's plain HTML/CSS/JS, so it drops straight into GitHub Pages.

## What's inside

```
index.html          the page
css/style.css        styles
js/script.js          the one bit of interactivity (footer year, hero demo button)
assets/               your app icon + real screenshots (png + optimized webp)
```

## Host it on GitHub Pages (free)

1. **Create a repo.** On GitHub, click **New repository**. Name it something like `tikvex-website`, keep it **Public**, and don't add a README (you already have one).

2. **Push these files.** From this folder, run:
   ```bash
   git init
   git add .
   git commit -m "Tikvex landing page"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/tikvex-website.git
   git push -u origin main
   ```
   Swap in your GitHub username and the repo name you chose.

3. **Turn on Pages.** In the repo, go to **Settings → Pages**. Under "Build and deployment", set:
   - Source: `Deploy from a branch`
   - Branch: `main`, folder `/ (root)`

   Save. GitHub takes a minute or two to build it.

4. **Visit your site.** It'll be live at:
   ```
   https://YOUR-USERNAME.github.io/tikvex-website/
   ```
   (Refresh Settings → Pages if the link isn't shown yet — it appears once the first deploy finishes.)

### Using your own domain instead

If you own a domain, add a file named `CNAME` (no extension) to the repo root containing just your domain, e.g.:
```
tikvex.app
```
Then point your domain's DNS at GitHub Pages following [GitHub's custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site), and set the custom domain in **Settings → Pages** too.

## Before you launch

- **Store badges:** the "Get it on Google Play" / "Download on the App Store" buttons in `index.html` (search for `store-badge`) currently link to `#`. Point them at your real listings once the app is published.
- **Screenshots:** `assets/screenshot-*.png` and `.webp` are your actual app screens. Swap them out any time the UI changes — same filenames, same aspect ratio, no CSS changes needed.
- **Copy:** all wording lives directly in `index.html`, no CMS or build step to fight with.

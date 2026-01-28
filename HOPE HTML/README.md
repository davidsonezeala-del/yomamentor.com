# Yomamentor One-Page Site

This is a simple, professional one-page website for Yomamentor. Files:

- `index.html` — main page
- `styles.css` — styles
- `script.js` — small client-side scripts
- `images/company-logo.png` — place your company image here

Quick local test

1. In VS Code install Live Server extension and click "Go Live", or run a simple server:

```powershell
# from this folder
python -m http.server 8000
# then open http://localhost:8000
```

Forms

- The contact form posts to Formspree. Replace the `action` in `index.html` with your Formspree form ID (e.g. `https://formspree.io/f/abcd1234`).
- Alternatively change the form to use your backend or a mailto link.

Deploying quickly (two easy options)

1) Netlify (fastest)
- Create a free Netlify account.
- Drag and drop the site folder (containing `index.html`) into Netlify's Sites -> New site -> Deploy site, or connect a Git repo.
- After deploy, set a custom domain in Site settings -> Domain management. Netlify will give DNS records to add at your domain registrar.

DNS for custom domain (summary)

- For Netlify: create a CNAME record for `www` pointing to your-site.netlify.app and an ALIAS or A record for root as Netlify instructs (or use Netlify's DNS).
- For GitHub Pages: create a CNAME file containing your domain and add a CNAME record for `www` pointing to `your-github-username.github.io`. Add A records (if required) to point to GitHub Pages IPs.

GitHub Pages (if you prefer)

- Push this folder to a GitHub repo. In the repo settings -> Pages -> set Branch to `main` (root) and save. The site will be available at `https://your-username.github.io/your-repo/`.
- To use a custom domain, add a `CNAME` file with your domain and follow GitHub's DNS instructions.

Notes & to-dos

- Replace `images/company-logo.png` with your company image.
- Replace the Calendly URL in `script.js` with your scheduling link or set `book-btn` to a direct booking page.
- Replace Formspree action URL with your form endpoint.

If you want, I can: deploy this to Netlify for you and add the DNS instructions for your specific domain — provide the domain name and access to the registrar or DNS records.

## Contributing to Yomamentor site

Thanks for your interest in improving this site. This document explains how to contribute small fixes, updates, and improvements.

-- Quick workflow

- Fork or copy the project folder.
- Create a branch for your change: `feature/short-description` or `fix/short-description`.
- Make small, focused commits with clear messages.
- Push your branch and open a pull request with a description of the change.

-- Local preview

- Install nothing special: to preview locally run from the project root:
  ```powershell
  python -m http.server 8000
  # then open http://localhost:8000
  ```
- Or use the Live Server extension in VS Code and click "Go Live".

-- Code style

- HTML: keep semantic structure, use lowercase element names, close tags.
- CSS: keep rules in `styles.css`; use variables at the top when adding colors.
- JavaScript: add code to `script.js`; keep functions small and avoid global variables.
- Images: put image files under the `images/` folder and reference them with relative paths.

-- Form & external links

- The contact form posts to Formspree. If changing the form endpoint, update `index.html` form `action` attribute and confirm `script.js` fetch handler still works.
- The booking link uses Calendly. Update the Calendly URL in `index.html` (`book` button) and `script.js` (schedule handler) when necessary.

-- Commit messages

- Use present-tense, short subject lines, e.g. `Fix: update contact email` or `Feat: add new package card`.

-- Pull request checklist

- PR description explains the why and what.
- Changes are small and tested locally.
- No broken links or console errors in the browser.

-- Deploy notes

- For a fast deploy use Netlify: drag-and-drop the site folder or connect a Git repo. See `README.md` for details.

-- Contact

- For quick questions, email Sales@yomamentor.com.

Thank you for helping improve this site — contributions are welcome.

# Yomamentor AI Coding Instructions

## Project Overview

**Yomamentor** is a premium, single-page landing site for a UK-based career & communication coaching brand. The design focuses on trust-building, conversion optimization, and a high-end aesthetic using orange + white + gold + black color palette.

**Tech Stack**: Vanilla HTML, CSS (no frameworks), minimal vanilla JavaScript.

---

## Architecture & Key Components

### File Structure
```
/
├── index.html              # Main landing page (7 semantic sections + sticky nav)
├── styles.css              # Comprehensive responsive styling (~650 lines)
├── script.js               # Mobile nav, form handling, smooth scrolling
├── .github/copilot-instructions.md   # This file
└── /assets/images/         # Image assets (placeholder folder for hero visuals, icons)
```

### Page Sections (in order)
1. **Sticky Navigation** — Persistent top bar with logo, menu links, orange CTA button
2. **Hero** — Headline, subtext, dual CTAs, hero visual (laptop mockup + chat bubbles)
3. **Trust Badges Strip** — Dark background, 4 credibility badges with gold stars
4. **About** — Brand story and expertise
5. **Offerings (Services)** — 3-card grid with icons and hover effects
6. **Help** — Two-column: career coaching + NHS application coaching
7. **Testimonials** — 2 testimonial cards with gold star ratings
8. **Packages** — 3 pricing cards; middle one marked "Most Popular" with featured styling
9. **Contact** — Two-column form + direct email link
10. **Footer** — Copyright year (auto-updated), privacy/terms links

---

## Design System & Color Palette

**Always use these exact colors**:
- **White**: `#FFFFFF` (backgrounds, text)
- **Orange** (primary): `#FF7A18` (CTAs, accents, hovers)
- **Shaded Black**: `#111111` (headings), `#1A1A1A` (contact bg)
- **Gold** (luxury accent): `#C9A24D` (dividers, stars, micro-details)
- **Neutral Grey**: `#F5F5F5` (light sections), `#6B6B6B` (body text)

**Typography**:
- Headings: `Playfair Display` (serif, 600–700 weight)
- Body: `Montserrat` (sans-serif, 300–600 weight)

**Spacing & Layout**:
- Max container width: `1200px`
- Sections: `80px` vertical padding (desktop)
- Cards: `12px` border-radius, soft shadows (`0 8px 24px rgba(0,0,0,0.08)`)
- Hover transforms: `-6px` translateY for subtle lift

---

## Critical Patterns & Workflows

### 1. Sticky Navigation
- **File**: `index.html` (`<nav class="navbar">`)
- **CSS**: `.navbar` (sticky), `.nav-menu` (responsive)
- **JS**: Mobile toggle button targets `#mobile-toggle`, toggles `.active` class on `#nav-menu`
- **Pattern**: On mobile, menu is hidden; hamburger button shows/hides it. Menu closes on link click.

### 2. Button Styling
- **Primary**: `class="btn primary"` → orange bg, white text, soft shadow
- **Secondary**: `class="btn secondary"` → white bg, orange border/text
- **Hover**: 150–250ms transition, `-2px` translateY, enhanced shadow
- **Always use**: `text-decoration: none`, `cursor: pointer` on links

### 3. Card Components
- **Pattern**: Border `2px solid #F5F5F5`, border-radius `12px`, padding `2.5rem`
- **On hover**: Border changes to `#FF7A18`, shadow lifts, slight scale/translateY
- **Example files**: Offering cards, help cards, testimonial cards, package cards

### 4. Form Handling
- **File**: `script.js` contact form handler
- **Flow**: 
  1. Intercept submit with `e.preventDefault()`
  2. Fetch to Formspree endpoint (`https://formspree.io/f/mreqzqwa`)
  3. On success: Show "✓ Message sent!" (3 sec), auto-reset button
  4. On error: Alert user to email directly
- **Form structure**: Two-column layout on desktop; stacks mobile. Inputs have orange focus state.

### 5. Hero Section Visual
- **Components**: Laptop mockup (dark frame) + CV text inside + chat bubbles + glow background
- **Animations**: Chat bubbles float up/down infinitely (`@keyframes float`)
- **Glow effect**: Radial gradient, low opacity orange, centered behind laptop
- **Mobile**: Stacks below text; reduced height

### 6. Section Dividers
- **Pattern**: `.section-header` > `<h2>` + `.gold-divider` (60px wide, 3px tall, `#C9A24D`)
- **Usage**: Present in About, Offerings, Help, Testimonials, Packages sections

### 7. Trust Badges Strip
- **Background**: `#111111` (dark contrast)
- **Layout**: Grid of 4 badges (auto-fit, minmax 200px)
- **Icon**: Gold star `★`, badge text white
- **Mobile**: 2-column grid

---

## Development Workflow

### Local Testing
```powershell
# Use Python built-in server (no build step needed)
python -m http.server 8000
# Open http://localhost:8000
```

### Making Changes
1. **HTML updates**: Edit `/index.html` section content only—do NOT change structure/IDs
2. **CSS updates**: All styles in `/styles.css`; grouped by component (navbar, hero, buttons, etc.)
3. **JS updates**: Minimal—only add interactive features in `/script.js`; keep vanilla JS

### Responsive Breakpoints
- **Desktop**: 1200px container, full nav menu
- **Tablet** (768px): Grid columns reduce, hero stacks, mobile toggle visible
- **Mobile** (480px): Single-column layout, buttons full-width, font sizes reduce

---

## Important Conversion & UX Patterns

1. **CTA Buttons**: Orange primary buttons appear in hero, nav, and form. Hover effect must be smooth (250ms).
2. **Form Feedback**: User sees visual confirmation (button text changes) on submit success.
3. **Mobile Menu**: Auto-closes when user clicks a link; toggle button doesn't interfere with desktop nav.
4. **Trust Signals**: Gold stars, "Most Popular" badge on middle pricing card, and credibility badges build confidence.
5. **Smooth Scrolling**: All `#anchor` links use smooth scroll (CSS `scroll-behavior: smooth`, enhanced by JS fallback).

---

## Common Tasks & Examples

### Add a New Section
1. Add semantic `<section id="new-section">` in `index.html`
2. Style with `.section-header` + `.gold-divider`
3. Use `.container` wrapper for max-width consistency
4. Add CSS grid/flex for layout (follow existing card patterns)

### Update Copy
1. Edit text in `index.html` sections; preserve all `id`, `class`, `href` attributes
2. Don't change anchor links or button structure

### Customize Colors
Search `/styles.css` for hex values and replace:
- `#FF7A18` → new orange
- `#C9A24D` → new gold
- etc.

### Add Form Fields
1. Add `<input>` or `<textarea>` with `class="form-group"` wrapper
2. Include `<label for="fieldname">` 
3. JS form handler automatically includes all named fields in Formspree submission

---

## Deployment & External Dependencies

- **Contact Form**: Formspree (`https://formspree.io/f/mreqzqwa`) — user will replace with their own form ID
- **Scheduling**: Calendly link in `script.js` (line with `const calendlyUrl = ...`) — user updates URL
- **Fonts**: Google Fonts (Playfair Display + Montserrat) via CDN in `<head>`
- **Hosting**: Ready for Netlify drag-drop or GitHub Pages

---

## Notes for AI Agents

- **No framework dependencies**: All CSS is vanilla; no Tailwind, Bootstrap, etc.
- **Mobile-first mindful**: Check media queries at 768px and 480px after changes
- **Accessibility**: Use semantic HTML, ARIA labels on buttons, sufficient color contrast (all meet WCAG)
- **Performance**: Minimal JS, no external libs (except Google Fonts); fast page load
- **Conversion-focused**: Every element (color, spacing, shadow, hover) supports trust and CTAs

---

## Quick Reference: Key Classes

| Class | Purpose | Example |
|-------|---------|---------|
| `.btn.primary` | Orange CTA button | Book call, Send message |
| `.btn.secondary` | Outline button | See packages |
| `.offering-card` | Service card with hover lift | 3 cards in Offerings section |
| `.testimonial-card` | Review card with stars | Client testimonials |
| `.package-card` | Pricing card (featured middle) | 3 packages |
| `.section-header` | Centered heading + gold divider | All main sections |
| `.hero-visual` | Laptop mockup + bubbles + glow | Hero right side |
| `.nav-menu.active` | Mobile menu toggle state | Mobile navigation |


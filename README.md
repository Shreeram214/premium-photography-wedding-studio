# LUMIÈRE STORIES — Photography & Wedding Studio Website (Demo)

*Every Frame Tells a Story.*

A premium, editorial website concept for a fictional wedding and portrait photography studio in Sangli, Maharashtra. It is built with plain HTML, CSS and JavaScript. There is no framework, no build step and no backend.

**Live demo:** <https://lumiere-stories.pages.dev>

> **Demo note:** LUMIÈRE STORIES is a fictional studio. All studio details, contact details, team profiles, testimonials, portfolio stories, couples and locations are sample content. The phone number, email, address, business hours, map and Instagram link are placeholders. The photographs are representative stock images from Unsplash, not the studio's own work.

## Run it locally

Open `index.html` in a browser. Everything works from the file system.

A local server is closer to how the site behaves when hosted:

```powershell
cd "F:\Projects\Demo Projects\lumiere-stories"
python -m http.server 8840
```

Then open <http://localhost:8840>.

## What's included

- Transparent-to-solid sticky header, a full-screen mobile menu and smooth scrolling
- Cinematic full-screen hero with a scroll indicator
- Portfolio: 12 sample stories in a masonry grid with category filters, plus a story viewer with previous/next controls
- Featured wedding story with an editorial collage and a slideshow
- Services, photography styles, why choose us and a process timeline (horizontal on desktop, vertical on mobile)
- Gallery: 30 photos across 10 categories, with filters, lazy loading and a lightbox (arrow keys, Esc and swipe)
- Wedding films: each card opens a preview modal that is clearly labelled as a demo placeholder, because no video files are included
- About, sample team profiles, a testimonial carousel (buttons, dots, swipe and autoplay) and packages with **Enquire for Pricing** (no fixed prices)
- Enquiry form that validates:
  - name and location
  - a 10-digit Indian mobile number (starting 6–9; `+91` and `0` prefixes accepted)
  - email address
  - event type
  - event date (today or later, within 3 years)

  On success it shows a confirmation and offers a WhatsApp hand-off with the details already filled in. **Nothing is sent or stored.**
- Instagram-style grid, FAQ accordion, contact details with a WhatsApp button and a map placeholder, a final call to action, the footer and a back-to-top button
- SEO: page title, meta description, Open Graph tags, semantic HTML, alt text on every image and `ProfessionalService` JSON-LD marked as demo placeholders
- Accessibility: skip link, keyboard-friendly modals with a focus trap, labelled controls and support for reduced motion

## Rebrand for a real studio

| Where | What to change |
|---|---|
| `js/script.js` → `SITE_CONFIG` | WhatsApp number, phone link, Instagram, Facebook, YouTube and the default WhatsApp message |
| `js/script.js` → `PORTFOLIO`, `GALLERY`, `FILMS`, `FEATURED_STORY` | Stories, photos, categories and descriptions |
| `index.html` | Contact placeholders, team, testimonials, map embed and the JSON-LD block |
| `css/style.css` → `:root` | Colours, fonts and spacing |

Replace the demo badges and notes only after real details, real work and genuine client reviews (with permission) are in place.

## Images

Photos live in `assets/images/` as `<unsplash-id>-800.webp` (grids and cards) and `<unsplash-id>-1600.webp` (hero and lightbox). They come from [Unsplash](https://unsplash.com/) and are used under the Unsplash License. Replace them with the studio's own photography before going live.

## Structure

```
lumiere-stories/
├── index.html
├── css/style.css
├── js/script.js
└── assets/images/
```

© 2026 LUMIÈRE STORIES. All Rights Reserved. (Fictional brand for demonstration.)

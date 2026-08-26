# Cornell DEBUT Website

Official website for **Cornell DEBUT** — Cornell University's Biomedical Engineering Project Team.

Live site: [cornelldebut.org](https://cornelldebut.org)

---

## Repository Structure

```
debut-website/
├── index.html                  # Home page          →  /
├── about/index.html            # About page         →  /about
├── members/index.html          # Members page       →  /members
├── past-projects/index.html    # Past projects      →  /past-projects
├── apply/index.html            # Apply page         →  /apply
├── sponsors/index.html         # Sponsors page      →  /sponsors
├── styles.css                  # All styles, organized by section
├── main.js                     # Member filter, FAQ accordion
├── static/
│   ├── DEBUT_HEADSHOTS/        # Member headshots (JPG/PNG)
│   ├── DEBUT_DEVICES/          # Past project device photos
│   ├── DEBUT_B_ROLL/           # Team / lab photos
│   ├── DEBUT_WINNER/           # Competition win photos
│   └── DEBUT_LOGOS/            # Logos
└── README.md
```

**Each page is its own HTML file.** A visitor only downloads the page they
asked for, so opening the home page no longer pulls down all 43 headshots.
The URL changes as you navigate, so pages can be linked to, bookmarked, and
found by search engines.

### Editing rules to know

1. **All paths start with `/`** — `/styles.css`, `/static/DEBUT_HEADSHOTS/x.jpg`,
   `/about/`. Never write `static/...` or `../static/...`; the leading slash is
   what makes the same markup work from every folder.
2. **The `<nav>` and `<footer>` blocks are identical in all six files.** If you
   change one, copy it into the other five. Both are marked with a comment
   banner so they are easy to find.
3. **Each page sets `<body data-page="...">`** — that is what highlights the
   correct nav tab. Don't remove it.
4. **New images should carry `loading="lazy"`** so they only download once the
   visitor scrolls near them.

### Previewing the site locally

Because paths start with `/`, double-clicking an HTML file will not work. Run a
local server from the project folder instead:

```bash
python -m http.server 8137
```

Then open <http://localhost:8137>.

---

## Pages

| Page | Description |
|------|-------------|
| Home | Hero, stats bar, mission statement, subteam overview, alumni ticker |
| About | DEBUT competition info, analyst roles, team composition, project timeline |
| Members | Headshot grid filterable by subteam |
| Apply | Application links, open/closed status badge, FAQ accordion |
| Sponsors | Benefits, sponsorship tiers, sponsor form link |

---

## How to Make Common Updates

### Update member photos or names

1. Add the new headshot to `static/DEBUT_HEADSHOTS/` — keep filenames clean (e.g. `Firstname_Lastname.jpg`)
2. Open `members/index.html` and find the `teams` array in the `<script>` block
3. Find the correct subteam object (e.g. `id: "1a"`) and add an entry to its `members` list:

```js
{ name: "First Last", img: "/static/DEBUT_HEADSHOTS/First_Last.JPG" }
```

4. To mark someone as a subteam lead, add `lead: true` to their entry
5. For a member with no photo, use `img: null` — their initial is shown instead

The cards are generated from this array, so you never edit HTML for a roster change.

### Toggle application status open/closed

In `apply/index.html`, change the badge class:

```html
<!-- Applications CLOSED -->
<div class="apply-closed-badge">Applications currently closed</div>

<!-- Applications OPEN — swap to this: -->
<div class="apply-open-badge">Applications open</div>
```

Then update the application links — replace the `<span class="apply-pos-link">` placeholders with real `<a>` tags:

```html
<a href="https://your-form-link.com" target="_blank" class="apply-pos-link">Apply Now →</a>
```

### Add a whole new page

1. Copy an existing page folder (e.g. `about/`) to a new folder, e.g. `outreach/`
2. Change `<title>`, the `description` meta tag, the `canonical` link, and
   `<body data-page="outreach">`
3. Add the nav link to **all six** existing pages plus the new one:
   ```html
   <a class="nav-link" data-nav="outreach" href="/outreach/">Outreach</a>
   ```
4. In `styles.css`, add `outreach` to the two current-page highlight selector
   lists (search for `data-page`)

### Add a new subteam

1. In `members/index.html`, add a new filter button in the `.filter-row`:
   ```html
   <button class="filter-btn" onclick="filterTeam('newteam', this)">New Team</button>
   ```
2. Add a matching object to the `teams` array in the same file:
   ```js
   { id: "newteam", label: "Subteam", title: "New Team", members: [ ... ] }
   ```

### Update alumni placements ticker

In `index.html` (the home page), find the `<!-- Alumni Placement Ticker -->` comment. Edit the `.ticker-item` blocks in **both** the first set and the duplicate set (the duplicate is required to keep the scroll loop seamless).

### Add a sponsor logo

1. Save the logo image to `static/` (e.g. `static/DEBUT_SPONSORS/`)
2. In `sponsors/index.html`, add an `<img>` tag in the appropriate tier section:
   ```html
   <img src="/static/DEBUT_SPONSORS/logo.png" alt="Sponsor name" loading="lazy">
   ```

### Update sponsorship packet link

Add the new PDF to `static/`, then in `sponsors/index.html` update the packet
link's `href` to point at it (e.g. `/static/Sponsor_Packet_26.pdf`).

---

## Deployment

### GitHub Pages (recommended)

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set Source to `main` branch, root folder
4. Your site will be live at `https://yourusername.github.io/debut-website`
5. To use your custom domain (`cornelldebut.org`), add it in Pages settings and update your DNS

### Netlify (alternative)

1. Drag the entire `debut-website/` folder onto [netlify.com/drop](https://app.netlify.com/drop)
2. Add your custom domain in Site Settings → Domain Management
3. Update DNS nameservers at your domain registrar to point to Netlify

---

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--red` | `#b91c1c` | Brand accent, leads, active nav tab |
| `--bg` | `#ffffff` | Page background |
| `--bg2` | `#f8f8f8` | Card / inset backgrounds |
| `--bg3` | `#f2f2f2` | Featured card backgrounds |
| `--text` | `#0c0c0c` | Primary text |
| `--text-mid` | `rgba(12,12,12,0.70)` | Secondary text |
| `--text-dim` | `rgba(12,12,12,0.45)` | Body / muted text |
| `--border` | `rgba(0,0,0,0.08)` | Hairline rules, card edges |
| `--serif` | EB Garamond | Display headings |
| `--sans` | DM Sans | Body, nav, labels |

All CSS variables are defined at the top of `styles.css` in the `:root` block.

---

## Contact

**debut@cornell.edu** — for questions about the team or website

This is a registered student organization of Cornell University.

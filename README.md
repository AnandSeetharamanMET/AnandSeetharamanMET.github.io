# Anand Seetharaman — Portfolio

A fast, single-page static portfolio. Plain HTML, CSS, and a little vanilla JavaScript:
no build step, no frameworks, no trackers, no external requests (system fonts only).

## Files

| File | What it is |
|---|---|
| `index.html` | Page content and structure (About, Experience, Skills, Contact text lives here). |
| `config.js` | **Edit me first.** LinkedIn URL, email, and resume path. Set `LINKEDIN_URL: ''` to hide all LinkedIn buttons. |
| `projects.js` | **All projects live here** as one array. The page renders cards and detail pop-ups from it. |
| `styles.css` | All styling (light theme, navy accent, automatic dark mode). |
| `main.js` | Renders projects; runs the modal, image lightbox, and mobile menu. |
| `assets/Anand_Seetharaman_Resume.pdf` | The "Download Resume" file. Replace it with a newer PDF using the same name. |
| `assets/img/` | Project images (WebP) and `og-image.jpg` (link-preview image). |
| `favicon.svg` | "AS" monogram browser icon. |
| `.nojekyll` | Tells GitHub Pages to serve files as-is. |
| `screenshots/` | Preview screenshots only. Ignored by git (`.gitignore`), not part of the live site. |

## Preview locally

```bash
cd portfolio
python3 -m http.server 8000
# open http://localhost:8000
```

## Add a project

1. Put images in `assets/img/`. WebP or JPG, about 1200–1600 px wide max, ideally under 300 KB each.
2. Open `projects.js`, copy the commented **TEMPLATE** at the bottom, paste it into the
   `window.PROJECTS = [ ... ]` array, and fill it in. Array order is display order, and the
   **first** project gets the large "featured" card.
3. Set `status` to `'Completed'`, `'In progress'` (amber badge, good for things you're building
   right now), or `'Planned'`.
4. Give every image a real `alt` description. Fields you leave empty are simply hidden.
5. Refresh the page. Direct links work too: `.../#project-<slug>` opens that project.

Tip: to make WebP images, use `cwebp -q 82 in.png -o out.webp`, or export from any image editor.

## Deploy to GitHub Pages (free)

GitHub username: **AnandSeetharamanMET**. Live URL: **https://anandseetharamanmet.github.io/**

This folder is already a git repository on branch `main` with an initial commit
(`screenshots/` is excluded via `.gitignore`). No remote is configured yet.

1. Sign in to GitHub as **AnandSeetharamanMET**.
2. Create a new **public** repository named exactly **`AnandSeetharamanMET.github.io`**.
   Leave it empty: no README, license, or .gitignore.
3. Push this folder from the command line:
   ```bash
   cd portfolio
   git remote add origin https://github.com/AnandSeetharamanMET/AnandSeetharamanMET.github.io.git
   git push -u origin main
   ```
   (Or upload the *contents* of this folder with *Add file → Upload files*. `index.html` must sit at the repo root.)
4. In the repo go to **Settings → Pages**. Under *Build and deployment* choose
   **Deploy from a branch**, branch **`main`**, folder **`/ (root)`**, and click *Save*.
5. After a minute or two the site is live at https://anandseetharamanmet.github.io/

The `og:url`, `og:image`, and canonical tags in `index.html` already point at that URL, so
LinkedIn and other link previews will show the preview image once the site is live.
If you ever use a different username or a custom domain, update those three tags.

To update later, edit the files, then run `git add -A && git commit -m "Update" && git push`.
Pages redeploys automatically.

## Privacy notes

- The page shows email and "Tacoma, WA area" only. No phone number or street-level location.
- **The resume PDF does include a phone number.** Swap in a version without it if you'd rather not publish it.
- SpaceX work is described at a general, non-technical level, with no logos or imagery.
- The senior design project is credited as a team project, and the KSU logo is intentionally not used.

## Image credits

- `assets/img/bg/earth-night-orbit-1920.webp` / `-960.webp`: "Earth Observation" (approaching San Francisco at night), NASA ID `iss040e090835`, taken by the Expedition 40 crew aboard the International Space Station, Aug 10, 2014. Courtesy NASA Johnson Space Center via the NASA Image and Video Library (https://images.nasa.gov/details/iss040e090835). NASA imagery is generally not copyrighted; NASA does not endorse this site. Resized and converted to WebP.

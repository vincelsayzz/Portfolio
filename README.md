# Vince Keth Maarat — Portfolio

Live Vercel - https://portfolio-nine-neon-itjz4dio93.vercel.app/

Live GitHub Pages -


A two-part project:

- **`backend/`** — a small FastAPI app that serves your portfolio content as JSON from one Python file.
- **`frontend/`** — a React (Vite) site with a dark, neon-blue "terminal" theme that fetches that JSON and renders it.

Everything you'll ever want to edit — your name, bio, education, projects, certifications, and social links — lives in **one file**: `backend/data.py`. The frontend never needs to change; it just maps over whatever that file returns.

---

## 1. Run the backend

```bash
cd backend
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

Visit **http://localhost:8000/api/portfolio** — you should see your portfolio data as JSON.

## 2. Run the frontend

In a second terminal:

```bash
cd frontend
npm install
npm run dev
```

Visit **http://localhost:5173** — the site should load and pull its content live from the backend.

> If the page shows a "connection refused" screen, it just means the backend isn't running yet — start it with the command above and refresh.

---

## Editing your content

Open **`backend/data.py`**. It's plain Python dictionaries and lists:

| Section | Variable | What it controls |
|---|---|---|
| Hero | `HERO` | Your name, role, and intro paragraph |
| Education | `EDUCATION` | One entry per school/program — add more entries and they appear automatically |
| Projects | `PROJECTS` | One entry per project — add, remove, or reorder freely |
| Certifications | `CERTIFICATIONS` | Same pattern as projects |
| Footer | `SOCIAL_LINKS` | Your LinkedIn, Facebook, Gmail, and GitHub URLs |

To **add a new project**, copy an existing dict inside `PROJECTS`, edit the fields, and give it a unique `id`. Save the file — if `uvicorn` is running with `--reload`, the API updates instantly, and the site picks it up on refresh.

### Adding real images

The generated project comes with placeholder `.svg` graphics in `frontend/public/images/` so the layout has something to show immediately. To use your own screenshots or certificate scans:

1. Drop the image file into `frontend/public/images/` (`.png`, `.jpg`, and `.svg` all work).
2. Update the matching `image_url` in `backend/data.py` to point at it, e.g. `"image_url": "/images/chainlease-screenshot.png"`.

That's the whole workflow — no component code to touch.

---

## Project structure

```
portfolio-project/
├── backend/
│   ├── data.py          ← edit this to update site content
│   ├── main.py          ← FastAPI app + the /api/portfolio endpoint
│   └── requirements.txt
└── frontend/
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── .env.example      ← copy to .env if your backend isn't on localhost:8000
    ├── public/
    │   └── images/       ← project & certificate images live here
    └── src/
        ├── main.jsx
        ├── App.jsx        ← fetches /api/portfolio, renders every section
        ├── index.css      ← the entire dark/neon-blue theme
        └── components/
            ├── Navbar.jsx
            ├── Hero.jsx
            ├── Education.jsx
            ├── Projects.jsx          ← maps over PROJECTS
            ├── Certifications.jsx    ← maps over CERTIFICATIONS
            ├── Footer.jsx
            ├── FadeInSection.jsx     ← scroll-triggered fade-in wrapper
            └── icons.jsx             ← inline SVG social/link icons
```

## Design notes

- **Theme**: near-black slate background, electric-blue (`#4fd8ff`) accents, a geometric display face (Space Grotesk) for headings, and IBM Plex Mono used deliberately for section labels — styled as real terminal commands (`~$ cat education.log`, `~$ ls ./projects`) since the whole site is framed around an IT/networking persona.
- **Motion**: sections fade/slide in on scroll via `IntersectionObserver` (see `FadeInSection.jsx`), buttons and cards glow on hover, and `prefers-reduced-motion` is respected throughout.
- **No CSS framework** — this uses plain CSS with custom properties (`src/index.css`) so there's nothing extra to install or configure. Swap in Tailwind later if you prefer; the class names are already organized BEM-style, which ports over easily.

## Deploying later (optional)

- **Backend**: any host that runs Python works (Render, Railway, Fly.io, a VPS). Update `allow_origins` in `main.py` to your real frontend domain instead of `"*"`.
- **Frontend**: `npm run build` produces a static `dist/` folder deployable to Vercel, Netlify, GitHub Pages, etc. Set `VITE_API_URL` (see `.env.example`) to your deployed backend's URL before building.

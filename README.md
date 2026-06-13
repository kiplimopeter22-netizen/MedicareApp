
MedicareApp


A simple starter app demonstrating a small React + Tailwind frontend alongside a minimal FastAPI backend. It was created to serve as a foundation for a healthcare-style landing page and light API proof-of-concept.

Quick goals
-----------
- Responsive homepage (React + Vite + Tailwind)
- Lightweight API (FastAPI) with a couple of endpoints and tests
- Basic unit tests for the frontend (Vitest) and backend (pytest)

Getting started
---------------
Prerequisites:
- Node.js 18+ and npm
- Python 3.10+ (for the backend)

Frontend (run locally):

```bash
cd frontend
npm install
npm run dev
```

Open the URL printed by Vite (usually http://localhost:5173 or 5174).

Backend (run locally):

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

API docs will be available at http://localhost:8000/docs while the server is running.

Testing
-------
Frontend tests (Vitest):

```bash
cd frontend
npm run test
```

Backend tests (pytest):

```bash
cd backend
source .venv/bin/activate
pytest
```

Notes
-----
- This repo is purposely minimal — use it as a launch point for additional features, routing, or integrations.
- If an externally hosted image does not display in the hero, consider adding the image to `frontend/public` and updating `src/App.jsx` to reference it locally.

If you want, I can also add CI, improve tests, or wire a simple form handler for appointment requests.

Purpose
-------
This repository is intended as a small, practical example you can use to prototype a healthcare landing page and a matching API. The frontend is focused on presentation and responsiveness; the backend is a tiny FastAPI service intended for experimentation and testing.

Features
--------
- Responsive React frontend built with Vite and Tailwind CSS
- Minimal FastAPI backend with a couple of example routes and tests
- Frontend unit tests using Vitest
- Basic project layout suitable for quick iteration

Tech stack
----------
- Frontend: React, Vite, Tailwind CSS, Lucide icons
- Testing: Vitest (frontend), pytest (backend)
- Backend: FastAPI, Uvicorn

Repository layout
-----------------
- backend/: FastAPI service, requirements and tests
	- app/main.py — example API routes
	- tests/test_main.py — backend tests
- frontend/: React app scaffolded with Vite
	- src/ — React source files
	- index.html — app entry
	- package.json — npm scripts and deps
- README.md — this file

Setup and development
---------------------
Follow these steps to run the project locally.

Prerequisites
- Node.js 18+ and npm
- Python 3.10+ and pip

Frontend

1. Install dependencies:

```bash
cd frontend
npm install
```

2. Run the dev server:

```bash
npm run dev
```

The Vite server prints a local URL (usually http://localhost:5173 or 5174).

Backend

1. Create and activate a virtual environment:

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
```

2. Install Python requirements:

```bash
pip install -r requirements.txt
```

3. Run the server:

```bash
uvicorn app.main:app --reload --port 8000
```

Open the interactive API docs at http://localhost:8000/docs

Testing
-------
Frontend tests (Vitest):

```bash
cd frontend
npm run test
```

Backend tests (pytest):

```bash
cd backend
source .venv/bin/activate
pytest
```

Notes & next steps
------------------
- If an externally hosted image fails to display in the hero, add the image to `frontend/public/` and point `src/App.jsx` to it.
- I can help add CI, deployment configuration, or a small API endpoint to accept appointment requests.

Contributing
------------
If you want to contribute, open an issue or send a PR with a brief description of the change. Keep changes small and focused so they are easy to review.

License
-------
This project is provided without a license file. Add a license if you plan to share or distribute the code.

Contact
-------
If you need help or want improvements, reply here and I can make targeted changes.


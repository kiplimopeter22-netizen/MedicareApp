# Backend (FastAPI)

Run locally:

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --app-dir app
```

API docs available at `http://localhost:8000/docs` when running.

Tests & coverage:

```bash
pip install -r requirements.txt
pytest --maxfail=1 -q
```

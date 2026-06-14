MedicareApp backend

Run locally:

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```

Run tests:

```bash
pip install -r requirements.txt
pytest -q
```

Docker:

```bash
docker build -t medicare-backend .
docker run -p 8000:8000 medicare-backend
```

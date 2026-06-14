# Medicare Backend

FastAPI backend for the Medicare login page.

## Features

- `POST /login` endpoint
- request validation using Pydantic
- Dockerized API server

## Setup

Install dependencies:
```bash
pip install -r requirements.txt
```

Start locally:
```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

## Docker

Build image:
```bash
docker build -t medicare-backend:latest .
```

Run locally:
```bash
docker run -p 8000:8000 medicare-backend:latest
```

## API

POST `/login`

Request body:
```json
{
  "email": "user@example.com",
  "password": "SecurePass123"
}
```

Response:
```json
{
  "message": "Login successful",
  "token": "fake-jwt-token"
}
```

- FastAPI login endpoint added
- Unit tests for login endpoint
- Dockerfile included for backend
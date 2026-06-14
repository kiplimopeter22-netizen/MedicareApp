# Medicare App - Deployment Guide

## Project Objectives Overview

This guide covers deploying Medicare App according to the following requirements:
- Separate frontend and backend repositories
- Docker containerization for both services
- Docker Hub image deployment
- Git collaboration workflows
- Proper test coverage (Frontend: 30%, Backend: 10%)
- Comprehensive documentation and releases

---

## Phase 1: Repository Separation

### Step 1.1: Create Separate Repositories on GitHub

1. **Frontend Repository:**
   - Name: `MedicareApp-Frontend`
   - Owner: `kiplimopeter22-netizen`
   - URL: `https://github.com/kiplimopeter22-netizen/MedicareApp-Frontend`

2. **Backend Repository:**
   - Name: `MedicareApp-Backend`
   - Owner: `kiplimopeter22-netizen`
   - URL: `https://github.com/kiplimopeter22-netizen/MedicareApp-Backend`

### Step 1.2: Split Current Repository

```bash
# Clone the current repo (fresh copy)
git clone https://github.com/kiplimopeter22-netizen/MedicareApp.git MedicareApp-temp
cd MedicareApp-temp

# Extract frontend history only
git subtree split -P frontend -b frontend-only
git checkout frontend-only
git filter-branch --subdirectory-filter . HEAD

# Push to new frontend repo
cd ..
git clone --bare MedicareApp-temp/frontend-only frontend-only.git
cd frontend-only.git
git push --mirror https://github.com/kiplimopeter22-netizen/MedicareApp-Frontend.git

# Repeat for backend similarly
```

---

## Phase 2: Dockerization

### Step 2.1: Frontend Dockerfile

Create `frontend/Dockerfile`:

```dockerfile
# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Install serve to run the production build
RUN npm install -g serve

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
```

### Step 2.2: Backend Dockerfile

Create `backend/Dockerfile`:

```dockerfile
FROM python:3.10-slim

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc && \
    rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

### Step 2.3: Docker Compose (for local testing)

Create `docker-compose.yml` in project root:

```yaml
version: '3.8'

services:
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - REACT_APP_API_URL=http://localhost:8000
    depends_on:
      - backend

  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=sqlite:///./test.db
```

---

## Phase 3: Docker Hub Setup & CI/CD

### Step 3.1: Create Docker Hub Account & Repositories

1. Sign up at https://hub.docker.com
2. Create two repositories:
   - `kiplimopeter22/medicareapp-frontend`
   - `kiplimopeter22/medicareapp-backend`

### Step 3.2: GitHub Actions - Frontend

Create `.github/workflows/frontend-docker-deploy.yml`:

```yaml
name: Frontend Docker Build and Push

on:
  push:
    branches:
      - main
    paths:
      - 'frontend/**'
  release:
    types: [published]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v2

      - name: Login to Docker Hub
        uses: docker/login-action@v2
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}

      - name: Build and push frontend
        uses: docker/build-push-action@v4
        with:
          context: ./frontend
          push: true
          tags: |
            ${{ secrets.DOCKER_USERNAME }}/medicareapp-frontend:latest
            ${{ secrets.DOCKER_USERNAME }}/medicareapp-frontend:${{ github.sha }}

  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        working-directory: ./frontend
        run: npm ci

      - name: Run tests with coverage
        working-directory: ./frontend
        run: npm run test:coverage

      - name: Upload coverage to Codecov
        uses: codecov/codecov-action@v3
        with:
          files: ./frontend/coverage/coverage-final.json
          flags: frontend
          name: frontend-coverage
```

### Step 3.3: GitHub Actions - Backend

Create `.github/workflows/backend-docker-deploy.yml`:

```yaml
name: Backend Docker Build and Push

on:
  push:
    branches:
      - main
    paths:
      - 'backend/**'
  release:
    types: [published]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v2

      - name: Login to Docker Hub
        uses: docker/login-action@v2
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}

      - name: Build and push backend
        uses: docker/build-push-action@v4
        with:
          context: ./backend
          push: true
          tags: |
            ${{ secrets.DOCKER_USERNAME }}/medicareapp-backend:latest
            ${{ secrets.DOCKER_USERNAME }}/medicareapp-backend:${{ github.sha }}

  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.10'

      - name: Install dependencies
        working-directory: ./backend
        run: |
          python -m pip install --upgrade pip
          pip install -r requirements.txt

      - name: Run tests with coverage
        working-directory: ./backend
        run: |
          pip install pytest-cov
          pytest --cov=app --cov-report=term-missing tests/
```

---

## Phase 4: GitHub Secrets Setup

1. Go to repository Settings → Secrets and variables → Actions
2. Add these secrets:
   - `DOCKER_USERNAME`: Your Docker Hub username
   - `DOCKER_PASSWORD`: Your Docker Hub personal access token

Generate token at: https://hub.docker.com/settings/security

---

## Phase 5: Test Coverage Requirements

### Frontend (30% Target)

Update `frontend/vitest.config.js`:

```javascript
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'dist/',
        'src/main.jsx'
      ],
      lines: 30,
      functions: 30,
      branches: 30,
      statements: 30
    }
  }
});
```

Run tests:
```bash
cd frontend
npm run test:coverage
```

### Backend (10% Target)

Update `backend/requirements.txt` to include:
```
pytest
pytest-cov
```

Run tests:
```bash
cd backend
pytest --cov=app --cov-report=term-missing --cov-fail-under=10
```

---

## Phase 6: Release Management

### Step 6.1: Semantic Versioning

Use semantic versioning: `MAJOR.MINOR.PATCH` (e.g., `1.0.0`)

### Step 6.2: Frontend Release Workflow

Create `.github/workflows/frontend-release.yml`:

```yaml
name: Frontend Release

on:
  workflow_dispatch:
    inputs:
      version:
        description: 'Release version (e.g., 1.0.0)'
        required: true

jobs:
  release:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Create Release Tag
        run: |
          git config user.name "GitHub Actions"
          git config user.email "actions@github.com"
          git tag -a v${{ github.event.inputs.version }} -m "Frontend Release v${{ github.event.inputs.version }}"
          git push origin v${{ github.event.inputs.version }}

      - name: Create GitHub Release
        uses: actions/create-release@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          tag_name: v${{ github.event.inputs.version }}
          release_name: Frontend v${{ github.event.inputs.version }}
          body: |
            ## Frontend Release v${{ github.event.inputs.version }}
            
            Docker Image: `${{ secrets.DOCKER_USERNAME }}/medicareapp-frontend:v${{ github.event.inputs.version }}`
          draft: false
          prerelease: false
```

### Step 6.3: Backend Release Workflow

Create `.github/workflows/backend-release.yml` (similar structure)

---

## Phase 7: Documentation

### Frontend README Template

```markdown
# Medicare App - Frontend

React + Tailwind CSS responsive healthcare dashboard.

## Features
- User authentication (login/signup)
- Department browsing with cards
- Appointment booking
- Responsive mobile/tablet/desktop
- 30% test coverage

## Tech Stack
- React 18
- Vite
- Tailwind CSS
- Vitest

## Setup

### Local Development
\`\`\`bash
npm install
npm run dev
\`\`\`

### Docker
\`\`\`bash
docker build -t medicareapp-frontend .
docker run -p 3000:3000 medicareapp-frontend
\`\`\`

### Testing
\`\`\`bash
npm run test:coverage
\`\`\`

## Deployment
Automatically deployed to Docker Hub on push to main.

Image: `kiplimopeter22/medicareapp-frontend:latest`
```

### Backend README Template

```markdown
# Medicare App - Backend

FastAPI backend for healthcare appointment system.

## Features
- RESTful API endpoints
- Interactive API docs at /docs
- Department management
- Appointment handling
- 10% test coverage

## Tech Stack
- FastAPI
- Uvicorn
- SQLite
- Pytest

## Setup

### Local Development
\`\`\`bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
\`\`\`

### Docker
\`\`\`bash
docker build -t medicareapp-backend .
docker run -p 8000:8000 medicareapp-backend
\`\`\`

### Testing
\`\`\`bash
pytest --cov=app --cov-report=term-missing
\`\`\`

## API Documentation
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## Deployment
Automatically deployed to Docker Hub on push to main.

Image: `kiplimopeter22/medicareapp-backend:latest`
```

---

## Phase 8: Deployment Process

### Local Testing with Docker Compose

```bash
cd /workspaces/MedicareApp
docker-compose build
docker-compose up
```

### Production Deployment

1. **Using Docker Compose:**
   ```bash
   docker pull kiplimopeter22/medicareapp-frontend:latest
   docker pull kiplimopeter22/medicareapp-backend:latest
   docker-compose up -d
   ```

2. **Using Kubernetes:**
   Create `k8s/` folder with deployment manifests

3. **Using Render or Railway:**
   - Connect GitHub repo
   - Link Docker Hub image
   - Set environment variables
   - Deploy

---

## Commit Message Format (Feature-Based)

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `test`: Test coverage
- `refactor`: Code refactoring
- `chore`: Dependencies, config

### Example:
```
feat(frontend): add complementary color theme to departments

- Implement teal and blue gradient for department cards
- Add color scheme documentation
- Update Tailwind config with custom colors

Closes #42
```

---

## Checklist for Full Deployment

- [ ] Separate frontend and backend repositories created
- [ ] Dockerfiles added to both services
- [ ] Docker Hub repositories created
- [ ] Docker Hub credentials added to GitHub Secrets
- [ ] GitHub Actions workflows set up and running
- [ ] Frontend test coverage ≥ 30%
- [ ] Backend test coverage ≥ 10%
- [ ] README files properly documented
- [ ] Release workflows configured
- [ ] First release tagged (v1.0.0)
- [ ] Docker images pushed to Docker Hub
- [ ] Docker Compose verified working
- [ ] Production deployment tested

---

## Next Steps

1. Start with Phase 1 - separate the repositories
2. Add Dockerfiles (Phase 2)
3. Set up GitHub Actions (Phase 3)
4. Improve test coverage (Phase 5)
5. Create first release (Phase 6)
6. Deploy to production

For questions or issues, refer to individual workflow documentation.

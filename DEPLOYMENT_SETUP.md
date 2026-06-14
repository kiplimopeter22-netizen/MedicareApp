# 🚀 Medicare App - Deployment Setup Guide

Follow this guide step-by-step to deploy the Medicare App according to project requirements.

## Prerequisites

- GitHub account
- Docker Hub account
- Local: Node.js 18+, Python 3.10+, Docker

---

## Step 1: Docker Hub Setup (5 minutes)

1. **Create Docker Hub account** (if not already done)
   - Visit https://hub.docker.com
   - Sign up with email

2. **Generate access token**
   - Settings → Security → New Access Token
   - Copy the token

3. **Create two repositories**
   - `medicareapp-frontend`
   - `medicareapp-backend`

---

## Step 2: GitHub Secrets Setup (5 minutes)

For each repository (or at organization level):

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Add these secrets:
   - `DOCKER_USERNAME`: Your Docker Hub username
   - `DOCKER_PASSWORD`: Your Docker Hub access token (from Step 1)

---

## Step 3: Update Backend Requirements (2 minutes)

Ensure `backend/requirements.txt` includes test dependencies:

```txt
fastapi
uvicorn
pytest
pytest-cov
```

Update if needed:
```bash
cd backend
pip install pytest pytest-cov
pip freeze > requirements.txt
```

---

## Step 4: Configure Frontend Test Coverage (5 minutes)

Your `frontend/vitest.config.js` should have coverage thresholds:

```javascript
export default defineConfig({
  test: {
    coverage: {
      lines: 30,
      functions: 30,
      branches: 30,
      statements: 30
    }
  }
});
```

---

## Step 5: Run Tests Locally (10 minutes)

### Frontend
```bash
cd frontend
npm install
npm run test:coverage
```
Goal: ≥ 30% coverage

### Backend
```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
pytest --cov=app --cov-report=term-missing tests/
```
Goal: ≥ 10% coverage

---

## Step 6: Test Docker Locally (10 minutes)

```bash
cd /workspaces/MedicareApp

# Build containers
docker-compose build

# Run containers
docker-compose up

# Test in browser
# Frontend: http://localhost:3000
# Backend API: http://localhost:8000/docs

# Stop containers
docker-compose down
```

---

## Step 7: Push Initial Changes (5 minutes)

```bash
cd /workspaces/MedicareApp

# Add all new files
git add .

# Commit with proper message
git commit -m "chore(docker): add Docker configuration and CI/CD workflows"

# Push to main
git push origin main
```

This triggers GitHub Actions workflows automatically.

---

## Step 8: Monitor First Build (5 minutes)

1. Go to GitHub repository
2. Click **Actions** tab
3. Watch the workflows run:
   - `Frontend Docker Build and Push`
   - `Backend Docker Build and Push`
4. Verify images appear on Docker Hub

---

## Step 9: Create First Release (5 minutes)

### Via GitHub UI

1. Go to **Actions** tab
2. Select **Create Frontend Release**
3. Click **Run workflow**
4. Enter version: `1.0.0`
5. Watch release get created
6. Repeat for backend

### Via Command Line

```bash
# Frontend
git tag -a frontend-v1.0.0 -m "Frontend Release v1.0.0"
git push origin frontend-v1.0.0

# Backend
git tag -a backend-v1.0.0 -m "Backend Release v1.0.0"
git push origin backend-v1.0.0
```

---

## Step 10: Production Deployment Options

### Option A: Docker Compose (Simple)

```bash
# On your server
docker-compose pull
docker-compose up -d
```

### Option B: Render.com (Recommended)

**Frontend:**
1. Go to https://render.com
2. Create new Web Service
3. Connect GitHub repo (frontend repo or this repo with context `frontend/`)
4. Build command: `npm install && npm run build`
5. Start command: `serve -s dist -l 3000`
6. Deploy

**Backend:**
1. Create new Web Service
2. Connect GitHub repo (backend repo or context `backend/`)
3. Build command: `pip install -r requirements.txt`
4. Start command: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
5. Deploy

### Option C: Railway.app

Similar to Render, just connect repos and set environment variables.

### Option D: AWS/GCP/Azure

Use managed container services with Docker images from Docker Hub:

```bash
docker pull yourusername/medicareapp-frontend:latest
docker pull yourusername/medicareapp-backend:latest
```

---

## Deployment Checklist

- [ ] Docker Hub account created
- [ ] GitHub Secrets configured (DOCKER_USERNAME, DOCKER_PASSWORD)
- [ ] Backend requirements updated with test dependencies
- [ ] Frontend test coverage ≥ 30%
- [ ] Backend test coverage ≥ 10%
- [ ] Docker Compose tested locally
- [ ] Initial commit pushed to main
- [ ] GitHub Actions workflows completed successfully
- [ ] Docker images available on Docker Hub
- [ ] First release created (v1.0.0)
- [ ] Production deployment verified

---

## Continuous Deployment

After initial setup, the process is automated:

1. **Feature Development**
   ```bash
   git checkout -b feat/new-feature
   # Make changes
   git commit -m "feat(scope): description"
   git push origin feat/new-feature
   ```

2. **Create Pull Request**
   - Code review
   - Merge to main

3. **Automatic Deployment**
   - GitHub Actions runs tests
   - Builds Docker images
   - Pushes to Docker Hub
   - Ready for production

4. **Create Release** (when ready)
   - Run release workflow
   - Creates GitHub Release
   - Tags Docker image with version

---

## Troubleshooting

### Docker images not pushing to Hub
- Verify DOCKER_USERNAME and DOCKER_PASSWORD secrets
- Check Docker Hub token hasn't expired
- Review GitHub Actions logs

### Tests failing in CI/CD
- Run tests locally first
- Ensure test coverage meets requirements
- Check pytest/vitest config

### Container won't start
- Review logs: `docker logs container-name`
- Verify environment variables
- Check port availability

### Frontend can't reach backend
- Update `REACT_APP_API_URL` in frontend environment
- Ensure backend is running and accessible
- Check CORS configuration

---

## Next: Repository Separation (Optional)

When ready to separate into two repos:

```bash
# Frontend only repo
git subtree split -P frontend -b frontend-only

# Backend only repo
git subtree split -P backend -b backend-only

# Push to new repos
git push newrepo frontend-only:main
```

See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) Phase 1 for details.

---

## Support

- Docker Compose issues: See docker-compose.yml
- CI/CD problems: Check .github/workflows/
- Git workflow: See [GIT_WORKFLOW.md](GIT_WORKFLOW.md)
- Full deployment details: See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)

Happy deploying! 🎉

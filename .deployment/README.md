# Deployment & Docker Configuration

This folder contains deployment configuration files.

## Files

- `docker-compose.yml` - Local development with both services
- `.github/workflows/` - CI/CD automation
  - `frontend-docker-deploy.yml` - Build & push frontend to Docker Hub
  - `backend-docker-deploy.yml` - Build & push backend to Docker Hub
  - `frontend-release.yml` - Create frontend releases
  - `backend-release.yml` - Create backend releases

## Quick Start

### Local Development
```bash
docker-compose up
```

Frontend: http://localhost:3000
Backend API: http://localhost:8000/docs

### Production Deployment

1. Create Docker Hub account
2. Add secrets to GitHub (DOCKER_USERNAME, DOCKER_PASSWORD)
3. Push to main or create a release
4. Images automatically build and push to Docker Hub

See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for full details.

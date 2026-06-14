# Contributing Guidelines

Thank you for your interest in contributing to the Medicare App! This document provides guidelines and instructions for contributing to the project.

## Getting Started

1. **Fork** the repository
2. **Clone** your fork locally
3. **Create a new branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make your changes** and commit with clear messages
5. **Push** to your fork
6. **Create a Pull Request** against the `main` branch

## Development Setup

### Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -e ".[test]"
```

### Frontend Setup
```bash
cd frontend
npm install
```

## Before Submitting a PR

### Run Tests Locally

**Backend:**
```bash
cd backend
pytest tests/ -v --cov=app
```

**Frontend:**
```bash
cd frontend
npm test
```

### Build Verification

**Backend:**
```bash
cd backend
docker build -t medicare-backend:latest .
```

**Frontend:**
```bash
cd frontend
npm run build
```

## Code Standards

- **Python**: Follow PEP 8
- **JavaScript/React**: Follow ESLint configuration
- **Commits**: Use clear, descriptive commit messages
- **Comments**: Document complex logic
- **Tests**: Write tests for new features and bug fixes

## Pull Request Process

1. **Fill out the PR template** completely
2. **Ensure all checks pass** (CI/CD pipeline)
3. **Request review** from at least one maintainer
4. **Address feedback** promptly
5. **Get approval** from reviewers
6. **Merge** to `main` branch

## Commit Message Format

```
[TYPE] Brief description

Detailed explanation if needed.

Related: #issue-number
```

Types:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `test:` Test additions/modifications
- `chore:` Build, dependencies, etc.

## Reporting Issues

- Use the issue tracker to report bugs
- Provide clear reproduction steps
- Include relevant environment information
- Attach screenshots/logs if applicable

## Questions?

Feel free to open an issue or reach out to the maintainers.

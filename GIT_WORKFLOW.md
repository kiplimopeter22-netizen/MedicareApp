# Git Workflow Guide

## Commit Message Format

All commits should follow this format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Commit Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that don't affect code meaning (whitespace, formatting, etc.)
- **refactor**: Code change that neither fixes a bug nor adds a feature
- **perf**: Code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **chore**: Changes to build process, dependencies, or development tooling

### Scope

Specify what part of the codebase is affected:
- `frontend`: React app changes
- `backend`: FastAPI app changes
- `docker`: Docker configuration
- `ci`: CI/CD workflows
- `docs`: Documentation
- `deps`: Dependency updates

### Subject Line

- Use imperative mood ("add" not "added" or "adds")
- Don't capitalize first letter
- No period (.) at the end
- Limit to 50 characters

### Examples

```
feat(frontend): add department card color scheme

- Implement complementary teal and blue gradient
- Update Tailwind config with custom palette
- Add hero image with healthcare theme

Closes #42
```

```
fix(backend): handle null appointment times gracefully

- Add null check before datetime parsing
- Return 400 error with helpful message
- Add test case for edge case

Fixes #88
```

```
test(frontend): increase Home component coverage to 30%

- Add tests for navigation buttons
- Mock appointment data in tests
- Test responsive behavior

Related-to: #120
```

## Pull Request Workflow

1. **Create a feature branch**
   ```bash
   git checkout -b feat/department-colors
   # or
   git checkout -b fix/appointment-bug
   ```

2. **Make commits with descriptive messages**
   ```bash
   git commit -m "feat(frontend): add complementary colors to departments"
   git commit -m "test(frontend): add department color tests"
   ```

3. **Push to your fork**
   ```bash
   git push origin feat/department-colors
   ```

4. **Create PR on GitHub**
   - Link related issues
   - Describe what changed and why
   - Mention test coverage improvements

5. **Code review & approval**
   - Address reviewer comments
   - Make follow-up commits
   - Re-request review when done

6. **Merge and delete branch**
   ```bash
   git switch main
   git pull origin main
   git branch -d feat/department-colors
   ```

## Release Process

### For Maintainers

1. **Create a release branch**
   ```bash
   git checkout -b release/frontend-v1.0.0
   ```

2. **Update version in package.json**
   ```json
   { "version": "1.0.0" }
   ```

3. **Update CHANGELOG**
   ```markdown
   ## [1.0.0] - 2026-06-14
   
   ### Added
   - Initial launch with departments page
   
   ### Fixed
   - Fixed responsive design issues
   ```

4. **Commit and push**
   ```bash
   git commit -m "chore(frontend): bump version to 1.0.0"
   git push origin release/frontend-v1.0.0
   ```

5. **Create PR and merge to main**

6. **Tag the release**
   ```bash
   git tag -a frontend-v1.0.0 -m "Frontend Release v1.0.0"
   git push origin frontend-v1.0.0
   ```

   Or use GitHub Actions: Actions → Create Frontend Release → Provide version

## Branch Naming

- `main` - Production branch, always deployable
- `develop` - Integration branch (optional)
- `feat/<feature-name>` - Feature branches
- `fix/<bug-name>` - Bug fix branches
- `docs/<doc-name>` - Documentation only
- `chore/<task-name>` - Maintenance tasks
- `release/<version>` - Release branches

## Code Review Checklist

Before merging, ensure:

- [ ] Tests pass locally
- [ ] Code coverage meets requirements (30% frontend, 10% backend)
- [ ] Commit messages follow format
- [ ] No console errors/warnings
- [ ] Documentation updated if needed
- [ ] Responsive design tested
- [ ] API endpoints documented (backend)
- [ ] No hardcoded values or secrets

## Useful Git Commands

```bash
# View commit history with details
git log --oneline --graph --all

# Amend last commit
git commit --amend --no-edit

# Rebase current branch on main
git rebase main

# View changes before committing
git diff

# Stage specific hunks
git add -p

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Force push (use with caution)
git push --force-with-lease
```

## CI/CD Integration

All commits to `main` trigger:
- ✅ Frontend tests (30% coverage required)
- ✅ Backend tests (10% coverage required)
- ✅ Docker image build
- ✅ Push to Docker Hub

Ensure your commits pass all checks before merging!

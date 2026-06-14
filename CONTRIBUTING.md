# Contribution guidelines

This repository follows feature-based branches and descriptive commit messages.

Branch naming

- feature/<ticket>-short-description — new features
- fix/<ticket>-short-description — bug fixes
- chore/<short-description> — non-user-visible tasks
- docs/<short-description> — documentation changes

Commit message format

- Use Conventional-style, but concise:

  type(scope): Short imperative summary

  Body (optional): longer description, motivation, and implementation notes.

  Footer (optional): References to issues or breaking changes.

Types

- feat: new feature
- fix: bug fix
- docs: documentation only changes
- style: formatting, no code change
- refactor: code change that neither fixes a bug nor adds a feature
- perf: performance improvements
- test: adding or updating tests
- chore: build process or auxiliary tools

Best practices

- Keep the subject line <= 50 characters.
- Use the imperative mood: "Add feature" not "Added feature".
- Provide a body for non-trivial changes explaining the why.
- Group related changes into a single commit when appropriate.
- Make commits small and focused — one feature/idea per commit.

Examples

- Create a feature branch:

  git checkout -b feature/JIRA-123-booking-form

- Commit examples:

  feat(booking): add responsive appointment form

  fix(api): return 400 when required fields missing

  docs(readme): add deployment instructions

Pull requests and reviews

- Open a PR from your feature branch to `main` or `develop`.
- Link related issue/ticket in the PR description.
- Request at least one reviewer; address review comments with additional commits.
- Use descriptive PR titles matching the branch/commit style.

Releases

- Use semantic versioning for releases (vMAJOR.MINOR.PATCH).
- Create a GitHub Release and link the PRs included.

# Medicare Frontend

This repository contains the frontend for the Medicare login page.

## Features

- React application with Tailwind CSS
- Responsive login page
- Dockerized build and deployment

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start locally:
   ```bash
   npm start
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## Docker

Build image:
```bash
docker build -t medicare-frontend:latest .
```

Run locally:
```bash
docker run -p 8080:80 medicare-frontend:latest
```

## Notes

This project currently includes a login page scaffold only.

- Tailwind configured
- Signup page implemented
- Docker build and run instructions
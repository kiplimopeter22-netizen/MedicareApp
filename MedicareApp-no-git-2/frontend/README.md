# Medicare Frontend

This frontend is a Vite + React app using Tailwind CSS. It includes a `Departments` page with responsive cards for hospital departments.

Run locally:

```bash
cd frontend
npm install
npm run dev
```

Run tests with coverage:

```bash
npm run test:coverage
```

Build and preview production:

```bash
npm run build
npm run preview
```

Docker build (produces an nginx-served image):

```bash
docker build -t medicare-frontend:latest frontend
docker run -d -p 8080:80 medicare-frontend:latest
```

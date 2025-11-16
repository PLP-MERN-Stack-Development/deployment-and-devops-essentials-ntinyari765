# MERN Blog

This repository contains a simple MERN (MongoDB, Express, React, Node) blog application used for Week 7 assignments. It includes a backend API (Express + Mongoose) and a React frontend (Vite + Tailwind CSS) with a soft lilac theme.

The live link for the MERN blog is https://deployment-and-devops-essentials-nt.vercel.app/

## Repository layout

- `backend/` — Express API, Mongoose models, controllers, routes, middleware.
- `frontend/` — React (Vite) frontend, Tailwind CSS, components and pages.
- `Week7-Assignment.md` — assignment brief.

## Requirements

- Node.js v18+ recommended
- npm (comes with Node)
- MongoDB (local or Atlas)

## Environment

Create `.env` in the `backend/` folder with the following variables (or set them in your shell):

```
MONGO_URI=your_mongodb_url/your-db-name
PORT=5000
JWT_SECRET=some_long_secret
```

On the frontend, you can configure the API base URL with a `.env` file in `frontend/` (Vite format):

```
VITE_API_URL=http://your_url/api
```

There is a sample `.env.example` in `backend/` and `frontend/` — copy them and fill values.

## Install

Install server dependencies:

```powershell
cd backend
npm install
```

Install client dependencies:

```powershell
cd frontend
npm install
```

## Run (development)

1) Make sure nothing else is using port 5000. On Windows PowerShell you can stop the process with:

```powershell
#$p = Get-NetTCPConnection -LocalPort 5000 -ErrorAction SilentlyContinue; if ($p) { Stop-Process -Id $p.OwningProcess -Force; Write-Output "Stopped process $($p.OwningProcess)" } else { Write-Output "No process found on port 5000" }
```

2) Start the backend (from the `backend/` folder):

```powershell
cd backend
npm run dev
```

3) Start the client (from the `frontend/` folder) in a second terminal:

```powershell
cd frontend
npm run dev
```

## Seed data

To pre-populate categories and sample posts, run the seed script (server):

```powershell
cd frontend
node utils/seed.js
```

This will create a few categories and example posts for local development.

## API Endpoints (major)

- `POST /api/auth/register` — register user (body: username, password)
- `POST /api/auth/login` — login (body: username, password) → returns JWT
- `GET /api/posts` — list posts
- `GET /api/posts/:id` — get single post
- `POST /api/posts` — create post (protected — send Authorization: Bearer <token>)
- `PUT /api/posts/:id` — update post (protected)
- `DELETE /api/posts/:id` — delete post (protected)
- `GET /api/categories` — list categories
- `POST /api/categories` — create category (protected)

All responses are JSON. Errors come back with a consistent JSON shape via the error middleware.

## Frontend notes

- The client uses Tailwind CSS for styling and a small `theme.css` file for CSS tokens (lilac colors, radius, shadow).
- Shared axios instance is in `frontend/src/services/api.js` and uses `import.meta.env.VITE_API_URL`.

## Troubleshooting

- Port in use: If the server fails to start with `EADDRINUSE :::5000`, stop the process using the port or change `PORT` in `backed/.env`.
- MongoDB connection errors: verify your `MONGO_URI` and that MongoDB is reachable (Atlas or local).
- Tailwind/PostCSS errors: ensure packages are installed in `frontend/` and run `npm run dev` from the `frontend/` folder.

## Next improvements (suggested)

- Add request validation (Joi/express-validator) for API endpoints.
- Add file uploads (images) with `multer` or Cloudinary.
- Add tests (Jest + Supertest for server, React Testing Library for client).
- Add ESLint/Prettier and GitHub Actions for CI.

## License

This repository is provided for learning and assignment purposes.

---


## Project Structure

```
mern-blog/
├── client/                 # React front-end
│   ├── public/             # Static files
│   ├── src/                # React source code
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API services
│   │   ├── context/        # React context providers
│   │   └── App.jsx         # Main application component
│   └── package.json        # Client dependencies
├── server/                 # Express.js back-end
│   ├── config/             # Configuration files
│   ├── controllers/        # Route controllers
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   ├── utils/              # Utility functions
│   ├── server.js           # Main server file
│   └── package.json        # Server dependencies
└── README.md               # Project documentation
```

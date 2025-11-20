# FORZA Power Technologies - Landing Page

Modern landing page for FORZA UPS built with Astro, React, Bootstrap, and Strapi CMS.

## Stack

- **Frontend**: Astro + React + TypeScript
- **Styling**: Bootstrap 5 + Custom CSS
- **CMS**: Strapi (PostgreSQL)
- **Sliders**: Swiper.js

## Prerequisites

- Node.js 18+
- PostgreSQL 15+ (for Strapi backend)

## Setup

### Frontend (Astro)

```bash
npm install
cp .env.example .env
# Edit .env with your Strapi URL
npm run dev
```

### Backend (Strapi)

Located in `/srv/apps/forzastore-api` on the server.

```bash
cd /srv/apps/forzastore-api
npm install
npm install pg
# Configure .env with database credentials
npm run develop
```

## Environment Variables

### Frontend (.env)
```
PUBLIC_STRAPI_URL=http://your-server:1337
```

### Backend (Strapi .env)
See Strapi setup documentation.

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Installs dependencies                       |
| `npm run dev`     | Starts local dev server at `localhost:4321` |
| `npm run build`   | Build production site to `./dist/`          |
| `npm run preview` | Preview build locally before deploying      |

## Deployment

### Build Frontend
```bash
npm run build
```

The build output will be in `dist/` directory.

### Production Server
- Strapi: Runs on port 1337
- Frontend: Build and serve with nginx/apache

## Features

- ✅ Dynamic product slider with Strapi integration
- ✅ Certifications slider
- ✅ Responsive design
- ✅ Contact form
- ✅ SEO optimized
- ✅ Multiple product images support

## Content Management

Access Strapi admin at: `http://your-server:1337/admin`

### Content Types:
- **Products**: UPS, inverters, regulators, etc.
- **Certifications**: ISO, CE, FCC, etc.
- **Features**: Characteristics and solutions

## License

Private - FORZA Power Technologies

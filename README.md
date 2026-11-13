# MOTORHUB AFRICA

Professional automotive marketplace for Ghana and Nigeria with a premium black, gold, and white theme.

## Overview

MOTORHUB AFRICA is a demo-ready automotive marketplace designed for:
- cars
- motorcycles
- trucks
- buses
- tricycles
- spare parts
- heavy equipment

The platform is tailored for the Ghana and Nigeria market and includes:
- browsing and filtering
- search and price filters
- dealer profiles and WhatsApp contact links
- dealer submission workflow
- admin approval or rejection flow
- future-ready design for subscriptions and Android app integration

## Stack

- Frontend: Vite + Vanilla JavaScript
- Backend: Express API with JSON persistence
- Data: demo-only inventory and dealer records

## Run locally

```bash
npm install
npm run dev:all
```

This starts:
- the Vite frontend on port 5173
- the API on port 4000

## API endpoints

- GET /api/health
- GET /api/categories
- GET /api/listings
- POST /api/listings
- GET /api/admin/submissions
- PATCH /api/admin/submissions/:id/status
- GET /api/dealers
- GET /api/subscriptions
- POST /api/subscriptions

## Important note

All listed inventory and dealer profiles are demo content only and are not presented as genuine advertisements.

## Future roadmap

- authenticated dealer dashboards
- subscriptions and featured placements
- robust admin moderation and analytics
- database migration from JSON to PostgreSQL or MongoDB
- Android app API design and mobile UX planning

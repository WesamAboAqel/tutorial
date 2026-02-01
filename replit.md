# Tutorial - Angular 21 Application

## Overview
This is an Angular 21 project with Server-Side Rendering (SSR) support, imported from GitHub.

## Project Structure
- `src/` - Source code directory
  - `app/` - Angular application components and configuration
  - `main.ts` - Browser entry point
  - `main.server.ts` - Server entry point for SSR
  - `server.ts` - Express server for SSR
  - `index.html` - Main HTML template
- `public/` - Static assets directory
- `angular.json` - Angular CLI configuration
- `package.json` - Node.js dependencies and scripts

## Development
- **Dev Server**: Run `npm run start` to start the Angular dev server on port 5000
- **Build**: Run `npm run build` to create a production build
- **Test**: Run `npm run test` to run unit tests with Vitest

## Replit Configuration
- Dev server configured to bind to `0.0.0.0:5000` with all hosts allowed for Replit's proxy
- Angular analytics disabled

## Recent Changes
- 2026-02-01: Initial import and Replit environment configuration
  - Configured Angular to run on port 5000 with host 0.0.0.0
  - Enabled allowedHosts for Replit proxy compatibility
  - Disabled Angular CLI analytics

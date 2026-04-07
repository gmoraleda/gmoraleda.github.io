# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio/CV website for Guillermo Moraleda (Senior iOS Engineer). Built with Jekyll 4.1 using the Hydejack theme, with a Gulp-based asset pipeline. Deployed to GitHub Pages via GitHub Actions on push to `master`.

## Build & Development Commands

- **Local dev server with live reload:** `npm run dev` (or `gulp`) — compiles assets, builds Jekyll, starts BrowserSync, and watches for changes
- **Jekyll build only:** `bundle exec jekyll build`
- **Jekyll serve only:** `bundle exec jekyll serve`
- **Compile SCSS only:** `gulp sass`
- **Compile JS only:** `gulp js`
- **Install dependencies:** `bundle install` (Ruby) and `npm install` (Node)

Ruby version: 3.1.4 (see `.ruby-version`)

## Architecture

### Data-Driven Content

All CV/portfolio content (contact info, skills, education, experience, projects, languages) lives in `_data/data.yml`. This single YAML file drives the entire site. The data is accessed in templates via `site.data.data`.

### Asset Pipeline (Gulp)

Source files in `src/` are compiled by Gulp into `assets/`:
- `src/styles/*.scss` → `assets/css/` (compiled + minified)
- `src/js/*.js` → `assets/js/main.js` (concatenated + uglified)
- `src/fonts/` → `assets/fonts/`
- `src/img/` → `assets/img/` (optimized)

Do not edit files in `assets/css/` or `assets/js/` directly — they are build outputs.

### Templates

- Single layout: `_layouts/default.html`
- Page composition via includes: `_includes/` contains partials (header, contact, skills, experience, projects, etc.)
- `index.html` assembles the page from includes using a sidebar + main content structure
- Project detail includes live in `_includes/projects/`

### Deployment

GitHub Actions workflow (`.github/workflows/jekyll.yml`) builds and deploys to GitHub Pages on push to `master`. The CI build uses `bundle exec jekyll build` — Gulp asset compilation should be done locally before committing.

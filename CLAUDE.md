# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio/CV website for Guillermo Moraleda (Senior iOS Engineer). Built with Jekyll 4 (no theme gem; layouts and Sass live in this repo). Deployed to GitHub Pages via GitHub Actions on push to `master`.

## Build & Development Commands

- **Jekyll build only:** `bundle exec jekyll build`
- **Jekyll serve only:** `bundle exec jekyll serve`
- **Install dependencies:** `bundle install`

Ruby version: 3.1.4 (see `.ruby-version`)

## Architecture

### Data-Driven Content

All CV/portfolio content (contact info, skills, education, experience, projects, languages) lives in `_data/data.yml`. This single YAML file drives the entire site. The data is accessed in templates via `site.data.data`.

### Styles

`assets/css/main.scss` is compiled by Jekyll from the partials in `_sass/`.

### Templates

- Single layout: `_layouts/default.html`
- Page composition via includes: `_includes/` contains partials (header, contact, skills, experience, projects, etc.)
- `index.html` assembles the page from includes using a sidebar + main content structure
- Project detail includes live in `_includes/projects/`

### Deployment

GitHub Actions workflow (`.github/workflows/jekyll.yml`) builds and deploys to GitHub Pages on push to `master`. The CI build runs `bundle exec jekyll build`; `_site/` and `vendor/` are not committed.

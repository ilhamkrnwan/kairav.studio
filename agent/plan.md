# Kairav Studio Implementation Plan

## Source of Truth
- Brand, positioning, services, and content direction: `docs/README.md`
- Theme, UI direction, motion, SEO/GEO, and visual guidance: `docs/guide.md`
- Team workflow, task split, and implementation rules: `agent/`

## Direction
Build the official `kairav.studio` website as a design-led technology studio site: premium, fast, SEO/GEO-ready, and able to explain services beyond websites, including custom systems, AI, Android, IoT, and API integration.

## V1 Route Structure
- `/`: homepage
- `/services`: service overview
- `/works`: portfolio/work listing
- `/case-studies/[slug]`: project detail
- `/about`: studio profile
- `/insights`: article listing
- `/insights/[slug]`: article detail
- `/contact`: inquiry page
- `/privacy-policy`: legal page
- `/terms`: legal page
- `/404`: custom not found page

## Compatibility Routes
- Keep `/work` and `/blog` as aliases if already used internally.
- New links should prefer `/works`, `/case-studies`, and `/insights`.

## Homepage Sections
1. Hero
2. Value statement
3. Services
4. Performance
5. SEO/GEO
6. Selected works
7. Custom system capability
8. Process
9. FAQ
10. CTA

## Build Order
1. Align navigation and route naming with `docs/README.md`.
2. Align service data with the six core services.
3. Keep components modular and reusable.
4. Build page content using data files.
5. Add SEO/GEO-friendly headings and internal links.
6. Run build and route smoke check.

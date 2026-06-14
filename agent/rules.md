# Kairav Studio Team Rules

## Source Rules
- Read `docs/README.md` before changing content or positioning.
- Read `docs/guide.md` before changing UI, theme, motion, or page composition.
- Do not duplicate full design rules in `agent/`; the design source is `docs/guide.md`.
- Use `agent/` only for implementation plan, task tracking, and team workflow.

## Development Rules
- Use Astro components for repeated UI.
- Use `src/data` for repeated content.
- Keep each file focused and easy to review.
- Prefer small components over long page files.
- Do not create `/team` or `/contributors` yet.
- Keep contributor data ready for a future dedicated page.
- Avoid emoji icons.
- Use clear, specific copy from the README/guide direction.

## Route Rules
- Preferred public routes: `/services`, `/works`, `/case-studies`, `/about`, `/insights`, `/contact`.
- Keep existing aliases only to avoid broken links.
- New internal links should use preferred public routes.

## Collaboration Rules
- One task should change one clear area.
- Do not refactor unrelated files.
- Mention data changes when editing `src/data`.
- Keep TODO notes actionable.

## Comment Format
```ts
// TODO(team): short task that still needs to be done
// AI-NOTE: short reason behind an implementation decision
// FIXME(team): issue that should be fixed before production
```

## Commands
```bash
bun install
bun run dev
bun run build
bun run preview
```

import { defineMiddleware } from "astro:middleware";

/**
 * Custom middleware for Astro manual i18n routing.
 * Route resolution is statically generated via `[...locale]` routes.
 */
export const onRequest = defineMiddleware((_context, next) => {
  return next();
});

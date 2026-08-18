export * from "./types";
export * from "./icons";
import { brandWebsite } from "./brand-website";
import { seoGeo } from "./seo-geo";
import { performanceOptimization } from "./performance-optimization";
import { customSystem } from "./custom-system";
import { aiIntegration } from "./ai-integration";
import { androidIot } from "./android-iot";
import type { Service } from "./types";

export {
  brandWebsite,
  seoGeo,
  performanceOptimization,
  customSystem,
  aiIntegration,
  androidIot,
};

export const services: Service[] = [
  brandWebsite,
  seoGeo,
  performanceOptimization,
  customSystem,
  aiIntegration,
  androidIot,
];

/* Helpers used by /tools pages */
export const getServiceById = (id: string): Service | undefined =>
  services.find((service) => service.id === id);

export const serviceCategories: string[] = [
  ...new Set(services.map((service) => service.category)),
];

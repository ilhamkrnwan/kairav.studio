export * from "./types";
import { biolearn } from "./biolearn";
import { masjidflow } from "./masjidflow";
import { statprov } from "./statprov";
import { sistemInformasiDesa } from "./sistem-informasi-desa";
import { kairavStudioLandingUpgrade } from "./kairav-studio-landing-upgrade";
import type { Project } from "./types";

export {
  biolearn,
  masjidflow,
  statprov,
  sistemInformasiDesa,
  kairavStudioLandingUpgrade,
};

export const projects: Project[] = [
  biolearn,
  masjidflow,
  statprov,
  sistemInformasiDesa,
  kairavStudioLandingUpgrade,
];

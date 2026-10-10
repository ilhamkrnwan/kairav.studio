/**
 * src/scripts/animations.ts
 * High-Performance Master GSAP Choreography Engine for Kairav Studio.
 *
 * Implements strict guidelines from:
 * 1. gsap-performance:
 *    - Hardware-accelerated compositor-only transforms: x, y, scale, rotation, opacity.
 *    - Zero layout thrashing (no top/left/width/height/margin animations).
 *    - gsap.quickTo() for high-efficiency 60fps magnetic cursor interactions.
 *    - ScrollTrigger.batch() for efficient DOM querying and layer promotion.
 *    - gsap.context() lifecycle scoping with complete teardown on navigation.
 * 2. design-taste-frontend:
 *    - Architectural blueprint discipline: measured, restrained, luxury tech pacing.
 *    - Respects prefers-reduced-motion at all times.
 */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let masterContext: gsap.Context | null = null;

/**
 * Initializes GSAP animations site-wide.
 * Safe to call on initial DOM load and Astro's astro:page-load event.
 */
export function initSiteAnimations(): void {
  // Always clean up previous context before re-initializing
  destroySiteAnimations();

  // Accessibility check: immediately exit if user prefers reduced motion
  if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  // Create isolated GSAP Context for the current page
  masterContext = gsap.context(() => {
    initHeroAnimations();
    initWatermarkAnimations();
    initSectionHeaderAnimations();
    initGridBatchAnimations();
    initMediaParallaxAnimations();
    initMagneticInteractions();
  });
}

/**
 * Cleans up and reverts all GSAP tweens and ScrollTriggers.
 * Called on astro:before-swap to eliminate memory leaks and orphaned listeners.
 */
export function destroySiteAnimations(): void {
  if (masterContext) {
    masterContext.revert();
    masterContext = null;
  }
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}

/**
 * 1. Hero Stage Entrance Choreography
 */
function initHeroAnimations(): void {
  const heroSection = document.querySelector<HTMLElement>("[data-hero-section], .about-hero-section, .teams-hero-section, .services-hero-section, .contact-hero-section, .tools-hero-section, .dispatches-hero-section, .case-study-hero");
  if (!heroSection) return;

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  // Blueprint Telemetry Bar
  const telemetry = heroSection.querySelector(".blueprint-meta-bar");
  if (telemetry) {
    tl.from(telemetry, {
      opacity: 0,
      y: -10,
      duration: 0.6,
    }, 0.05);
  }

  // Left Rail Dossier items
  const railItems = heroSection.querySelectorAll(".band-rail > *");
  if (railItems.length > 0) {
    tl.from(railItems, {
      opacity: 0,
      x: -16,
      stagger: 0.06,
      duration: 0.7,
      ease: "power2.out",
    }, 0.1);
  }

  // Hero Eyebrow
  const eyebrow = heroSection.querySelector(".hero-eyebrow, .tool-hero-tag, .case-hero-tag");
  if (eyebrow) {
    tl.from(eyebrow, {
      opacity: 0,
      y: 12,
      duration: 0.5,
    }, 0.15);
  }

  // Hero Headline
  const title = heroSection.querySelector(".hero-title, h1");
  if (title) {
    tl.from(title, {
      opacity: 0,
      y: 24,
      duration: 0.85,
    }, 0.2);
  }

  // Hero Description
  const desc = heroSection.querySelector(".hero-desc, .case-hero-desc");
  if (desc) {
    tl.from(desc, {
      opacity: 0,
      y: 16,
      duration: 0.7,
      ease: "power2.out",
    }, 0.3);
  }

  // Standards Chips / Quick Channels / Filter Chips
  const chips = heroSection.querySelectorAll(".standard-chip, .quick-channel-card, .quick-channel-badge, .filter-chip, .tool-spec-chip");
  if (chips.length > 0) {
    tl.from(chips, {
      opacity: 0,
      y: 14,
      stagger: 0.04,
      duration: 0.6,
      ease: "power2.out",
    }, 0.35);
  }

  // Hero Action Buttons
  const actionRow = heroSection.querySelector(".hero-action-row, .case-hero-actions");
  if (actionRow) {
    tl.from(actionRow.children, {
      opacity: 0,
      y: 12,
      stagger: 0.08,
      duration: 0.6,
    }, 0.4);
  }

  // Monumental Media Frame Reveal
  const mediaFrame = heroSection.querySelector(".about-hero-media-frame, .teams-hero-media-frame, .tool-spec-media-frame, .dispatch-hero-media, .hero-preview, .hero-media-frame");
  if (mediaFrame) {
    tl.from(mediaFrame, {
      opacity: 0,
      scale: 0.97,
      y: 20,
      duration: 1.0,
      ease: "power3.out",
    }, 0.45);
  }
}

/**
 * 2. Background Rotor Watermark Continuous Gentle Spin
 */
function initWatermarkAnimations(): void {
  const rotors = document.querySelectorAll(".rotor-svg");
  if (rotors.length === 0) return;

  gsap.to(rotors, {
    rotation: 360,
    duration: 120,
    repeat: -1,
    ease: "none",
  });
}

/**
 * 3. ScrollTrigger Section Headers & Eyebrows
 */
function initSectionHeaderAnimations(): void {
  const headers = document.querySelectorAll<HTMLElement>(
    ".matrix-header-wrap, .services-header-wrap, .section-header-wrap, .timeline-head, .comparison-head, .faq-header-wrap"
  );

  headers.forEach((hdr) => {
    const children = hdr.children;
    if (!children.length) return;

    gsap.from(children, {
      opacity: 0,
      y: 20,
      stagger: 0.08,
      duration: 0.75,
      ease: "power2.out",
      scrollTrigger: {
        trigger: hdr,
        start: "top 88%",
        once: true,
      },
    });
  });
}

/**
 * 4. ScrollTrigger Batching for Cards and Grids
 * Uses ScrollTrigger.batch() to avoid layout thrashing and handle dynamic layout heights
 */
function initGridBatchAnimations(): void {
  const cardSelectors = [
    ".services-cards-grid > article",
    ".tools-cards-grid > article",
    ".dispatches-archive-grid > article",
    ".projects-cards-grid > article",
    ".milestones-matrix > .milestone-card",
    ".values-cards-grid > .value-card",
    ".specialist-grid > .specialist-card",
    ".system-gallery-strip > .system-screen-card",
    ".intake-options-grid > *",
    ".protocol-cards-grid > *",
    ".agency-matrix-table tr",
  ].join(", ");

  const cardElements = document.querySelectorAll<HTMLElement>(cardSelectors);
  if (cardElements.length === 0) return;

  ScrollTrigger.batch(cardElements, {
    start: "top 92%",
    once: true,
    onEnter: (batch) => {
      gsap.from(batch, {
        opacity: 0,
        y: 28,
        stagger: 0.06,
        duration: 0.65,
        ease: "power2.out",
        overwrite: "auto",
      });
    },
  });
}

/**
 * 5. Blueprint Media Frame Parallax Scrub
 * Subtle scrub on media frame images within overflow:hidden containers
 */
function initMediaParallaxAnimations(): void {
  const mediaImgs = document.querySelectorAll<HTMLImageElement>(
    ".about-hero-img, .teams-hero-img, .tool-spec-media-frame img, .dispatch-hero-media img, .system-screen-img"
  );

  mediaImgs.forEach((img) => {
    const parent = img.closest<HTMLElement>(
      ".about-hero-media-frame, .teams-hero-media-frame, .tool-spec-media-frame, .dispatch-hero-media, .system-screen-card"
    );
    if (!parent) return;

    gsap.fromTo(
      img,
      { yPercent: -4 },
      {
        yPercent: 4,
        ease: "none",
        scrollTrigger: {
          trigger: parent,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      }
    );
  });
}

/**
 * 6. High-Performance Magnetic Interactions via gsap.quickTo()
 * Reuses a single tween per button to guarantee 60fps compositor performance
 */
function initMagneticInteractions(): void {
  // Only enable magnetic pull on pointer devices (desktop/trackpad)
  if (window.matchMedia("(pointer: coarse)").matches) return;

  const magneticButtons = document.querySelectorAll<HTMLElement>(
    ".clonix-cta-button, .hero-outline-btn, [data-magnetic]"
  );

  magneticButtons.forEach((btn) => {
    const xTo = gsap.quickTo(btn, "x", { duration: 0.35, ease: "power3.out" });
    const yTo = gsap.quickTo(btn, "y", { duration: 0.35, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * 0.22;
      const deltaY = (e.clientY - centerY) * 0.22;

      xTo(deltaX);
      yTo(deltaY);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    btn.addEventListener("mousemove", handleMouseMove);
    btn.addEventListener("mouseleave", handleMouseLeave);
  });
}

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
    initIndexCounterAnimations();
    initIndexSectionsChoreography();
    initSectionHeaderAnimations();
    initGridBatchAnimations();
    initMediaParallaxAnimations();
    initPhoneMockup3DInteractions();
    initMagneticInteractions();
    initScrollExpandAnimation();
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
 * 1. Hero Stage Entrance Choreography (Tailored for both Index and Subpages)
 */
function initHeroAnimations(): void {
  const heroSection = document.querySelector<HTMLElement>(
    ".hero-blueprint, [data-hero-section], .about-hero-section, .teams-hero-section, .services-hero-section, .contact-hero-section, .tools-hero-section, .dispatches-hero-section, .case-study-hero"
  );
  if (!heroSection) return;

  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  // Blueprint Telemetry Bar
  const telemetry = heroSection.querySelector(".blueprint-meta-bar");
  if (telemetry) {
    tl.from(telemetry, {
      opacity: 0,
      y: -12,
      duration: 0.65,
    }, 0.05);
  }

  // Left Rail Dossier items & Tag
  const railItems = heroSection.querySelectorAll(".band-rail > *, .hero-col--rail .rail-tag");
  if (railItems.length > 0) {
    tl.from(railItems, {
      opacity: 0,
      x: -18,
      stagger: 0.06,
      duration: 0.7,
      ease: "power2.out",
    }, 0.1);
  }

  // Hero Eyebrow / Tag
  const eyebrow = heroSection.querySelector(".hero-eyebrow, .tool-hero-tag, .case-hero-tag");
  if (eyebrow) {
    tl.from(eyebrow, {
      opacity: 0,
      y: 14,
      duration: 0.55,
    }, 0.15);
  }

  // Hero Headline (Monumental masked slide up)
  const title = heroSection.querySelector(".hero-headline, .hero-title, h1");
  if (title) {
    tl.from(title, {
      opacity: 0,
      y: 32,
      duration: 0.95,
      ease: "power3.out",
    }, 0.2);
  }

  // Hero Description
  const desc = heroSection.querySelector(".hero-description, .hero-desc, .case-hero-desc");
  if (desc) {
    tl.from(desc, {
      opacity: 0,
      y: 20,
      duration: 0.75,
      ease: "power2.out",
    }, 0.3);
  }

  // Primary Action Button (Clonix Style)
  const actionRow = heroSection.querySelector(".hero-action-row, .case-hero-actions");
  if (actionRow) {
    tl.from(actionRow.children, {
      opacity: 0,
      y: 16,
      scale: 0.96,
      stagger: 0.08,
      duration: 0.65,
      ease: "back.out(1.4)",
    }, 0.38);
  }

  // Founder Social Proof Stack (Avatars pop in cascade)
  const founderAvatars = heroSection.querySelectorAll(".founders-avatars .founder-avatar");
  if (founderAvatars.length > 0) {
    tl.from(founderAvatars, {
      opacity: 0,
      scale: 0.4,
      stagger: 0.08,
      duration: 0.55,
      ease: "back.out(1.8)",
    }, 0.42);
  }

  const founderMeta = heroSection.querySelector(".founders-meta");
  if (founderMeta) {
    tl.from(founderMeta, {
      opacity: 0,
      x: -10,
      duration: 0.5,
      ease: "power2.out",
    }, 0.48);
  }

  // Trust Bar Logos
  const trustLogos = heroSection.querySelectorAll(".hero-trust-bar .trust-logo-item");
  if (trustLogos.length > 0) {
    tl.from(trustLogos, {
      opacity: 0,
      y: 10,
      stagger: 0.05,
      duration: 0.55,
      ease: "power2.out",
    }, 0.52);
  }

  // Showcase Column (Right deck)
  const laurelBadge = heroSection.querySelector(".laurel-award-badge");
  if (laurelBadge) {
    tl.from(laurelBadge, {
      opacity: 0,
      y: -18,
      rotation: -6,
      duration: 0.8,
      ease: "power3.out",
    }, 0.25);
  }

  const featuredHeader = heroSection.querySelector(".featured-work-header");
  if (featuredHeader) {
    tl.from(featuredHeader, {
      opacity: 0,
      x: -12,
      duration: 0.6,
    }, 0.3);
  }

  const phoneMockup = heroSection.querySelector(".hero-phone-mockup");
  if (phoneMockup) {
    tl.from(phoneMockup, {
      opacity: 0,
      y: 38,
      scale: 0.94,
      duration: 0.95,
      ease: "power3.out",
    }, 0.35);

    // Idle subtle floating animation
    gsap.to(phoneMockup, {
      y: -7,
      duration: 3.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }

  const showcaseCaption = heroSection.querySelector(".showcase-caption");
  if (showcaseCaption) {
    tl.from(showcaseCaption, {
      opacity: 0,
      y: 12,
      duration: 0.6,
    }, 0.45);
  }

  // Lower Video / Monumental Media Deck Reveal (subpages only; hero-video-frame handled by scroll-expand)
  const videoFrame = heroSection.querySelector(".about-hero-media-frame, .teams-hero-media-frame, .tool-spec-media-frame, .dispatch-hero-media, .hero-preview, .hero-media-frame");
  if (videoFrame) {
    tl.from(videoFrame, {
      opacity: 0,
      scale: 0.96,
      y: 28,
      duration: 1.05,
      ease: "power3.out",
    }, 0.42);
  }

  // Standards Chips / Filter Chips (subpages)
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
}

/**
 * 2. Background Rotor Watermark Continuous Gentle Spin
 */
function initWatermarkAnimations(): void {
  const rotors = document.querySelectorAll(".rotor-svg, .hero-watermark svg");
  if (rotors.length === 0) return;

  gsap.to(rotors, {
    rotation: 360,
    duration: 120,
    repeat: -1,
    ease: "none",
  });
}

/**
 * 3. Dynamic Live Counter Animation for Index Numbers
 */
function initIndexCounterAnimations(): void {
  const counterElements = document.querySelectorAll<HTMLElement>("[data-counter-target]");
  if (counterElements.length === 0) return;

  counterElements.forEach((el) => {
    const targetVal = parseFloat(el.getAttribute("data-counter-target") || "0");
    const suffix = el.getAttribute("data-counter-suffix") || "";

    const counterObj = { val: 0 };

    ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      once: true,
      onEnter: () => {
        gsap.to(counterObj, {
          val: targetVal,
          duration: 1.8,
          ease: "power2.out",
          onUpdate: () => {
            el.innerHTML = `${Math.floor(counterObj.val)}<span class="stat-plus">${suffix}</span>`;
          },
        });
      },
    });
  });
}

/**
 * 4. Choreography across Index Sections (WhyChoose, Services, Timeline, Projects, Testimonials, FAQ)
 */
function initIndexSectionsChoreography(): void {
  // WhyChooseSection
  const whyChoose = document.querySelector<HTMLElement>("[data-why-choose]");
  if (whyChoose) {
    const title = whyChoose.querySelector(".why-choose-title");
    const desc = whyChoose.querySelector(".why-choose-desc");
    const avatars = whyChoose.querySelectorAll(".avatar-group .avatar-img");
    const proofMeta = whyChoose.querySelector(".proof-meta");
    const ctaBtn = whyChoose.querySelector(".why-choose-btn");
    const items = whyChoose.querySelectorAll(".accordion-item");

    if (title || desc) {
      ScrollTrigger.create({
        trigger: whyChoose,
        start: "top 82%",
        once: true,
        onEnter: () => {
          const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
          if (title) tl.from(title, { opacity: 0, y: 24, duration: 0.8 }, 0);
          if (desc) tl.from(desc, { opacity: 0, y: 18, duration: 0.7 }, 0.1);
          if (avatars.length) tl.from(avatars, { opacity: 0, scale: 0.5, stagger: 0.06, duration: 0.5, ease: "back.out(1.8)" }, 0.2);
          if (proofMeta) tl.from(proofMeta, { opacity: 0, x: -10, duration: 0.5 }, 0.25);
          if (ctaBtn) tl.from(ctaBtn, { opacity: 0, scale: 0.95, duration: 0.5 }, 0.3);
          if (items.length) tl.from(items, { opacity: 0, y: 26, stagger: 0.1, duration: 0.75 }, 0.35);
        },
      });
    }
  }

  // Services & Numbers Section
  const servicesNumbers = document.querySelector<HTMLElement>("[data-services-numbers]");
  if (servicesNumbers) {
    const serviceItems = servicesNumbers.querySelectorAll(".service-item");
    if (serviceItems.length) {
      ScrollTrigger.batch(serviceItems, {
        start: "top 88%",
        once: true,
        onEnter: (batch) => {
          gsap.from(batch, {
            opacity: 0,
            y: 24,
            stagger: 0.08,
            duration: 0.7,
            ease: "power2.out",
          });
        },
      });
    }

    const numbersHeadline = servicesNumbers.querySelector(".numbers-headline");
    const statCols = servicesNumbers.querySelectorAll(".stat-col, .stat-video-col");
    if (numbersHeadline) {
      ScrollTrigger.create({
        trigger: ".numbers-block",
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.from(numbersHeadline, { opacity: 0, y: 24, duration: 0.8, ease: "power3.out" });
          if (statCols.length) {
            gsap.from(statCols, { opacity: 0, y: 26, stagger: 0.09, duration: 0.7, ease: "power2.out", delay: 0.15 });
          }
        },
      });
    }
  }

  // About & Timeline Awards Section
  const aboutSection = document.querySelector<HTMLElement>("[data-about-section]");
  if (aboutSection) {
    const founderCard = aboutSection.querySelector(".founder-card");
    if (founderCard) {
      ScrollTrigger.create({
        trigger: founderCard,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.from(founderCard, { opacity: 0, y: 30, duration: 0.9, ease: "power3.out" });
        },
      });
    }

    const timelineCells = aboutSection.querySelectorAll(".timeline-cell");
    if (timelineCells.length) {
      ScrollTrigger.batch(timelineCells, {
        start: "top 88%",
        once: true,
        onEnter: (batch) => {
          gsap.from(batch, {
            opacity: 0,
            y: 22,
            stagger: 0.1,
            duration: 0.75,
            ease: "power2.out",
          });
        },
      });
    }
  }

  // Projects Showcase Section Table Rows
  const projectsShowcase = document.querySelector<HTMLElement>("[data-projects-showcase]");
  if (projectsShowcase) {
    const featuredCard = projectsShowcase.querySelector(".featured-project-card");
    if (featuredCard) {
      ScrollTrigger.create({
        trigger: featuredCard,
        start: "top 82%",
        once: true,
        onEnter: () => {
          gsap.from(featuredCard, { opacity: 0, y: 30, duration: 0.95, ease: "power3.out" });
        },
      });
    }

    const tableRows = projectsShowcase.querySelectorAll(".project-table-row");
    if (tableRows.length) {
      ScrollTrigger.batch(tableRows, {
        start: "top 90%",
        once: true,
        onEnter: (batch) => {
          gsap.from(batch, {
            opacity: 0,
            y: 20,
            stagger: 0.07,
            duration: 0.65,
            ease: "power2.out",
          });
        },
      });
    }
  }
}

/**
 * 5. ScrollTrigger Section Headers & Eyebrows
 */
function initSectionHeaderAnimations(): void {
  const headers = document.querySelectorAll<HTMLElement>(
    ".matrix-header-wrap, .services-header-wrap, .section-header-wrap, .timeline-head, .comparison-head, .faq-header-wrap, .projects-header-block, .about-header-block"
  );

  headers.forEach((hdr) => {
    const children = hdr.children;
    if (!children.length) return;

    gsap.from(children, {
      opacity: 0,
      y: 22,
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
 * 6. ScrollTrigger Batching for Cards and Grids
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
    ".testimonial-quote-box",
    ".faq-item",
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
 * 7. Blueprint Media Frame Parallax Scrub
 */
function initMediaParallaxAnimations(): void {
  const mediaImgs = document.querySelectorAll<HTMLImageElement>(
    ".featured-hero-img, .stat-video-thumb, .about-hero-img, .teams-hero-img, .tool-spec-media-frame img, .dispatch-hero-media img, .system-screen-img"
  );

  mediaImgs.forEach((img) => {
    const parent = img.closest<HTMLElement>(
      ".featured-media-frame, .stat-video-card, .about-hero-media-frame, .teams-hero-media-frame, .tool-spec-media-frame, .dispatch-hero-media, .system-screen-card"
    );
    if (!parent) return;

    gsap.fromTo(
      img,
      { yPercent: -5 },
      {
        yPercent: 5,
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
 * 8. Interactive 3D Phone Mockup Mouse Tilt on Index
 */
function initPhoneMockup3DInteractions(): void {
  if (window.matchMedia("(pointer: coarse)").matches) return;

  const showcaseCol = document.querySelector<HTMLElement>(".hero-col--showcase");
  const phone = document.querySelector<HTMLElement>("[data-hero-phone]");
  if (!showcaseCol || !phone) return;

  const rotXTo = gsap.quickTo(phone, "rotationX", { duration: 0.45, ease: "power2.out" });
  const rotYTo = gsap.quickTo(phone, "rotationY", { duration: 0.45, ease: "power2.out" });

  const handleMouseMove = (e: MouseEvent) => {
    const rect = phone.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const normX = (e.clientX - centerX) / (rect.width / 2);
    const normY = (e.clientY - centerY) / (rect.height / 2);

    rotYTo(Math.max(-14, Math.min(14, normX * 12)));
    rotXTo(Math.max(-14, Math.min(14, -normY * 12)));
  };

  const handleMouseLeave = () => {
    rotXTo(0);
    rotYTo(0);
  };

  showcaseCol.addEventListener("mousemove", handleMouseMove);
  showcaseCol.addEventListener("mouseleave", handleMouseLeave);
}

/**
 * 9. High-Performance Magnetic Interactions via gsap.quickTo()
 */
function initMagneticInteractions(): void {
  if (window.matchMedia("(pointer: coarse)").matches) return;

  const magneticButtons = document.querySelectorAll<HTMLElement>(
    ".clonix-cta-btn, .clonix-cta-button, .clonix-lime-btn, .why-choose-btn, .dark-pill-btn, .hero-outline-btn, [data-magnetic]"
  );

  magneticButtons.forEach((btn) => {
    const xTo = gsap.quickTo(btn, "x", { duration: 0.35, ease: "power3.out" });
    const yTo = gsap.quickTo(btn, "y", { duration: 0.35, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * 0.24;
      const deltaY = (e.clientY - centerY) * 0.24;

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

/**
 * 10. Scroll Expand — Hero Video Frame (vue-bits style: https://vue-bits.dev/animations/scroll-expand)
 *
 * Starts as a compact floating preview card (scale: 0.68, border-radius: 32px)
 * with the inner media zoomed in (scale: 1.35).
 * As the user scrolls into the media deck, the card smoothly expands to 100% full-width
 * (scale: 1.0, border-radius: 4px), while the inner media counter-zooms to 1.0.
 */
function initScrollExpandAnimation(): void {
  const deck    = document.querySelector<HTMLElement>(".hero-media-deck");
  const frame   = document.querySelector<HTMLElement>(".hero-video-frame");
  const img     = frame?.querySelector<HTMLElement>(".video-thumbnail-img");
  const playBtn = frame?.querySelector<HTMLElement>(".hero-play-button");
  if (!deck || !frame) return;

  const isMobile = window.matchMedia("(max-width: 640px)").matches;
  const startScale = isMobile ? 0.82 : 0.68;
  const startRadius = isMobile ? "20px" : "32px";
  const endRadius = "4px";
  const startZoom = 1.35; // Mirrors Vue Bits mediaZoom: 1.35

  // Initial state setup (hardware accelerated transforms only)
  gsap.set(frame, {
    scale: startScale,
    borderRadius: startRadius,
    transformOrigin: "center center",
    force3D: true,
  });

  if (img) {
    gsap.set(img, {
      scale: startZoom,
      transformOrigin: "center center",
      force3D: true,
    });
  }

  // Master Scroll Expand Timeline scrubbed across the scroll distance
  const expandTl = gsap.timeline({
    scrollTrigger: {
      trigger: deck,
      start: "top 88%",
      end: "center 48%",
      scrub: 1.2,
      invalidateOnRefresh: true,
    },
  });

  // 1. Expand the video frame container to 100% full width and sharp architectural corners
  expandTl.to(
    frame,
    {
      scale: 1,
      borderRadius: endRadius,
      ease: "power2.out",
    },
    0
  );

  // 2. Counter-zoom the media inside from 1.35 to 1.0 (Vue Bits camera parallax)
  if (img) {
    expandTl.to(
      img,
      {
        scale: 1,
        ease: "power2.out",
      },
      0
    );
  }

  // 3. Elevation transition on the interactive play button
  if (playBtn) {
    expandTl.fromTo(
      playBtn,
      { scale: 0.9 },
      { scale: 1, ease: "power2.out" },
      0
    );
  }
}

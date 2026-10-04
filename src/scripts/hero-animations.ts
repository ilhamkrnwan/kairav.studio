import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let cleanupFn: (() => void) | null = null;

export const initHeroAnimations = () => {
  // 1. Clean up any existing instances
  if (cleanupFn) {
    cleanupFn();
    cleanupFn = null;
  }

  const section = document.querySelector("[data-hero-section]");
  if (!section) return;

  // Check accessibility setting
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  // Use gsap.context for scoped tracking and leak-free cleanups
  const ctx = gsap.context(() => {
    // --- A. Entrance Timeline ---
    const tl = gsap.timeline();

    // Background atmosphere fade
    tl.from(
      ".hero-bg-atmosphere",
      {
        opacity: 0,
        duration: 2,
        ease: "power2.out",
      },
      0
    );

    tl.from(
      ".hero-bg-dotgrid",
      {
        opacity: 0,
        scale: 1.05,
        duration: 2.2,
        ease: "power2.out",
      },
      0.2
    );

    // Coordinate labels
    tl.from(
      ".hero-coord",
      {
        opacity: 0,
        y: 8,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
      },
      0.8
    );

    // Eyebrow label
    tl.from(
      ".hero-label",
      {
        y: 15,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
      },
      0.3
    );

    // Title word stagger — cinematic reveal
    tl.from(
      ".hero-word",
      {
        y: "110%",
        rotate: 2.5,
        skewY: 3,
        opacity: 0,
        duration: 1,
        stagger: 0.04,
        ease: "power4.out",
      },
      0.25
    );

    // Subtitle
    tl.from(
      ".hero-subtitle",
      {
        y: 18,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
      },
      0.6
    );

    // CTA
    tl.from(
      ".hero-actions",
      {
        y: 18,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
      },
      0.7
    );

    // Trust strip items
    tl.from(
      ".hero-trust__item, .hero-trust__dot",
      {
        opacity: 0,
        y: 8,
        stagger: 0.04,
        duration: 0.5,
        ease: "power2.out",
      },
      0.85
    );

    // Board panel — editorial slide in
    tl.from(
      ".hero-board",
      {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      },
      0.5
    );

    // Floating badges
    tl.from(
      ".hero-float",
      {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: "power2.out",
      },
      0.9
    );

    // --- B. ScrollTrigger Parallax ---
    gsap.to(".hero-content", {
      yPercent: -12,
      opacity: 0.15,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(".hero-visual-wrapper", {
      yPercent: -6,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Floating elements parallax
    const floatingElements = section.querySelectorAll<HTMLElement>(".hero-float");
    floatingElements.forEach((el) => {
      const speed = parseFloat(el.getAttribute("data-speed") || "1");
      const isMobile = window.innerWidth < 1024;
      const targetOffset = -22 * speed * (isMobile ? 0.3 : 1);

      gsap.to(el, {
        yPercent: targetOffset,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }, section);

  cleanupFn = () => {
    ctx.revert();
  };
};

if (typeof document !== "undefined") {
  document.addEventListener("astro:page-load", initHeroAnimations);
}

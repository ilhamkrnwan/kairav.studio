# Kairav Studio Theme Guide

This document defines the visual direction, design system, UI principles, motion style, and content structure for the official **Kairav Studio** website.

Kairav Studio is positioned as a **design-led technology studio** focused on building modern brand websites, high-performance web experiences, SEO/GEO-ready content architecture, and scalable custom digital systems.

## Theme Direction

The main theme direction for Kairav Studio is:

> **Premium Editorial Tech with Glass-lite Motion**

This theme combines a strong editorial layout, premium dark interface, sharp typography, subtle glass effects, soft gradient glow, clean grid systems, and smooth motion design.

The website should feel:

* Premium
* Modern
* Technical
* Elegant
* Fast
* Confident
* Design-driven
* Engineering-focused
* SEO/GEO-aware

The website should not feel:

* Too generic
* Too playful
* Too cyberpunk
* Too SaaS-template
* Too corporate
* Too crowded
* Too animation-heavy
* Too abstract without clear business message

## Brand Personality

Kairav Studio should communicate:

* Strong visual taste
* Serious technical capability
* Clean user experience
* Performance-first mindset
* SEO and GEO awareness
* Ability to build beyond websites
* Calm confidence, not loud self-promotion

Recommended brand tone:

> Clear, sharp, premium, helpful, and technically grounded.

Avoid excessive buzzwords. The website should explain what Kairav Studio does in a way that is easy to understand for business owners, founders, brands, and technical clients.

## Core Visual Concept

Kairav Studio should visually represent the bridge between:

```txt id="j33d4h"
Brand identity
+ UI/UX design
+ Web performance
+ SEO/GEO architecture
+ Custom digital systems
+ AI, Android, IoT integration
```

The main visual language should be built around:

* Dark editorial background
* Large typography
* Clean layout spacing
* Bento-style sections
* Thin borders
* Soft glow
* Subtle grid pattern
* Minimal glass cards
* Interactive micro animations
* Case study previews
* Technical system accents

## Color System

### Primary Theme

Use a dark premium base with ivory text and a controlled modern accent.

```css id="8lo4kl"
:root {
  --color-background: #080808;
  --color-background-soft: #0d0d0f;
  --color-surface: #111113;
  --color-surface-soft: #17171a;
  --color-surface-glass: rgba(255, 255, 255, 0.06);

  --color-border: rgba(255, 255, 255, 0.10);
  --color-border-strong: rgba(255, 255, 255, 0.18);

  --color-text: #f5f1e8;
  --color-text-soft: #d6d1c7;
  --color-text-muted: #9ca3af;
  --color-text-subtle: #71717a;

  --color-primary: #b6ff5c;
  --color-primary-soft: rgba(182, 255, 92, 0.16);

  --color-secondary: #8b5cf6;
  --color-secondary-soft: rgba(139, 92, 246, 0.16);

  --color-accent: #38bdf8;
  --color-accent-soft: rgba(56, 189, 248, 0.14);

  --color-danger: #fb7185;
  --color-warning: #fbbf24;
  --color-success: #86efac;
}
```

### Color Meaning

| Token                   | Usage                               |
| ----------------------- | ----------------------------------- |
| `--color-background`    | Main page background                |
| `--color-surface`       | Cards, panels, navbar               |
| `--color-surface-glass` | Glass-lite UI elements              |
| `--color-text`          | Main heading and important copy     |
| `--color-text-muted`    | Body and supporting text            |
| `--color-primary`       | Main CTA, highlights, active states |
| `--color-secondary`     | Premium tech accent                 |
| `--color-accent`        | Technical/interactive accent        |
| `--color-border`        | Subtle dividers and cards           |

### Usage Rules

Use the primary accent carefully. The lime accent should not dominate the entire page. It should appear mainly on:

* Primary CTA
* Small labels
* Active link state
* Important metrics
* Hover states
* Visual highlights
* Selected cards

The secondary violet accent can be used for:

* Glow effects
* Background gradients
* Technical cards
* AI integration section
* System capability section

The blue accent can be used for:

* Links
* Small technical indicators
* Code-like elements
* Data/system visualization

## Typography

Typography is one of the strongest visual elements of the Kairav Studio website.

### Recommended Font Pairing

```txt id="ib6gh3"
Display / Heading:
- Space Grotesk
- Sora
- General Sans
- Clash Display

Body:
- Inter
- Geist
- DM Sans

Mono:
- JetBrains Mono
- Geist Mono
```

### Preferred Combination

```txt id="dgoa89"
Heading: Space Grotesk
Body: Inter
Mono: JetBrains Mono
```

### Type Scale

```css id="ya47gi"
:root {
  --font-heading: "Space Grotesk", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;

  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;
  --text-5xl: 3rem;
  --text-6xl: 3.75rem;
  --text-7xl: 4.5rem;
}
```

### Typography Rules

Headings should be:

* Large
* Confident
* Short
* Clear
* Slightly editorial

Body text should be:

* Easy to read
* Not too long
* Structured in short paragraphs
* Helpful for SEO and GEO

Avoid vague headings such as:

```txt id="zx5e8q"
We create digital experiences
Innovation for the future
Your trusted technology partner
```

Prefer specific headings such as:

```txt id="p1efky"
Websites that look sharp, load fast, and stay discoverable.

Brand websites built for speed, clarity, SEO, and AI search.

From high-performance websites to custom digital systems.
```

## Layout System

### Container

Use a centered layout with generous spacing.

```css id="jppk2b"
.container {
  width: min(100% - 2rem, 1200px);
  margin-inline: auto;
}

.container-wide {
  width: min(100% - 2rem, 1440px);
  margin-inline: auto;
}

.container-narrow {
  width: min(100% - 2rem, 860px);
  margin-inline: auto;
}
```

### Spacing

```css id="sm2c5e"
:root {
  --space-section-sm: 4rem;
  --space-section-md: 6rem;
  --space-section-lg: 8rem;
  --space-section-xl: 10rem;

  --space-card: 1.5rem;
  --space-card-lg: 2rem;
}
```

### Section Rules

Each section should have a clear purpose.

Recommended page flow:

```txt id="emkfkb"
Hero
Value statement
Services
SEO/GEO approach
Performance approach
Selected works
System capabilities
Process
Tech stack
FAQ
CTA
Footer
```

Avoid placing too many ideas in one section. Each section should answer one main question.

## Grid System

Use bento and editorial grid layouts.

### Bento Grid

Use for:

* Services
* Capabilities
* Performance benefits
* SEO/GEO features
* Tech stack
* Process summary

Recommended pattern:

```txt id="rns0uq"
[ Large card     ][ Small card ]
[ Large card     ][ Small card ]
[ Medium card ][ Medium card ]
```

### Editorial Split Layout

Use for:

* Hero
* Service detail section
* About section
* SEO/GEO explanation
* Case study detail

Recommended pattern:

```txt id="a4zauo"
Left:
- Label
- Heading
- Description
- CTA

Right:
- Visual card
- UI preview
- Metrics
- Code/system preview
```

## Component Style

### Cards

Cards should feel premium, not heavy.

```css id="7wjpe6"
.card {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.075),
    rgba(255, 255, 255, 0.035)
  );
  border: 1px solid rgba(255, 255, 255, 0.10);
  border-radius: 1.5rem;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.28);
  backdrop-filter: blur(18px);
}
```

Card usage rules:

* Use subtle borders.
* Avoid thick shadows.
* Avoid too much blur.
* Do not overuse glass effect.
* Keep content readable.
* Use hover effects lightly.

### Buttons

Primary button:

```css id="51xzxk"
.button-primary {
  background: #b6ff5c;
  color: #080808;
  border-radius: 999px;
  font-weight: 700;
  padding: 0.875rem 1.25rem;
}
```

Secondary button:

```css id="r9we6j"
.button-secondary {
  background: rgba(255, 255, 255, 0.06);
  color: #f5f1e8;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  padding: 0.875rem 1.25rem;
}
```

Button rules:

* Use pill shape for main CTA.
* Avoid too many button styles.
* Use one primary CTA per section.
* Keep text short.

Recommended CTA labels:

```txt id="ppqk5r"
Start a project
View works
Explore services
Discuss your website
Improve my website
```

### Navbar

Navbar should be minimal and sticky.

Style:

* Transparent or glass-lite
* Thin border bottom
* Small logo
* Clear menu
* One CTA button

Recommended navigation:

```txt id="k3wtx6"
Work
Services
Insights
About
Contact
```

### Footer

Footer should be clean and useful.

Include:

* Short brand description
* Services
* Contact
* Social links
* Legal links
* Copyright

## Visual Elements

### Background

Use dark background with subtle layers:

* Radial gradient
* Soft noise
* Thin grid
* Glow behind hero visual
* Minimal moving gradient

Example background concept:

```css id="06qgta"
.hero-background {
  background:
    radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.24), transparent 32%),
    radial-gradient(circle at 80% 10%, rgba(182, 255, 92, 0.16), transparent 28%),
    radial-gradient(circle at 50% 90%, rgba(56, 189, 248, 0.12), transparent 30%),
    #080808;
}
```

### Grid Pattern

Use subtle technical grid, not too visible.

```css id="axc2lf"
.grid-pattern {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 48px 48px;
}
```

### Noise Texture

Use very subtle noise to make the interface feel less flat.

```css id="zbakx1"
.noise {
  opacity: 0.035;
  pointer-events: none;
  mix-blend-mode: soft-light;
}
```

## Motion Design

Motion should support the message, not distract from it.

### Motion Personality

Motion should feel:

* Smooth
* Controlled
* Premium
* Light
* Responsive
* Purposeful

Avoid:

* Scroll hijacking
* Overly long animations
* Too many parallax layers
* Excessive 3D effects
* Animations that delay content reading
* Animations on every small element

### Recommended Animations

Use GSAP for:

* Hero text reveal
* Section reveal
* Card stagger animation
* Subtle parallax
* Marquee interaction
* Hover magnetic button
* Case study preview
* Smooth page intro

### Animation Timing

```txt id="zyg53u"
Fast micro interaction: 150ms - 250ms
Standard UI transition: 250ms - 400ms
Section reveal: 500ms - 800ms
Hero entrance: 800ms - 1200ms
```

### Easing

Recommended easing:

```txt id="cbt064"
power2.out
power3.out
expo.out
circ.out
```

### Motion Rules

Animate mostly:

```txt id="8y4ova"
opacity
transform
scale
translate
clip-path carefully
```

Avoid animating:

```txt id="3z8vn9"
width
height
top
left
margin
padding
```

Always respect reduced motion:

```css id="qiffnq"
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
    scroll-behavior: auto !important;
  }
}
```

## Astro Implementation Direction

Astro is the preferred framework for the Kairav Studio marketing website because the main focus is:

* Fast static pages
* SEO-friendly HTML
* GEO-readable content
* Image optimization
* Selective JavaScript
* Content-driven structure

Use Astro for:

```txt id="f3pcec"
Landing pages
Service pages
Blog/insights
Case studies
Portfolio
Company profile
SEO/GEO content hub
```

Use client-side JavaScript only when necessary.

Recommended Astro stack:

```txt id="ypr8xc"
Astro
Bun
Tailwind CSS
GSAP
astro:assets
@astrojs/sitemap
MDX or content collections
```

## Image Direction

Images should be optimized and intentional.

Use images for:

* Case study preview
* Website mockup
* Interface showcase
* Brand visuals
* Abstract technical visuals
* Before/after website improvement

Image rules:

* Use AVIF or WebP when possible.
* Always define width and height.
* Use lazy loading for below-the-fold images.
* Compress large assets.
* Avoid huge background videos.
* Avoid unnecessary stock photos.
* Prefer custom UI mockups over generic illustrations.

## SEO Theme Rules

The design should support SEO from the start.

Every page should have:

* Unique title
* Meta description
* Canonical URL
* Open Graph title
* Open Graph description
* Open Graph image
* Proper heading hierarchy
* Internal links
* Sitemap inclusion
* Structured content sections

Recommended heading structure:

```txt id="qpspi1"
H1: One clear page topic
H2: Main sections
H3: Supporting points
```

Avoid multiple H1 tags on a page.

## GEO Theme Rules

GEO means the website should be easy for AI search engines and AI assistants to understand, summarize, and cite.

The design should support:

* Clear service definitions
* Entity-based content
* FAQ sections
* Short explanatory blocks
* Structured comparison sections
* Case studies with problem-solution-result format
* Explicit mention of target audience
* Clear brand positioning
* Schema markup

Good GEO content pattern:

```txt id="zpk2jq"
What it is
Who it is for
What problem it solves
What is included
How the process works
What results can be expected
Frequently asked questions
```

Avoid overly abstract copy.

Bad:

```txt id="8w66p7"
We craft meaningful digital experiences for tomorrow.
```

Better:

```txt id="7dju6n"
Kairav Studio builds high-performance brand websites with UI/UX design, SEO structure, GEO-ready content, and scalable foundations for custom systems.
```

## Page Design Direction

### Homepage

Goal:

Introduce Kairav Studio as a premium web experience and technology studio.

Main sections:

```txt id="zbetgn"
Hero
Value statement
Services
Performance
SEO/GEO
Selected works
Custom system capability
Process
FAQ
CTA
```

Hero message example:

```txt id="4sfs58"
Websites that look sharp, load fast, and stay discoverable.
```

Hero subtext example:

```txt id="62rdd8"
Kairav Studio builds modern brand websites, SEO/GEO-ready content architecture, and scalable digital systems for businesses that care about design, performance, and clarity.
```

### Services Page

Goal:

Explain what Kairav Studio can build.

Service categories:

```txt id="78k0oz"
Brand Website
SEO & GEO Architecture
Performance Optimization
Custom Information System
AI Integration
Android & IoT Integration
```

Each service section should include:

```txt id="8lgyv8"
What it is
Who it is for
Deliverables
Tech direction
Expected outcome
CTA
```

### Works Page

Goal:

Show proof of capability.

Each work item should show:

```txt id="efcb6s"
Project name
Client or brand
Industry
Problem
Solution
Tech stack
Result
Preview image
```

### Case Study Page

Goal:

Show deeper problem-solving ability.

Recommended structure:

```txt id="8xc5xj"
Overview
Client context
Problem
Objective
Design approach
Technical approach
SEO/performance approach
Result
Screenshots
What can be improved next
```

### Insights Page

Goal:

Build topical authority for SEO/GEO.

Recommended topics:

```txt id="egz5yc"
Website performance
SEO
GEO
UI/UX
Astro
Nuxt
Next.js
Business website strategy
AI integration
Custom systems
```

### Contact Page

Goal:

Convert visitors into leads.

Include:

```txt id="0x0474"
Short intro
Project type selector
Contact form
WhatsApp or email CTA
Expected response message
FAQ
```

## Content Tone

Use simple and clear copy.

Preferred writing style:

* Direct
* Useful
* Specific
* Professional
* Not too formal
* Not too casual
* Not too buzzword-heavy

Example tone:

```txt id="hphnmf"
Your website should do more than look good. It should load fast, explain your business clearly, help people trust your brand, and stay readable for both search engines and AI-powered discovery.
```

## UI Pattern References

The website should feel close to:

```txt id="v259rl"
Premium technology studio
Editorial portfolio
Modern SaaS landing page
High-end creative developer website
Clean digital product studio
```

But it should avoid becoming:

```txt id="c5wlpj"
Generic agency template
Overdecorated cyberpunk website
Heavy 3D portfolio
Corporate IT vendor website
Overly playful startup website
```

## Accessibility Rules

The website should remain usable and readable.

Rules:

* Maintain good color contrast.
* Do not rely on color alone.
* Keep text readable on glass backgrounds.
* Use visible focus states.
* Use semantic HTML.
* Use accessible buttons and links.
* Respect reduced motion.
* Avoid tiny body text.
* Keep line length comfortable.

Recommended body line length:

```txt id="4m4sac"
60 - 80 characters per line
```

## Performance Rules

The visual theme must not harm performance.

Rules:

* Avoid heavy animation libraries beyond what is needed.
* Do not ship global JavaScript for every section.
* Use Astro islands only when interaction is needed.
* Optimize images.
* Avoid huge videos.
* Use CSS effects before JavaScript where possible.
* Lazy load below-the-fold media.
* Keep third-party scripts minimal.

Performance target:

```txt id="2cr1p2"
Lighthouse Performance: 90+
Accessibility: 90+
Best Practices: 90+
SEO: 95+
```

## Design Tokens Summary

```css id="71pwca"
:root {
  --font-heading: "Space Grotesk", system-ui, sans-serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;

  --color-background: #080808;
  --color-background-soft: #0d0d0f;
  --color-surface: #111113;
  --color-surface-soft: #17171a;
  --color-surface-glass: rgba(255, 255, 255, 0.06);

  --color-border: rgba(255, 255, 255, 0.10);
  --color-border-strong: rgba(255, 255, 255, 0.18);

  --color-text: #f5f1e8;
  --color-text-soft: #d6d1c7;
  --color-text-muted: #9ca3af;
  --color-text-subtle: #71717a;

  --color-primary: #b6ff5c;
  --color-primary-soft: rgba(182, 255, 92, 0.16);

  --color-secondary: #8b5cf6;
  --color-secondary-soft: rgba(139, 92, 246, 0.16);

  --color-accent: #38bdf8;
  --color-accent-soft: rgba(56, 189, 248, 0.14);

  --radius-sm: 0.75rem;
  --radius-md: 1rem;
  --radius-lg: 1.5rem;
  --radius-xl: 2rem;
  --radius-full: 999px;

  --shadow-soft: 0 24px 80px rgba(0, 0, 0, 0.28);
  --shadow-glow-primary: 0 0 80px rgba(182, 255, 92, 0.16);
  --shadow-glow-secondary: 0 0 80px rgba(139, 92, 246, 0.18);
}
```

## Final Theme Statement

Kairav Studio should look like a small but sharp technology studio with strong design taste and serious engineering ability.

The visual identity should make visitors feel that Kairav Studio can build websites that are:

* Beautiful
* Fast
* Structured
* Search-ready
* AI-search-ready
* Scalable
* Reliable
* Customizable

The final impression should be:

> Kairav Studio is not just a website vendor. It is a design-led technology studio that builds premium web experiences and scalable digital systems.

import type { Service } from "./types";
import { svgIcons } from "./icons";

export const androidIot: Service = {
  id: "android-iot",
  title: "Android, IoT & API Integration",
  summary: "Mobile apps, device dashboards, and the backend APIs that connect them.",
  detail: "Best for projects spanning mobile apps, IoT devices, and connected systems.",
  category: "Systems & Intelligence",
  whatItIs:
    "Advanced system development beyond the browser: Android applications, IoT dashboards, device and sensor monitoring, QR-based systems, and the backend APIs that tie them together.",
  whoItsFor:
    "Product builders and businesses with hardware, mobile, or connected-device needs that require custom software end to end.",
  problem:
    "Mobile, hardware, and web usually live in silos. Without a connected API layer, data gets stranded and devices cannot talk to the systems that need them.",
  deliverables: [
    "Android application development",
    "IoT dashboard and device monitoring",
    "Sensor data and QR-based systems",
    "Backend API and payment gateway integration",
  ],
  techDirection: ["React Native", "Flutter", "REST API", "MQTT / WebSocket"],
  process: [
    { title: "Define", detail: "We map devices, data flows, and how mobile and web should connect." },
    { title: "Architect", detail: "We design the API layer that links apps, devices, and dashboards." },
    { title: "Build", detail: "We develop the app, dashboard, and backend as one connected system." },
    { title: "Integrate", detail: "We connect hardware, payments, and third-party services, then test end to end." },
  ],
  outcome:
    "A connected product where mobile apps, devices, and dashboards share one reliable API layer and a single source of truth.",
  faq: [
    { q: "Do you build for iOS too?", a: "We focus on Android and cross-platform stacks like React Native and Flutter, which can target iOS from the same codebase." },
    { q: "Can you work with our hardware?", a: "Yes. We integrate sensor data and devices through standard protocols and build the dashboards to monitor them." },
    { q: "Who owns the backend?", a: "You do. We build and document the API layer so your team can operate and extend it." },
  ],
  tags: ["Android", "IoT", "API"],
  icon: svgIcons.cpu,
  accent: "#84cc16",
  image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=640&h=360&fit=crop&q=80",
};

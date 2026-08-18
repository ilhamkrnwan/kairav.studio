import type { Service } from "./types";
import { svgIcons } from "./icons";

export const aiIntegration: Service = {
  id: "ai-integration",
  title: "AI Integration",
  summary: "Practical AI in your product: assistants, smart search, and automated insight.",
  detail: "Best for teams wanting to add useful AI features without the hype.",
  category: "Systems & Intelligence",
  whatItIs:
    "Integrating AI into your digital workflow where it genuinely helps: assistants and chatbots, content generation, smart search, recommendations, and automated report summaries.",
  whoItsFor:
    "Product teams and businesses that want real AI features tied to their data — not a generic chatbot bolted onto the homepage.",
  problem:
    "AI features are easy to demo and hard to ship well. Without the right integration, prompts, and guardrails, they become unreliable and untrusted.",
  deliverables: [
    "AI assistant or chatbot integration",
    "Smart search and content generation",
    "Product recommendation and automated summaries",
    "API integration with modern AI models",
  ],
  techDirection: ["Claude API", "Prompt caching", "Vector search", "Serverless"],
  process: [
    { title: "Scope", detail: "We find where AI creates real value instead of novelty." },
    { title: "Prototype", detail: "We test prompts, data flow, and guardrails on a focused use case." },
    { title: "Integrate", detail: "We wire the feature into your product with reliable APIs." },
    { title: "Refine", detail: "We tune accuracy, cost, and latency based on real usage." },
  ],
  outcome:
    "AI features that are accurate, cost-aware, and actually used — integrated cleanly into your existing product and data.",
  faq: [
    { q: "Which AI models do you use?", a: "We default to the latest, most capable models — such as Claude — and choose the right tier for accuracy, cost, and latency." },
    { q: "Is our data safe?", a: "We design integrations with clear data boundaries and guardrails, and discuss privacy and retention before building." },
    { q: "How do you control AI cost?", a: "We use techniques like prompt caching and right-sized models, and tune the feature against real usage to keep cost predictable." },
  ],
  tags: ["AI", "Automation", "API"],
  icon: svgIcons.sparkles,
  accent: "#f97316",
  image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=640&h=360&fit=crop&q=80",
};

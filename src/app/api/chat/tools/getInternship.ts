import { tool } from 'ai';
import { z } from 'zod';

// Provides information about the types of positions and collaborations Rahman is interested in.
export const getInternship = tool({
  description:
    'This tool provides information about the types of positions and collaborations I am interested in, such as internships and full‑time roles.',
  parameters: z.object({}),
  async execute() {
    return "I'm open to research and industry positions in AI/ML as I complete my M.S. in 2025. My interests span generative AI, natural language processing, large language model engineering, multimodal systems and MLOps. I welcome opportunities ranging from internships and fellowships to full‑time roles and collaborative research projects. I'm particularly excited to work on state‑of‑the‑art LLMs, sensor‑driven AI for smart cities and robotics, and initiatives that emphasize ethical and socially responsible AI. I'm eager to collaborate with universities, startups and established companies across technology, healthcare and robotics sectors.";
  },
});
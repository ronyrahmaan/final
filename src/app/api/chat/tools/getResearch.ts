import { tool } from 'ai';
import { z } from 'zod';

// Provides a high‑level summary of Rahman's key research areas and projects.
export const getResearch = tool({
  description: 'This tool summarises my main research areas and projects.',
  parameters: z.object({}),
  async execute() {
    return `My research spans several complementary areas. In **generative AI and large language models**, I explore fine‑tuning transformer architectures (GPT‑4o, Gemma, Llama and beyond), prompt engineering, reinforcement learning from human feedback and diffusion‑based text generation. Through the **LiDAR Infrastructure Safety** project, I develop real‑time pipelines to process Velodyne point clouds for the Texas Department of Transportation, aiming to transform traffic safety by enabling proactive road‑condition monitoring — work that takes inspiration from autonomous‑vehicle leaders like Waymo. **PolyHope** leverages multilingual NLP models to detect hope speech and sarcasm in Bengali, Hindi and English, while **AI vs Human Text Detection** builds classifiers that distinguish machine‑generated content from human writing. I also contribute to **MLOps and multimodal systems**, integrating vision, language and sensor data with robust deployment practices. Let me know which area interests you!`;
  },
});
import { tool } from 'ai';
import { z } from 'zod';

// Provides a concise personal introduction for Rahman.
export const getAboutMe = tool({
  description:
    'This tool returns a concise personal introduction of Md A Rahman. It is used to answer the question "Who are you?" or "Tell me about yourself".',
  parameters: z.object({}),
  async execute() {
    return {
      presentation:
        "I'm Md A Rahman, an AI researcher and engineer based in Lubbock, Texas. My work combines applied machine learning, natural language processing, generative AI and real‑time sensor analysis. I'm completing my M.S. in Computer Science at Texas Tech University, while spearheading research projects from LiDAR‑enabled infrastructure safety for the Texas Department of Transportation to multilingual text classification and fine‑tuning large language models. With a B.Sc. from Sichuan University and industry experience in software engineering, data analysis and big‑data systems, I enjoy translating research into scalable solutions. I'm particularly driven to transform road and traffic safety through AI, taking inspiration from the engineering innovations of companies like Waymo. I'm passionate about ethical AI, open science and interdisciplinary collaboration. How can I share more about my journey or projects?",
    };
  },
});
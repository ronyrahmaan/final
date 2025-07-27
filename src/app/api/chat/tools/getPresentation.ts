import { tool } from 'ai';
import { z } from 'zod';

// Provides a concise personal introduction for Md A Rahman. Use this when
// visitors ask "Who are you?" or "Tell me about yourself". The content
// highlights Rahman's academic background, research interests and
// professional focus.
export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Md A Rahman. It is used to answer the question "Who are you?" or "Tell me about yourself".',
  parameters: z.object({}),
  async execute() {
    return {
      presentation:
        "I'm Md A Rahman, an AI researcher and engineer based in Lubbock, Texas. My work blends applied machine learning, natural language processing and emerging generative AI techniques. I'm pursuing my M.S. at Texas Tech University while contributing to research projects that range from LiDAR‑enabled infrastructure safety for the Texas Department of Transportation to multilingual text classification and LLM fine‑tuning. With a B.Sc. in Computer Science from Sichuan University and industry experience spanning software engineering, data analysis and big‑data systems, I enjoy translating research into scalable solutions. I'm passionate about ethical AI, open research and interdisciplinary collaboration that addresses real‑world challenges. How can I share more about my journey or projects?",
    };
  },
});
import { tool } from 'ai';
import { z } from 'zod';

// Returns a summary of Md A Rahman's technical skills. Use this when the
// user asks about what technologies or tools Rahman is proficient in.
export const getSkills = tool({
  description: 'This tool shows a list of my skills.',
  parameters: z.object({}),
  async execute() {
    return "I have a broad and balanced skill set across AI research and engineering. I'm fluent in Python, C++ and Java, and build models with frameworks like PyTorch, TensorFlow and scikit‑learn. My experience spans large language models and generative AI via Hugging Face, LangChain and OpenAI APIs, as well as traditional NLP with NLTK and spaCy. On the data side, I'm comfortable with Pandas and NumPy and have worked with big data platforms such as Spark and Hadoop. I design and deploy ML pipelines using FastAPI, Docker and Kubernetes, and I keep up‑to‑date with emerging tools for MLOps and multimodal AI. This breadth allows me to quickly adapt to new technologies and contribute across the stack.";
  },
});
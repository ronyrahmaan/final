import { tool } from 'ai';
import { z } from 'zod';

// Returns a summary of Rahman's technical skills.
export const getSkills = tool({
  description: 'This tool shows a list of my skills.',
  parameters: z.object({}),
  async execute() {
    return "I have a broad and balanced skill set across AI research and engineering. I'm fluent in Python, C++ and Java, and build models with frameworks such as PyTorch, TensorFlow, scikit‑learn and JAX/Flax. My experience spans large language models and generative AI using Hugging Face Transformers, LangChain, RLHF methods and retrieval‑augmented generation, as well as traditional NLP with NLTK and spaCy. On the data side I work with Pandas, NumPy and PySpark and have built big‑data pipelines with Spark, Hadoop and Hive. I also process point clouds from LiDAR sensors and integrate real‑time data streams into machine‑learning systems, which is increasingly important for applications like autonomous vehicles and smart infrastructure. I design and deploy ML systems using FastAPI, Docker, Kubernetes, MLFlow and other MLOps tools, and I'm comfortable with CI/CD and cloud platforms. This breadth allows me to quickly adapt to new technologies and contribute across the stack.";
  },
});
import { tool } from 'ai';
import { z } from 'zod';

// Returns a message directing users to the projects section. It encourages
// follow‑up questions about specific projects or research contributions.
export const getProjects = tool({
  description: 'This tool returns a high‑level overview of my key research and engineering projects.',
  parameters: z.object({}),
  async execute() {
    return `**LiDAR Processing Pipeline – TxDOT Project:** I designed a modular pipeline for the Texas Department of Transportation to convert raw Velodyne VLP‑32C packet captures into calibrated point clouds in real time. The system decodes UDP packets into laser channels, aligns vertical angles via CSV mappings, filters ground points and noise, and applies DBSCAN clustering to segment objects. Detailed diagrams, logs and code snippets from my GitHub repository illustrate each step — including calibration mapping, background filtering and a hierarchical point‑cloud processing stack.

**Generative AI & Large Language Models:** I experiment with transformer architectures, fine‑tuning open‑source GPT‑style models using Hugging Face Transformers and LangChain. Projects include prompt engineering for low‑resource languages, ethical AI frameworks and multimodal LLM research. One highlight is developing a customizable pipeline to compare different decoder head configurations and monitor metrics with Weights & Biases.

**PolyHope – Hope & Sarcasm Detection:** This multilingual NLP project leverages transformer and BiLSTM architectures to classify hope speech and sarcasm across Bengali, Hindi and English texts. It was recognized at the 2022 ACL workshop on hope speech detection.

**AI vs Human Text Detection:** I built a framework to distinguish machine‑generated text from human writing using a combination of entropy and perplexity scores along with DetectGPT algorithms. The system achieved high accuracy on both generic and domain‑specific corpora and offers a command‑line interface for researchers.

I also maintain smaller demos and prototypes on GitHub covering MLOps workflows, real‑time sensor data processing and interactive dashboards. Let me know which project interests you, and I'd be happy to dive into the details!`;
  },
});
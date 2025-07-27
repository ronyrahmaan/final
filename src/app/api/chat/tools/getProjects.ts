import { tool } from 'ai';
import { z } from 'zod';

// Returns a message directing users to the projects section and summarizing key research projects.
export const getProjects = tool({
  description: 'This tool returns a high‑level overview of my key research and engineering projects.',
  parameters: z.object({}),
  async execute() {
    return `**LiDAR Processing Pipeline – TxDOT Project:** I designed a modular pipeline for the Texas Department of Transportation that converts raw Velodyne VLP‑32C packet captures into calibrated point clouds in real time. The system decodes UDP packets into laser channels, aligns vertical angles via calibration tables, filters ground points and noise, and uses DBSCAN clustering to segment objects. On top of this, I developed machine‑learning models to classify infrastructure defects and predict maintenance needs. Detailed diagrams, logs and code snippets from my GitHub repository illustrate each step — including calibration mapping, hierarchical processing and deployment scripts. This work is driven by a desire to transform traffic safety through proactive road‑condition monitoring and draws inspiration from industry leaders like Waymo, whose engineering excellence in autonomous vehicles demonstrates the power of integrated sensing and AI.  

**Generative AI & Large Language Models:** I experiment with transformer architectures, fine‑tuning open‑source GPT‑style models (GPT‑4o, Gemma, Llama) using Hugging Face Transformers and LangChain. Projects include prompt engineering for low‑resource languages, reinforcement learning from human feedback, retrieval‑augmented generation and multimodal LLM research. One highlight is a customizable pipeline that compares decoder‑head configurations and monitors metrics with Weights & Biases.  

**PolyHope – Hope & Sarcasm Detection:** This multilingual NLP project leverages transformer and BiLSTM architectures to classify hope speech and sarcasm across Bengali, Hindi and English texts. It was recognized at the 2022 ACL workshop on hope speech detection and continues to evolve with new datasets and model architectures.  

**AI vs Human Text Detection:** I built a framework to distinguish machine‑generated text from human writing using a combination of entropy and perplexity scores along with DetectGPT algorithms. The system achieved high accuracy on both generic and domain‑specific corpora and provides a command‑line interface for researchers.  

Beyond these major projects, I maintain smaller demos and prototypes on GitHub that explore MLOps workflows, diffusion models, real‑time sensor data processing and interactive dashboards. Let me know which project interests you and I'd be happy to dive into the details!`;
  },
});
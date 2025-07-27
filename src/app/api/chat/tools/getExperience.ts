import { tool } from 'ai';
import { z } from 'zod';

// Returns a summary of Md A Rahman's professional experience. This tool
// should be invoked when a visitor asks about work history, previous roles
// or industry experience. The content draws directly from Rahman's CV and
// highlights relevant positions with concise, professional descriptions.
export const getExperience = tool({
  description:
    'This tool returns a summary of my professional experience, covering roles held prior to and during my graduate studies.',
  parameters: z.object({}),
  async execute() {
    return `Over the past several years I've balanced academic research with industry roles. Currently, I'm a Graduate Research Assistant at the TransTech Transportation Lab within Texas Tech University's Department of Civil, Environmental & Construction Engineering. Under the supervision of Dr. Hongchao Liu, I'm contributing to Texas Department of Transportation (TxDOT) projects that apply machine learning, generative AI and real‑time sensor analysis to transportation safety and infrastructure. Prior to this, I worked as a Software Engineer (ML/DL) at One Stop IT Solutions in Dhaka (June–August 2024), where I developed and deployed scalable machine‑learning models and collaborated with cross‑functional teams on AI‑driven solutions. From July 2023 to May 2024 I served as a Data Analysis Assistant at IMPIT Limited, performing data cleaning, exploratory analysis and visualization to inform business decisions. Earlier in my career, I completed a Big Data Analyst internship at Chengdu Suncaper Data Co. Ltd. in China (Nov 2021–Apr 2022), where I led a team to build real‑time analytics platforms using Apache Spark, Hadoop and Hive. These experiences have equipped me with a strong foundation in machine learning, data engineering and collaborative project management.`;
  },
});
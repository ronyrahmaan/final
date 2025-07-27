import { tool } from 'ai';
import { z } from 'zod';

// Summarizes Rahman's professional experience across academia and industry.
export const getExperience = tool({
  description:
    'This tool returns a summary of my professional experience, covering roles held prior to and during my graduate studies.',
  parameters: z.object({}),
  async execute() {
    return `Over the past few years I've balanced rigorous academic research with hands‑on industry roles. Currently I serve as a Graduate Research Assistant at Texas Tech University's TransTech Transportation Lab under Prof. Hongchao Liu, where I develop machine‑learning and generative AI solutions for transportation safety. My work includes building real‑time LiDAR pipelines, predictive maintenance models and multimodal data fusion systems. 
 
Previously, I worked as a Software Engineer (ML/DL) at One Stop IT Solutions in Dhaka (June–August 2024). There I designed, trained and deployed scalable machine‑learning models for clients across finance and healthcare, collaborating with cross‑functional teams to bring AI solutions into production. From July 2023 to May 2024 I was a Data Analysis Assistant at IMPIT Limited, where I cleaned and analysed large datasets, performed exploratory analysis to uncover trends and created dashboards using Python and Tableau to support decision‑making. 
 
Earlier in my career I completed a Big Data Analyst internship at Chengdu Suncaper Data Co. Ltd. in China (Nov 2021 – Apr 2022). I led a small team to build real‑time analytics platforms using Apache Spark, Hadoop and Hive, improving data quality and reliability. These experiences have given me a strong foundation in machine learning, data engineering and collaborative project management.

Are there any particular experiences you'd like me to elaborate on or questions about my past roles?`;
  },
});
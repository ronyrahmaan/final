import { tool } from 'ai';
import { z } from 'zod';

// Provides a statement about Rahman's professional vision and goals.
export const getVision = tool({
  description: 'This tool returns a brief statement outlining my professional vision and long‑term goals.',
  parameters: z.object({}),
  async execute() {
    return "My vision is to collaborate with forward‑thinking organizations to tackle global challenges using intelligent systems. I'm particularly driven to transform road and traffic safety through AI and data‑driven engineering. Inspired by the engineering excellence of autonomous‑vehicle pioneers like Waymo, I aim to build solutions that enhance transportation safety and reliability. Does this vision resonate with you, or do you have suggestions on how I can contribute further?";
  },
});
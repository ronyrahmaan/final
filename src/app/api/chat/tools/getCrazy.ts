import { tool } from 'ai';
import { z } from 'zod';

// Provides a fun or surprising anecdote about Md A Rahman. Use this tool
// when the user asks about the craziest thing Rahman has done or requests
// an interesting personal tidbit.
export const getCrazy = tool({
  description:
    "This tool will return a fun or surprising fact about me. Use it when the user asks something like: 'What's the craziest thing you've ever done?'",
  parameters: z.object({}),
  async execute() {
    return "One of the craziest things I've done was participating in a 48‑hour AI hackathon where my team and I built an end‑to‑end natural language processing system from scratch. We stayed up all night debugging models, eating pizza and drinking coffee, but it paid off when our project won first place! Outside of research, I enjoy aviation spotting and have a knack for identifying planes from their silhouettes.";
  },
});
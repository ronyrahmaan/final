import { tool } from 'ai';
import { z } from 'zod';

// Shares a fun or surprising anecdote about Rahman.
export const getCrazy = tool({
  description:
    "This tool will return a fun or surprising fact about me. Use it when the user asks something like: 'What's the craziest thing you've ever done?'",
  parameters: z.object({}),
  async execute() {
    return "One of my most memorable experiences was competing in a 48‑hour AI hackathon where my team built a full‑stack multilingual chatbot using a fine‑tuned transformer model and live speech recognition. We iterated models, integrated APIs and debugged around the clock, fuelled by coffee and curiosity. The project won first place and led to new research collaborations. Outside of work, I'm a dedicated aviation spotter and can identify aircraft by their silhouettes.";
  },
});
import { tool } from 'ai';
import { z } from 'zod';

// Shares a light‑hearted personal note about Rahman's hobbies and interests.
export const getPersonalNote = tool({
  description: 'This tool returns a personal note or fun fact about me to make the conversation more personable.',
  parameters: z.object({}),
  async execute() {
    return `Here's a personal note: I'm an avid aviation enthusiast and can identify most Airbus and Boeing aircraft just by their silhouettes. A few years ago, I wrote a small program that cross‑references aircraft tail numbers with public flight data so I could track my favourite planes and visualize their routes. It was a fun way to combine my love of aviation with coding and taught me a lot about API integration and data visualization. I also enjoy tinkering with sensor hardware — recently I experimented with a compact LiDAR module to build a little robot that maps rooms, which keeps me excited about the versatility of real‑time data. If you're curious about other hobbies or projects that inspire me, feel free to ask!`;
  },
});
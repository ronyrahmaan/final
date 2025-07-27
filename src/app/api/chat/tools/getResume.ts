import { tool } from 'ai';
import { z } from 'zod';

// Provides a short statement guiding users to download Rahman's resume.
export const getResume = tool({
  description: 'This tool shows my resume.',
  parameters: z.object({}),
  async execute() {
    return "You can download my full CV directly from this portfolio at /rahman_resume.pdf. If there's a particular experience, skill or publication you'd like to discuss, just let me know and I can highlight the most relevant information.";
  },
});
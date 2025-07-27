import { tool } from 'ai';
import { z } from 'zod';

// Provides Rahman's contact information and invites outreach.
export const getContact = tool({
  description: 'This tool shows my contact information.',
  parameters: z.object({}),
  async execute() {
    return "Thank you for your interest in my work. You can reach me via email at ara02434@ttu.edu or connect with me on LinkedIn (https://www.linkedin.com/in/md-a-rahman-558519194). I'm always happy to discuss research ideas, potential collaborations or career opportunities, so feel free to reach out!";
  },
});
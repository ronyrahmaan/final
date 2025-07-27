import { tool } from 'ai';
import { z } from 'zod';

// Returns contact information guidance. When invoked, it should reassure the
// user that contact details are available and encourage them to reach out.
export const getContact = tool({
  description: 'This tool shows my contact information.',
  parameters: z.object({}),
  async execute() {
    return "You can reach me via email at ara02434@ttu.edu or connect with me on LinkedIn (https://www.linkedin.com/in/md-a-rahman-558519194). I'm always open to discussing projects, opportunities and collaborations.";
  },
});
import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { SYSTEM_PROMPT } from './prompt';
import { getContact } from './tools/getContact';
// Import the personal note tool instead of the removed getCrazy tool
import { getPersonalNote } from './tools/getPersonalNote';
import { getAboutMe } from './tools/getAboutMe';
import { getProjects } from './tools/getProjects';
import { getResume } from './tools/getResume';
import { getSkills } from './tools/getSkills';
import { getExperience } from './tools/getExperience';
import { getInternship } from './tools/getInternship';
import { getVision } from './tools/getVision';
import { getResearch } from './tools/getResearch';

export const maxDuration = 30;

// Handles unknown errors and ensures a string response
function errorHandler(error: unknown) {
  if (error == null) {
    return 'Unknown error';
  }
  if (typeof error === 'string') {
    return error;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return JSON.stringify(error);
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    console.log('[CHAT-API] Incoming messages:', messages);

    messages.unshift(SYSTEM_PROMPT);

    const tools = {
      getProjects,
      getAboutMe,
      getResume,
      getContact,
      getSkills,
      getPersonalNote,
      getExperience,
      getInternship,
      getVision,
      getResearch,
    };

    const result = streamText({
      model: openai('gpt-4o-mini'),
      messages,
      toolCallStreaming: true,
      tools,
      maxSteps: 2,
    });

    return result.toDataStreamResponse({
      getErrorMessage: errorHandler,
    });
  } catch (err) {
    console.error('Global error:', err);
    const errorMessage = errorHandler(err);
    return new Response(errorMessage, { status: 500 });
  }
}
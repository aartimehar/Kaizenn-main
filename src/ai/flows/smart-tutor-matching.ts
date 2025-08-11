'use server';

/**
 * @fileOverview A smart tutor matching AI agent.
 *
 * - smartTutorMatching - A function that handles the tutor matching process.
 * - SmartTutorMatchingInput - The input type for the smartTutorMatching function.
 * - SmartTutorMatchingOutput - The return type for the smartTutorMatching function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SmartTutorMatchingInputSchema = z.object({
  studentProfile: z
    .string()
    .describe('The profile of the student, including learning style, goals, and subject requirements.'),
  tutorProfiles: z
    .string()
    .describe('The profiles of available tutors, including their expertise and teaching approach.'),
});
export type SmartTutorMatchingInput = z.infer<typeof SmartTutorMatchingInputSchema>;

const SmartTutorMatchingOutputSchema = z.object({
  matchedTutor: z.string().describe('The profile of the tutor best suited for the student.'),
  reason: z.string().describe('The reason why this tutor was matched with the student.'),
});
export type SmartTutorMatchingOutput = z.infer<typeof SmartTutorMatchingOutputSchema>;

export async function smartTutorMatching(input: SmartTutorMatchingInput): Promise<SmartTutorMatchingOutput> {
  return smartTutorMatchingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'smartTutorMatchingPrompt',
  input: {schema: SmartTutorMatchingInputSchema},
  output: {schema: SmartTutorMatchingOutputSchema},
  prompt: `You are an expert tutor matching system.

You will use the student profile and the available tutor profiles to find the best tutor for the student.

Student Profile: {{{studentProfile}}}

Tutor Profiles: {{{tutorProfiles}}}

You will output the profile of the matched tutor and the reason for the match.
`,
});

const smartTutorMatchingFlow = ai.defineFlow(
  {
    name: 'smartTutorMatchingFlow',
    inputSchema: SmartTutorMatchingInputSchema,
    outputSchema: SmartTutorMatchingOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

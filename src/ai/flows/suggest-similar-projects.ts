'use server';

/**
 * @fileOverview AI flow to suggest similar projects based on the user's existing portfolio.
 *
 * - suggestSimilarProjects - A function that analyzes the user's portfolio and suggests similar projects.
 * - SuggestSimilarProjectsInput - The input type for the suggestSimilarProjects function.
 * - SuggestSimilarProjectsOutput - The return type for the suggestSimilarProjects function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestSimilarProjectsInputSchema = z.object({
  portfolioDescription: z
    .string()
    .describe('A comprehensive description of the user\'s existing portfolio projects, including technologies used, project goals, and outcomes.'),
  desiredProjectType: z
    .string()
    .optional()
    .describe('Optional. The specific type of project the user is interested in (e.g., web app, mobile app, data science project).'),
});
export type SuggestSimilarProjectsInput = z.infer<typeof SuggestSimilarProjectsInputSchema>;

const SuggestSimilarProjectsOutputSchema = z.object({
  suggestedProjects: z
    .array(z.string())
    .describe('An array of project suggestions that are similar to the user\'s existing portfolio, with a focus on expanding their skills and portfolio diversity.'),
  reasoning: z
    .string()
    .describe('A detailed explanation of why these projects are suggested, based on the user\'s portfolio and desired project type.'),
});
export type SuggestSimilarProjectsOutput = z.infer<typeof SuggestSimilarProjectsOutputSchema>;

export async function suggestSimilarProjects(input: SuggestSimilarProjectsInput): Promise<SuggestSimilarProjectsOutput> {
  return suggestSimilarProjectsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestSimilarProjectsPrompt',
  input: {schema: SuggestSimilarProjectsInputSchema},
  output: {schema: SuggestSimilarProjectsOutputSchema},
  prompt: `You are an AI portfolio assistant. Your task is to analyze a user's existing portfolio and suggest similar projects that the user can undertake to further enhance their skills and portfolio.

Portfolio Description: {{{portfolioDescription}}}

{{#if desiredProjectType}}
The user is specifically interested in: {{{desiredProjectType}}}
{{/if}}

Based on the above information, please provide an array of project suggestions and a detailed explanation of why these projects are suggested.

Ensure that the suggestions are diverse and help the user expand their skillset.
`,
});

const suggestSimilarProjectsFlow = ai.defineFlow(
  {
    name: 'suggestSimilarProjectsFlow',
    inputSchema: SuggestSimilarProjectsInputSchema,
    outputSchema: SuggestSimilarProjectsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output || { suggestedProjects: [], reasoning: '' };
  }
);

'use server';

/**
 * @fileOverview AI flow to generate a project description based on its name and existing details.
 *
 * - generateProjectDescription - A function that creates a concise and professional project description.
 * - GenerateProjectDescriptionInput - The input type for the function.
 * - GenerateProjectDescriptionOutput - The return type for the function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectDescriptionInputSchema = z.object({
  projectName: z.string().describe('The name of the project repository.'),
  existingDescription: z.string().optional().describe('The existing description from the repository, if available.'),
});
export type GenerateProjectDescriptionInput = z.infer<typeof GenerateProjectDescriptionInputSchema>;

const GenerateProjectDescriptionOutputSchema = z.object({
  description: z.string().describe('A generated, professional description for the project, suitable for a portfolio. It should be around 20-30 words.'),
});
export type GenerateProjectDescriptionOutput = z.infer<typeof GenerateProjectDescriptionOutputSchema>;

export async function generateProjectDescription(input: GenerateProjectDescriptionInput): Promise<GenerateProjectDescriptionOutput> {
  return generateProjectDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProjectDescriptionPrompt',
  input: {schema: GenerateProjectDescriptionInputSchema},
  output: {schema: GenerateProjectDescriptionOutputSchema},
  prompt: `You are an expert copywriter for a software engineer's portfolio. Your task is to write a concise and professional project description (20-30 words).

Project Name: {{{projectName}}}

{{#if existingDescription}}
Existing Description: {{{existingDescription}}}
{{else}}
The project has no existing description. Base the new description on the project name.
{{/if}}

Generate a compelling, one-sentence description suitable for a portfolio. Focus on the project's purpose or key feature.
`,
});

const generateProjectDescriptionFlow = ai.defineFlow(
  {
    name: 'generateProjectDescriptionFlow',
    inputSchema: GenerateProjectDescriptionInputSchema,
    outputSchema: GenerateProjectDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

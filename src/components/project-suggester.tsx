"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  suggestSimilarProjects,
  SuggestSimilarProjectsOutput,
} from "@/ai/flows/suggest-similar-projects";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader2, Wand2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const formSchema = z.object({
  portfolioDescription: z.string().min(50, {
    message:
      "Please provide a more detailed description of your portfolio (at least 50 characters).",
  }),
});

type FormValues = z.infer<typeof formSchema>;

interface ProjectSuggesterProps {
  portfolioDescription: string;
}

export default function ProjectSuggester({
  portfolioDescription,
}: ProjectSuggesterProps) {
  const [suggestions, setSuggestions] =
    useState<SuggestSimilarProjectsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      portfolioDescription: portfolioDescription || "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setSuggestions(null);
    try {
      const result = await suggestSimilarProjects({
        portfolioDescription: data.portfolioDescription,
      });
      setSuggestions(result);
    } catch (error) {
      console.error("AI Project Suggestion Error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description:
          "Failed to generate project suggestions. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-10 mx-auto max-w-4xl">
      <Card className="bg-card">
        <CardHeader>
          <CardTitle>Portfolio Summary for AI</CardTitle>
          <CardDescription>
            This summary is automatically generated from your profile. Feel free to edit it before asking for suggestions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="portfolioDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your projects, technologies used, and your role..."
                        className="min-h-[150px] bg-background"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full" size="lg">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating Ideas...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-4 w-4" />
                    Suggest Projects
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {suggestions && (
        <div className="mt-8 space-y-6">
          <Alert className="border-accent">
            <AlertTitle className="font-headline text-xl">
              AI-Powered Reasoning
            </AlertTitle>
            <AlertDescription className="mt-2 text-muted-foreground">
              {suggestions.reasoning}
            </AlertDescription>
          </Alert>

          <div className="grid gap-6 md:grid-cols-2">
            {suggestions.suggestedProjects.map((project, index) => (
              <Card key={index} className="bg-background">
                <CardHeader>
                  <CardTitle className="font-headline">
                    Project Idea #{index + 1}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

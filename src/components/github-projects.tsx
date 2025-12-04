"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Github, Star, GitFork, Eye, Loader2, ArrowRight, Wand2, ChevronLeft, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { generateProjectDescription } from "@/ai/flows/generate-project-description";


interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  private: boolean;
  topics: string[];
}

const DEFAULT_GITHUB_USER = 'RafiMohammadHasib';
const REPOS_PER_PAGE = 6;

export default function GitHubProjects() {
  const [username, setUsername] = useState(DEFAULT_GITHUB_USER);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [generatingDescriptions, setGeneratingDescriptions] = useState<Record<number, boolean>>({});
  const { toast } = useToast();
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchRepos = async (user: string, pageNum: number = 1) => {
    setIsLoading(true);
    setError(null);
    setPage(pageNum);
    try {
      const response = await fetch(`https://api.github.com/users/${user}/repos?sort=updated&per_page=${REPOS_PER_PAGE}&page=${pageNum}`);
      if (!response.ok) {
        throw new Error("GitHub user not found or API rate limit exceeded.");
      }
      const data: Repo[] = await response.json();
      
      const publicRepos = data.filter(repo => !repo.private);

      setRepos(publicRepos);
      setHasMore(publicRepos.length === REPOS_PER_PAGE);

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred.";
      setError(errorMessage);
      setRepos([]);
      toast({
        variant: "destructive",
        title: "Error fetching repositories",
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleGenerateDescription = useCallback(async (repoId: number) => {
    setGeneratingDescriptions(prev => ({ ...prev, [repoId]: true }));
    const repo = repos.find(r => r.id === repoId);
    if (!repo) {
      setGeneratingDescriptions(prev => ({ ...prev, [repoId]: false }));
      return;
    }

    try {
      const result = await generateProjectDescription({ projectName: repo.name });
      setRepos(prevRepos => prevRepos.map(r => 
        r.id === repoId ? { ...r, description: result.description } : r
      ));
      toast({
        title: "Description generated!",
        description: "The AI has created a new description for this project."
      })
    } catch (error) {
      console.error("AI Description Error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate description. Please try again."
      })
    } finally {
      setGeneratingDescriptions(prev => ({ ...prev, [repoId]: false }));
    }
  }, [repos, toast]);


  useEffect(() => {
    fetchRepos(DEFAULT_GITHUB_USER, 1);
  }, []);

  const handleConnect = () => {
    if (username) fetchRepos(username, 1);
  };
  
  const handlePageChange = (newPage: number) => {
    if (username) {
      fetchRepos(username, newPage);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-center mb-8">
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
              placeholder="Enter GitHub username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleConnect()}
            />
            <Button onClick={handleConnect} disabled={isLoading && page === 1}>
              {isLoading && page === 1 ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Github className="mr-2 h-4 w-4" />}
              Fetch
            </Button>
          </div>
      </div>
      
      {isLoading && <div className="flex justify-center items-center p-10"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>}
      {error && <p className="text-destructive text-center">{error}</p>}
      
      {!isLoading && !error && (
        <>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo, index) => {
              const placeholder = PlaceHolderImages[index % PlaceHolderImages.length];
              const isGenerating = generatingDescriptions[repo.id];
              return (
                <Card key={repo.id} className="flex flex-col overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={placeholder.imageUrl}
                        alt={repo.name}
                        fill
                        className="object-cover"
                        data-ai-hint={placeholder.imageHint}
                      />
                    </div>
                    <CardHeader>
                        <CardTitle className="text-xl capitalize">
                          {repo.name.replace(/-/g, ' ').replace(/_/g, ' ')}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-4">
                      <div className="h-14">
                        {repo.description ? (
                           <p className="text-sm text-muted-foreground line-clamp-3">{repo.description}</p>
                        ): (
                          <div className="flex flex-col gap-2 items-start">
                            <p className="text-sm text-muted-foreground italic">No description provided.</p>
                            <Button 
                              size="sm"
                              variant="ghost"
                              onClick={() => handleGenerateDescription(repo.id)}
                              disabled={isGenerating}
                            >
                               {isGenerating ? (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              ) : (
                                <Wand2 className="mr-2 h-4 w-4" />
                              )}
                              Generate with AI
                            </Button>
                          </div>
                        )}
                      </div>
                       <div className="flex flex-wrap gap-2">
                        {repo.language && <Badge variant="secondary">{repo.language}</Badge>}
                        {repo.topics.slice(0, 2).map(topic => <Badge key={topic} variant="outline">{topic}</Badge>)}
                      </div>
                    </CardContent>
                    <CardFooter className="justify-between items-center bg-muted/50 p-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4" />
                            <span>{repo.stargazers_count}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <GitFork className="w-4 h-4" />
                            <span>{repo.forks_count}</span>
                          </div>
                      </div>
                      <Button asChild size="sm">
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                          View <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
              );
            })}
          </div>

          <div className="flex justify-center items-center mt-8 gap-4">
            <Button
              variant="outline"
              onClick={() => handlePageChange(page - 1)}
              disabled={page <= 1 || isLoading}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            <span className="text-sm text-muted-foreground">Page {page}</span>
            <Button
              variant="outline"
              onClick={() => handlePageChange(page + 1)}
              disabled={!hasMore || isLoading}
            >
              Next
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

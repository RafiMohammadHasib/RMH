"use client";

import { useState, useEffect } from "react";
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
import { Github, Star, GitFork, Eye, Loader2, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { PlaceHolderImages } from "@/lib/placeholder-images";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  private: boolean;
  topics: string[];
}

const DEFAULT_GITHUB_USER = 'RafiMohammadHasib';

export default function GitHubProjects() {
  const [username, setUsername] = useState(DEFAULT_GITHUB_USER);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const fetchRepos = async (user: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.github.com/users/${user}/repos?sort=updated&per_page=6`);
      if (!response.ok) {
        throw new Error("GitHub user not found or API rate limit exceeded.");
      }
      const data: Repo[] = await response.json();
      setRepos(data.filter(repo => !repo.private));
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

  useEffect(() => {
    fetchRepos(DEFAULT_GITHUB_USER);
  }, []);

  const handleConnect = () => {
    if (username) fetchRepos(username);
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
            <Button onClick={handleConnect} disabled={isLoading}>
              {isLoading && username ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Github className="mr-2 h-4 w-4" />}
              Fetch
            </Button>
          </div>
      </div>
      
      {isLoading && <div className="flex justify-center items-center p-10"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>}
      {error && <p className="text-destructive text-center">{error}</p>}
      
      {!isLoading && !error && (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo, index) => {
            const placeholder = PlaceHolderImages[index % PlaceHolderImages.length];
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
                      <CardTitle className="text-xl">
                        {repo.name.replace(/-/g, ' ').replace(/_/g, ' ')}
                      </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow space-y-4">
                    <p className="text-sm text-muted-foreground line-clamp-2">{repo.description || "No description available."}</p>
                     <div className="flex flex-wrap gap-2">
                      {repo.language && <Badge variant="secondary">{repo.language}</Badge>}
                      {repo.topics.slice(0, 2).map(topic => <Badge key={topic} variant="outline">{topic}</Badge>)}
                    </div>
                  </CardContent>
                  <CardFooter className="justify-between">
                    <Button asChild>
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        View Project <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                     <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                        <Github className="h-6 w-6" />
                      </a>
                  </CardFooter>
                </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
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
import { Github, Star, GitFork, EyeOff, Eye, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  private: boolean;
}

const DEFAULT_GITHUB_USER = 'RafiMohammadHasib';

export default function GitHubProjects() {
  const [username, setUsername] = useState(DEFAULT_GITHUB_USER);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [hiddenRepos, setHiddenRepos] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const fetchRepos = async (user: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.github.com/users/${user}/repos?sort=updated`);
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

  useEffect(() => {
    const storedHiddenRepos = localStorage.getItem("hiddenRepos");
    if (storedHiddenRepos) {
      setHiddenRepos(JSON.parse(storedHiddenRepos));
    }
  }, []);

  const toggleRepoVisibility = (id: number) => {
    const newHiddenRepos = hiddenRepos.includes(id)
      ? hiddenRepos.filter((repoId) => repoId !== id)
      : [...hiddenRepos, id];
    setHiddenRepos(newHiddenRepos);
    localStorage.setItem("hiddenRepos", JSON.stringify(newHiddenRepos));
  };

  const handleConnect = () => {
    fetchRepos(username);
  };
  
  const visibleRepos = repos.filter(repo => !hiddenRepos.includes(repo.id));

  return (
    <div className="mt-10 max-w-6xl mx-auto">
       <Card className="mb-8">
        <CardHeader>
          <CardTitle className="font-headline">Connect to GitHub</CardTitle>
          <CardDescription>Enter a GitHub username to see their public repositories.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="Enter GitHub username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleConnect()}
              className="flex-grow"
            />
            <Button onClick={handleConnect} disabled={isLoading}>
              {isLoading && username ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Github className="mr-2" />}
              Connect
            </Button>
          </div>
        </CardContent>
      </Card>
      
      {isLoading && <div className="flex justify-center items-center p-10"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>}
      {error && <p className="text-destructive text-center">{error}</p>}
      
      {!isLoading && !error && (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visibleRepos.map((repo) => (
            <Card key={repo.id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline text-xl flex justify-between items-start">
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {repo.name}
                  </a>
                  <Button variant="ghost" size="icon" onClick={() => toggleRepoVisibility(repo.id)}>
                    <Eye className="h-5 w-5" />
                  </Button>
                </CardTitle>
                <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1">
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3" /> {repo.stargazers_count}
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="h-3 w-3" /> {repo.forks_count}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">{repo.description || "No description available."}</p>
              </CardContent>
              <CardFooter>
                 {repo.language && <Badge variant="outline">{repo.language}</Badge>}
              </CardFooter>
            </Card>
          ))}
          {hiddenRepos.length > 0 && (
            <Card className="md:col-span-2 lg:col-span-3">
                <CardHeader>
                    <CardTitle>Hidden Repositories</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                    {repos.filter(repo => hiddenRepos.includes(repo.id)).map(repo => (
                        <Badge key={repo.id} variant="secondary" className="flex items-center gap-2">
                            <span>{repo.name}</span>
                            <Button variant="ghost" size="icon" className="h-auto w-auto p-0" onClick={() => toggleRepoVisibility(repo.id)}>
                                <EyeOff className="h-4 w-4" />
                            </Button>
                        </Badge>
                    ))}
                </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}

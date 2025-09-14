import Image from "next/image";
import Link from "next/link";
import { personalInfo, skills, portfolio } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Briefcase, Lightbulb } from "lucide-react";
import ProjectSuggester from "@/components/project-suggester";

const getImage = (id: string) => PlaceHolderImages.find((img) => img.id === id);

export default function Home() {
  const portfolioDescription = portfolio
    .map(
      (p) =>
        `- ${p.title}: ${p.description} (Technologies: ${p.tags.join(", ")})`
    )
    .join("\n");

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground font-body">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-primary" />
            <span className="font-headline text-xl font-bold">
              Portfolio Ace
            </span>
          </Link>
          <nav>
            <Button variant="ghost" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section
          id="hero"
          className="container grid items-center gap-6 pb-8 pt-6 md:py-24"
        >
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
            <h1 className="font-headline text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
              {personalInfo.name}
            </h1>
            <p className="text-xl text-muted-foreground">{personalInfo.title}</p>
            <p className="max-w-2xl text-lg text-muted-foreground/80">
              {personalInfo.bio}
            </p>
          </div>
        </section>

        <section id="skills" className="py-12 md:py-20 bg-card border-y">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="font-headline text-3xl font-bold md:text-4xl">
                Skills & Expertise
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                A versatile skill set for building and growing modern
                applications.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  className="px-4 py-2 text-base transition-transform hover:scale-105 border-transparent bg-accent/30 text-accent-foreground hover:bg-accent/40"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-12 md:py-20">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="font-headline text-3xl font-bold md:text-4xl">
                My Work
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                A selection of projects that showcase my passion for software
                engineering and business development.
              </p>
            </div>
            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {portfolio.map((project) => {
                const image = getImage(project.imageUrlId);
                return (
                  <Card
                    key={project.id}
                    className="overflow-hidden transition-shadow hover:shadow-lg"
                  >
                    {image && (
                      <div className="aspect-video relative">
                        <Image
                          src={image.imageUrl}
                          alt={project.title}
                          fill
                          className="object-cover"
                          data-ai-hint={image.imageHint}
                        />
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="font-headline text-2xl">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{project.description}</CardDescription>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section id="ai-suggester" className="py-12 md:py-20 bg-card border-y">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center">
              <div className="flex items-center justify-center gap-2">
                <Lightbulb className="h-8 w-8 text-primary" />
                <h2 className="font-headline text-3xl font-bold md:text-4xl">
                  Need Inspiration?
                </h2>
              </div>
              <p className="mt-4 text-lg text-muted-foreground">
                Let our AI analyze my portfolio and suggest new project ideas to
                expand my skills.
              </p>
            </div>
            <ProjectSuggester portfolioDescription={portfolioDescription} />
          </div>
        </section>

        <section id="contact" className="py-12 md:py-20">
          <div className="container text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">
              Get In Touch
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              I'm open to new opportunities and collaborations.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2"
                >
                  <Mail className="h-5 w-5" />
                  <span>{personalInfo.email}</span>
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-card border-t">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Rafi Mohammad Hasib
            </a>
            . Powered by AI.
          </p>
        </div>
      </footer>
    </div>
  );
}

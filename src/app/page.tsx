import Image from "next/image";
import Link from "next/link";
import { personalInfo, skills, socialLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Briefcase, Download, Github, Linkedin } from "lucide-react";
import GitHubProjects from "@/components/github-projects";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground font-body">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-primary" />
            <span className="font-headline text-xl font-bold">
              Rafi Mohammad Hasib
            </span>
          </Link>
          <nav className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <a href="#about">About</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="#portfolio">Portfolio</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="#contact">Contact</a>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section
          id="hero"
          className="container grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-12 md:py-24"
        >
          <div className="flex flex-col items-start gap-4 text-left">
            <h1 className="font-headline text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
              {personalInfo.name}
            </h1>
            <p className="text-2xl text-primary font-semibold">{personalInfo.title}</p>
            <div className="flex gap-4 mt-4">
              <Button asChild size="lg">
                <a
                  href={`mailto:${personalInfo.email}`}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a
                  href="/resume.pdf"
                  target="_blank"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Resume
                </a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="https://images.unsplash.com/photo-1619946803204-a6a1b950e7b5?q=80&w=400"
              alt="Rafi Mohammad Hasib"
              width={400}
              height={400}
              className="rounded-full object-cover border-4 border-primary shadow-lg"
              data-ai-hint="professional headshot"
            />
          </div>
        </section>

        <section id="about" className="py-12 md:py-20 bg-card border-y">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="font-headline text-3xl font-bold md:text-4xl">
                About Me
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {personalInfo.bio}
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="py-12 md:py-20">
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

        <section id="portfolio" className="py-12 md:py-20  bg-card border-y">
          <div className="container">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="font-headline text-3xl font-bold md:text-4xl">
                My Work
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                A selection of my projects from GitHub. Connect your account to see your own!
              </p>
            </div>
            <GitHubProjects />
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
          <div className="flex items-center gap-4">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            </div>
        </div>
      </footer>
    </div>
  );
}

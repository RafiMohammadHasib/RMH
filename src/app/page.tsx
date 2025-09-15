import Image from 'next/image';
import Link from 'next/link';
import {
  personalInfo,
  skills,
  socialLinks,
  experiences,
  education,
} from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Mail,
  Download,
  Github,
  Linkedin,
  ArrowRight,
  Code,
  GraduationCap,
  Briefcase,
  User,
} from 'lucide-react';
import GitHubProjects from '@/components/github-projects';
import { ScrollAnimation } from '@/components/scroll-animation';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground font-sans">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Code className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">{personalInfo.name}</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#about" className="text-foreground/60 hover:text-foreground">
              About
            </a>
            <a
              href="#experience"
              className="text-foreground/60 hover:text-foreground"
            >
              Experience
            </a>
            <a
              href="#education"
              className="text-foreground/60 hover:text-foreground"
            >
              Education
            </a>
            <a
              href="#portfolio"
              className="text-foreground/60 hover:text-foreground"
            >
              Portfolio
            </a>
            <Button asChild>
              <a href="#contact">Contact</a>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section
          id="hero"
          className="container grid md:grid-cols-2 gap-10 items-center py-24 md:py-32"
        >
          <ScrollAnimation className="flex justify-center md:order-2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary rounded-full blur-xl opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <Image
                src="/full_body.jpeg"
                alt="Rafi Mohammad Hasib"
                width={300}
                height={300}
                className="relative rounded-full object-cover border-4 border-background shadow-lg w-64 h-64 md:w-80 md:h-80"
                priority
                data-ai-hint="professional full-body"
              />
            </div>
          </ScrollAnimation>
          <ScrollAnimation className="md:order-1 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Hello, I'm {personalInfo.name.split(' ')[0]}
              </h1>
              <p className="max-w-2xl text-lg text-foreground/80">
                {personalInfo.title}
              </p>
              <div className="flex gap-4 mt-6">
                <Button asChild size="lg">
                  <a href={`mailto:${personalInfo.email}`}>
                    <Mail className="mr-2 h-5 w-5" />
                    Get in Touch
                  </a>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <a
                    href="https://drive.google.com/file/d/1XmeZuDogdmDbcOV96qiaQWtt79HA-FxP/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    My Resume
                  </a>
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </section>

        <section id="about" className="py-16 md:py-24 bg-card border-y">
           <ScrollAnimation>
            <div className="container grid md:grid-cols-5 gap-10 items-center">
              <div className="md:col-span-3 space-y-6">
                <div className="flex items-center gap-4">
                  <User className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    About Me
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground">
                  {personalInfo.bio}
                </p>
              </div>
              <div className="md:col-span-2 flex flex-wrap justify-center gap-3">
                {skills.slice(0, 12).map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-4 py-2 text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </section>

        <section id="experience" className="py-16 md:py-24">
           <ScrollAnimation>
            <div className="container">
              <div className="mx-auto max-w-4xl text-center mb-12">
                <div className="flex items-center justify-center gap-4">
                  <Briefcase className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    My Professional Journey
                  </h2>
                </div>
                <p className="mt-4 text-lg text-muted-foreground">
                  A timeline of my professional experience and growth.
                </p>
              </div>
              <div className="relative mt-10 max-w-5xl mx-auto">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="relative flex items-start justify-between w-full mb-12 group"
                  >
                    <div
                      className={`w-5/12 ${
                        index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'
                      }`}
                    >
                      <p className="text-sm text-muted-foreground">
                        {exp.period}
                      </p>
                      <h3 className="text-xl font-bold mt-1">{exp.title}</h3>
                      <p className="text-md text-primary">{exp.company}</p>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full z-10 border-4 border-background transition-transform duration-300 group-hover:scale-125"></div>
                    <div
                      className={`w-5/12 ${
                        index % 2 === 0 ? 'pl-8' : 'pr-8'
                      }`}
                    >
                      <ul className="list-disc list-inside text-muted-foreground space-y-2">
                         {exp.responsibilities.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </section>

        <section id="education" className="py-16 md:py-24 bg-card border-y">
           <ScrollAnimation>
            <div className="container">
              <div className="mx-auto max-w-4xl text-center mb-12">
                 <div className="flex items-center justify-center gap-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    My Academic Background
                  </h2>
                </div>
                <p className="mt-4 text-lg text-muted-foreground">
                  My educational milestones and key projects.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
                {education.map((edu, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <GraduationCap className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {edu.period}
                      </p>
                      <h3 className="text-xl font-bold mt-1">{edu.degree}</h3>
                      <p className="text-md text-primary">{edu.institution}</p>
                      {edu.projects && (
                        <ul className="mt-4 list-disc list-inside text-muted-foreground space-y-2">
                          {edu.projects.map((project, i) => (
                            <li key={i}>{project}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </section>

        <section id="portfolio" className="py-16 md:py-24">
           <ScrollAnimation>
            <div className="container">
              <div className="mx-auto max-w-4xl text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  My Work
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  A selection of my projects.
                </p>
              </div>
              <GitHubProjects />
            </div>
          </ScrollAnimation>
        </section>

        <section
          id="contact"
          className="py-16 md:py-24 text-center bg-card border-t"
        >
           <ScrollAnimation>
            <div className="container">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Got a Vision? Let's Bring It to Life!
              </h2>
              <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
                I'm always excited to collaborate on new projects. Feel free to
                reach out.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" variant="outline" className="text-lg">
                  <a href={`mailto:${personalInfo.email}`}>
                    {personalInfo.email}{' '}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <p className="text-center text-sm md:text-left">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All Rights
            Reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-6 w-6 hover:opacity-80 transition-opacity" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6 hover:opacity-80 transition-opacity" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import {
  personalInfo,
  skills,
  socialLinks,
  experiences,
  education,
  hobbies,
  skillCategories,
  quickFacts,
  languages,
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
  Menu,
  Heart,
  TrendingUp,
  MapPin,
  Calendar,
  Award,
  BookOpen,
} from 'lucide-react';
import GitHubProjects from '@/components/github-projects';
import { ScrollAnimation } from '@/components/scroll-animation';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';


const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M16.6 14.2c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.7-.8.9-.1.1-.3.1-.5.1-.2 0-.9-.3-1.6-1-.6-.5-1-1.1-1.2-1.3-.1-.2 0-.3.1-.4.1-.1.2-.2.3-.3.1-.1.2-.2.2-.4.1-.1 0-.3-.1-.4-.1-.1-.6-1.4-.8-1.9s-.4-.5-.6-.5h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2 1 2.4c.1.1 1.5 2.3 3.6 3.2.5.2.8.3 1.1.4.5.1 1 .1 1.3.1.4-.1.8-.2 1.5-.7.2-.2.4-.4.6-.6.2-.3.3-.5.4-.7.1-.2 0-.4-.1-.5l-.1-.1zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18.2c-4.5 0-8.2-3.7-8.2-8.2S7.5 3.8 12 3.8s8.2 3.7 8.2 8.2-3.7 8.2-8.2 8.2z" />
  </svg>
);


export default function Home() {
  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#portfolio', label: 'Portfolio' },
  ];
  
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground font-sans">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Code className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">{personalInfo.name}</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/60 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button asChild>
              <a href="#contact">Contact</a>
            </Button>
          </nav>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 py-6">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <a
                      href={link.href}
                      className="text-lg font-medium text-foreground hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <Button asChild>
                    <a href="#contact">Contact</a>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>

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
                src="/83f0d932-ed21-4727-8dd0-4de8c2af6785.jpeg"
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
                    href="https://drive.google.com/file/d/12bEJeHuBAM1P0kcg8TmGnGBx6o4uoyH-/view"
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
            <div className="container">
              <div className="grid lg:grid-cols-3 gap-12 items-start">
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-center gap-4">
                    <User className="h-8 w-8 text-primary" />
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                      About Me
                    </h2>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    {personalInfo.bio}
                  </p>
                  
                  <div className="pt-6">
                      <h3 className="text-2xl font-bold tracking-tighter md:text-3xl mb-8">My Skills & Expertise</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                          {skillCategories.map((category) => (
                              <Card key={category.title} className="text-left bg-background/50 hover:shadow-lg transition-shadow">
                                  <CardHeader className="flex flex-row items-center gap-4 pb-4">
                                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                          {category.icon}
                                      </div>
                                      <CardTitle className="text-xl">{category.title}</CardTitle>
                                  </CardHeader>
                                  <CardContent>
                                      <div className="flex flex-wrap gap-2">
                                          {category.skills.map((skill) => (
                                              <Badge key={skill} variant="secondary">{skill}</Badge>
                                          ))}
                                      </div>
                                  </CardContent>
                              </Card>
                          ))}
                      </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <h3 className="text-2xl font-bold tracking-tighter">Quick Facts</h3>
                  <div className="space-y-6">
                    {quickFacts.map((fact) => (
                      <Card key={fact.label} className="bg-background/50">
                        <CardContent className="p-6 flex flex-col items-center text-center gap-2">
                          <div className="p-3 bg-primary/10 rounded-full text-primary mb-2">
                            {fact.icon}
                          </div>
                          <p className="text-3xl font-bold text-primary">{fact.value}</p>
                          <p className="text-muted-foreground">{fact.label}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <Card className="bg-background/50">
                    <CardHeader>
                      <CardTitle>Languages</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {languages.map(lang => (
                          <li key={lang.name} className="flex justify-between items-center">
                            <span>{lang.name}</span>
                            <span className="text-primary font-semibold">{lang.level}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="bg-background/50">
                    <CardHeader>
                      <CardTitle>Interests</CardTitle>
                    </CardHeader>
                    <CardContent>
                       <ul className="space-y-3">
                        {hobbies.map(hobby => (
                          <li key={hobby.name} className="flex items-center gap-3">
                            <div className="text-primary">{hobby.icon}</div>
                            <span>{hobby.name}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </section>


        <section id="experience" className="py-16 md:py-24">
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
            <div className="relative max-w-5xl mx-auto">
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
              {experiences.map((exp, index) => (
                <ScrollAnimation key={index} className="mb-12">
                  <div className="relative pl-12 md:pl-16 group">
                     <div className="absolute left-0 top-1.5 w-6 h-6 bg-primary rounded-full z-10 border-4 border-background flex items-center justify-center">
                       <Briefcase className="w-3 h-3 text-primary-foreground"/>
                     </div>
                    <Card className="transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl">
                      <div className="p-6">
                        <div className="flex flex-col md:flex-row justify-between md:items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold">{exp.title}</h3>
                            <p className="text-md text-primary font-semibold">{exp.company}</p>
                          </div>
                          <div className="text-sm text-muted-foreground mt-2 md:mt-0 md:text-right">
                             {exp.jobType && <Badge className="mb-2">{exp.jobType}</Badge>}
                             <div className="flex items-center gap-2">
                               <Calendar className="w-4 h-4" />
                               <span>{exp.period}</span>
                             </div>
                             {exp.location && 
                               <div className="flex items-center gap-2 mt-1">
                                 <MapPin className="w-4 h-4" />
                                 <span>{exp.location}</span>
                               </div>
                             }
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-6">{exp.description}</p>
                        
                        <div>
                          <h4 className="flex items-center text-lg font-semibold mb-3">
                            <TrendingUp className="mr-2 text-primary" /> Key Achievements
                          </h4>
                          <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            {exp.responsibilities.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>

                        {exp.technologies && exp.technologies.length > 0 && (
                          <div className="mt-6">
                            <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, i) => (
                                <Badge key={i} variant="secondary">{tech}</Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </Card>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
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

        <section id="portfolio" className="py-16 md:py-24 bg-card border-y">
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
          className="py-16 md:py-24 text-center border-t"
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
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="h-6 w-6 hover:opacity-80 transition-opacity" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

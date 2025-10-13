import { Compass, Gamepad2, Tv, Plane, TrendingUp, Briefcase, Lightbulb, BarChart, Server, Award, Heart, BookOpen, UserCheck, Languages } from 'lucide-react';
import type { ReactElement } from 'react';

const BilliardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" fill="black" />
        <circle cx="12" cy="12" r="3" fill="white" />
        <text x="12" y="14.5" fill="black" fontSize="4" textAnchor="middle" fontWeight="bold">8</text>
    </svg>
);

const CricketIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12.15 12.15a2.08 2.08 0 0 0-2.3,0L2.1,19.9a2.08 2.08 0 0 0,0,2.3l.3.3a2.08 2.08 0 0 0,2.3,0,l7.75-7.75" />
        <path d="m15 5-3 3" />
        <path d="M22 2l-3.5 3.5" />
        <circle cx="14" cy="10" r="3" />
    </svg>
)


export const personalInfo = {
  name: "Rafi Mohammad Hasib",
  title: "Professional Business Developer & Software Engineer",
  bio: "Motivated and detail-oriented professional with a background in computer science and hands-on experience in business development, software sales, and digital marketing. Skilled in client communication, CRM tools, quality testing, and content creation. Confident in managing meetings, supporting teams, and helping businesses grow through practical and user-friendly solutions.",
  email: "rafimdhasib@gmail.com",
};

export const skills = [
  "Business Development",
  "Software Sales",
  "Digital Marketing",
  "Client Communication",
  "CRM Tools",
  "Quality Testing",
  "Content Creation",
  "React & Next.js",
  "Node.js",
  "Project Management",
  "SQL & NoSQL Databases",
  "C",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "Manual Testing",
  "MySQL",
  "Technical Support",
  "MS Office",
  "Photoshop",
  "Video Editing",
  "Corporate Sales",
  "IT Consultation",
];

export const skillCategories = [
    {
        title: "Business & Sales",
        icon: <Briefcase className="h-6 w-6" />,
        skills: ["Business Development", "Software Sales", "Client Communication", "Corporate Sales", "IT Consultation", "Lead Generation", "Negotiation"],
    },
    {
        title: "Development",
        icon: <Lightbulb className="h-6 w-6" />,
        skills: ["React & Next.js", "Node.js", "JavaScript", "Python", "HTML/CSS", "SQL & NoSQL", "Firebase", "REST APIs"],
    },
    {
        title: "Marketing & Content",
        icon: <BarChart className="h-6 w-6" />,
        skills: ["Digital Marketing", "Content Creation", "SEO", "Photoshop", "Video Editing", "Social Media Management", "Ad Campaigns"],
    },
    {
        title: "IT & Support",
        icon: <Server className="h-6 w-6" />,
        skills: ["Technical Support", "Quality Testing", "Manual Testing", "CRM Tools", "Project Management", "System Audits", "Troubleshooting"],
    },
]

export const experiences = [
    {
        company: "Euro IT",
        period: "July 2025 - Present",
        title: "Business Developer and Assistant Software Engineer",
        jobType: "Full-time",
        location: "Dhaka, Bangladesh",
        description: "Driving growth by architecting strategic business plans, forging key client relationships, and ensuring product excellence from conception to delivery.",
        responsibilities: [
            "Architected and executed strategic plans to capture new market opportunities, consistently exceeding sales targets.",
            "Forged and nurtured key client partnerships through expert negotiation and solution-oriented strategies, resulting in a 30% increase in repeat business.",
            "Optimized the full sales pipeline using advanced CRM tools, enhancing lead conversion rates and streamlining sales operations.",
            "Led the end-to-end lifecycle of client websites, from initial strategy and development to deployment, ensuring final products exceeded expectations.",
            "Championed software quality by implementing rigorous manual testing protocols that identified and resolved critical bugs before launch.",
        ],
        technologies: ["CRM Software", "Manual Testing", "Content Strategy", "Client Relationship Management"]
    },
    {
        company: "Lnkits Technology",
        period: "September 2024 - May 2025",
        title: "Business Development Executive",
        jobType: "Full-time",
        location: "Dhaka, Bangladesh",
        description: "Played a pivotal role in expanding the company's client base through strategic outreach and solution-oriented sales strategies.",
        responsibilities: [
             "Drove client acquisition by diagnosing client needs and delivering tailored, high-impact service presentations that sealed deals.",
             "Built and sustained powerful client relationships through on-site consultations and strategic, value-driven proposals.",
             "Mastered HubSpot CRM to manage the entire sales funnel, delivering actionable insights that improved team performance.",
             "Guaranteed exceptional client satisfaction by providing proactive, thoughtful support and follow-up communication.",
             "Spearheaded collaboration across technical and sales teams to ensure seamless service delivery and alignment with client objectives.",
        ],
        technologies: ["HubSpot CRM", "Sales Strategy", "Client Acquisition", "Team Collaboration"]
    },
    {
        company: "Softifybd Limited",
        period: "October 2023 - August 2024",
        title: "IT Sales and Support Engineer",
        jobType: "Full-time",
        location: "Dhaka, Bangladesh",
        description: "Specialized in translating client business challenges into tangible software solutions while ensuring product quality.",
        responsibilities: [
            "Translated complex client business challenges into robust, scalable software solutions through in-depth consultations.",
            "Authored and presented compelling, high-stakes proposals that clearly articulated service value and secured major contracts.",
            "Delivered best-in-class technical support post-sale, ensuring high client retention and long-term product adoption.",
            "Upheld stringent quality standards by executing meticulous manual testing, which significantly reduced post-launch issues.",
            "Utilized CRM data to generate strategic insights, optimizing sales processes and enhancing team-wide client communication.",
        ],
        technologies: ["CRM", "Manual Testing", "Technical Support", "Sales Presentations"]
    },
    {
        company: "INovex Idea Solution Limited",
        period: "May 2023 - October 2023",
        title: "Sales and Marketing Executive (Software)",
        jobType: "Full-time",
        location: "Dhaka, Bangladesh",
        description: "Contributed to business growth by aligning marketing efforts with sales strategies and ensuring product readiness.",
        responsibilities: [
            "Executed high-impact social media campaigns that drove a 40% increase in user engagement and lead generation.",
            "Ensured flawless app performance by conducting rigorous pre-launch testing, resulting in a seamless user experience at launch.",
            "Served as a vital bridge in client meetings, expertly translating business needs into actionable technical requirements.",
            "Cultivated strong, trust-based client relationships that became a cornerstone of sustained business growth and referrals.",
        ],
        technologies: ["Social Media Marketing", "App Testing", "Client Relations"]
    },
    {
        company: "Digital Marketing Solution (Pvt.) Limited",
        period: "November 2022 - April 2023",
        title: "Marketing Executive",
        jobType: "Full-time",
        location: "Dhaka, Bangladesh",
        description: "Focused on enhancing digital presence and user engagement through targeted marketing and website optimization.",
        responsibilities: [
            "Boosted website performance and UX by conducting comprehensive site audits and implementing critical, data-driven enhancements.",
            "Managed and optimized Facebook ad campaigns with a focus on maximizing ROI, achieving a 25% reduction in cost-per-acquisition.",
            "Developed compelling ad copy and website content, implementing foundational SEO that lifted organic search rankings by 15%.",
            "Strengthened community presence by executing targeted local SEO strategies that increased local search visibility.",
        ],
        technologies: ["SEO", "Facebook Ads", "Content Creation", "Website Audits"]
    }
];

export const education = [
    {
        institution: "East West University",
        degree: "Bachelor of Science in Computer Science and Engineering",
        period: "09/2016 - 12/2021",
        projects: [
            "Thesis Project: Movie Recommendation System",
            "Web Project: Medicine Store Management System",
            "Research Paper: Social and Professional Issues in Computing"
        ]
    },
    {
        institution: "Dhaka Imperial College",
        degree: "Higher Secondary Certificate (H.S.C.) | Science",
        period: "04/2014 - 07/2016"
    },
    {
        institution: "Faizur Rahman Ideal Institute",
        degree: "Secondary School Certificate (S.S.C.) | Science",
        period: "2006 - 2014"
    }
];

type Hobby = {
    name: string;
    icon: ReactElement;
};

export const hobbies: Hobby[] = [
    { name: "Exploring", icon: <Compass size={24} /> },
    { name: "Gaming", icon: <Gamepad2 size={24} /> },
    { name: "Billiard", icon: <BilliardIcon /> },
    { name: "Cricket", icon: <CricketIcon /> },
    { name: "Movies & TV", icon: <Tv size={24} /> },
    { name: "Travel & Food", icon: <Plane size={24} /> }
];


export const socialLinks = {
  github: "https://github.com/rafimohammadhasib",
  linkedin: "https://linkedin.com/in/rafimohammadhasib",
  whatsapp: "https://wa.me/8801521112363"
}

export const quickFacts = [
  {
    value: "2+",
    label: "Years of Experience",
    icon: <Award size={24} />
  },
  {
    value: "10+",
    label: "Projects Completed",
    icon: <BookOpen size={24} />
  },
  {
    value: "25+",
    label: "Technologies Mastered",
    icon: <UserCheck size={24} />
  }
];

export const languages = [
  {
    name: "English",
    level: "Professional"
  },
  {
    name: "Bengali",
    level: "Native"
  },
  {
    name: "Hindi",
    level: "Conversational"
  }
];

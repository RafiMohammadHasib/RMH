import { Compass, Gamepad2, Tv, Plane, TrendingUp } from 'lucide-react';
import type { ReactElement } from 'react';

const BilliardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" fill="black" />
        <circle cx="12" cy="12" r="3" fill="white" />
        <text x="12" y="14.5" fill="black" fontSize="4" textAnchor="middle" fontWeight="bold">8</text>
    </svg>
);

const CricketIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

export const experiences = [
    {
        company: "Euro IT",
        period: "July 2025 - Present",
        title: "Business Developer and Assistant Software Engineer",
        jobType: "Full-time",
        location: "Dhaka, Bangladesh",
        description: "Driving growth by architecting strategic business plans, forging key client relationships, and ensuring product excellence from conception to delivery.",
        responsibilities: [
            "Closed deals by identifying client needs, presenting targeted solutions, and securing business through strategic negotiations.",
            "Strengthened client retention by conducting proactive on-site visits and ensuring consistent, high-quality follow-up communication.",
            "Managed the entire sales pipeline using advanced CRM software, optimizing for efficiency and growth.",
            "Oversaw the full lifecycle of client websites, from content strategy to final deployment.",
            "Upheld software quality by performing rigorous manual testing to identify and eliminate bugs pre-launch.",
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
            "Secured new business by engaging prospective clients, diagnosing their technical needs, and delivering persuasive service presentations.",
            "Built and maintained strong client partnerships through strategic on-site consultations and solution-oriented proposals.",
            "Leveraged HubSpot CRM to meticulously track the full sales lifecycle, from initial contact to deal closure.",
            "Guaranteed exceptional client satisfaction through persistent and thoughtful communication and support.",
            "Collaborated with cross-functional teams to ensure seamless service delivery and alignment with client goals."
        ],
        technologies: ["HubSpot CRM", "Sales Strategy", "Client Acquisition", "Team Collaboration"]
    },
    {
        company: "Softifybd Limited",
        period: "October 2023 - August 2024",
        title: "Sales and Marketing Specialist (Software)",
        jobType: "Full-time",
        location: "Dhaka, Bangladesh",
        description: "Specialized in translating client business challenges into tangible software solutions while ensuring product quality.",
        responsibilities: [
            "Closed new business by leading client consultations, diagnosing challenges, and architecting tailored software solutions.",
            "Crafted and delivered customized proposals that clearly articulated the value and ROI of our software services.",
            "Provided exemplary after-sales technical support to ensure client success and long-term retention.",
            "Maintained high software quality standards by conducting detailed manual testing to identify and resolve issues.",
            "Utilized CRM tools to generate key insights, informing team strategy and improving client communication."
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
            "Executed targeted social media campaigns that successfully promoted company services and boosted engagement.",
            "Ensured optimal app performance by conducting thorough pre-launch testing to guarantee a seamless user experience.",
            "Acted as a key liaison in client meetings, translating their requirements into actionable product recommendations.",
            "Forged strong client relationships built on trust, which fueled sustained business growth."
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
            "Improved website functionality and user experience by conducting detailed site audits and implementing key enhancements.",
            "Managed and optimized Facebook ad campaigns to maximize reach, engagement, and conversion rates.",
            "Developed compelling ad copy and website content, implementing foundational SEO to boost online visibility.",
            "Strengthened local search presence by executing effective local SEO and content strategies."
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
    { name: "Exploring", icon: <Compass size={32} /> },
    { name: "Gaming", icon: <Gamepad2 size={32} /> },
    { name: "Billiard", icon: <BilliardIcon /> },
    { name: "Cricket", icon: <CricketIcon /> },
    { name: "Movies & TV", icon: <Tv size={32} /> },
    { name: "Travel & Food", icon: <Plane size={32} /> }
];


export const socialLinks = {
  github: "https://github.com/rafimohammadhasib",
  linkedin: "https://linkedin.com/in/rafimohammadhasib",
  whatsapp: "https://wa.me/8801521112363"
}

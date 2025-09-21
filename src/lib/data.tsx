
import { Compass, Gamepad2, Tv, Plane } from 'lucide-react';
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
        <path d="M12.15 12.15a2.08 2.08 0 0 0-2.3,0L2.1,19.9a2.08 2.08 0 0 0,0,2.3l.3.3a2.08 2.08 0 0 0,2.3,0l7.75-7.75" />
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
        responsibilities: [
            "Spearheaded client acquisition by identifying business needs, presenting targeted service solutions, and successfully closing deals through strategic meeting arrangements.",
            "Cultivated and solidified client relationships through proactive on-site visits and dedicated follow-up communication, ensuring high levels of satisfaction.",
            "Drove sales and managed client pipelines effectively using advanced CRM software.",
            "Owned the end-to-end process of content strategy and website development for key clients.",
            "Ensured product excellence by conducting rigorous manual testing on software and websites.",
            "Architected and executed comprehensive business plans to drive strategic growth."
        ]
    },
    {
        company: "Lnkits Technology",
        period: "September 2024 - May 2025",
        title: "Business Development Executive",
        responsibilities: [
            "Drove business growth by proactively engaging new and existing clients to diagnose their needs and deliver compelling software service presentations.",
            "Forged strong client partnerships and secured business deals through strategic on-site consultations and solution-oriented proposals.",
            "Managed the full sales lifecycle with HubSpot CRM, ensuring meticulous tracking of meetings, contacts, and deal progression.",
            "Ensured exceptional client support and follow-through via persistent and thoughtful communication.",
            "Collaborated across teams to guarantee seamless service delivery and client satisfaction.",
            "Contributed to strategic planning sessions to identify and capitalize on new business opportunities."
        ]
    },
    {
        company: "Softifybd Limited",
        period: "October 2023 - August 2024",
        title: "Sales and Marketing Specialist (Software)",
        responsibilities: [
            "Led client consultations to diagnose business challenges and architect tailored software solutions.",
            "Secured new business by orchestrating meetings and delivering customized proposals that showcased the value of our software services.",
            "Maintained client engagement and resolved concerns through diligent follow-up communications.",
            "Provided exemplary after-sales technical support to ensure long-term client satisfaction and retention.",
            "Upheld software quality standards by performing detailed manual testing to identify and report bugs.",
            "Leveraged CRM tools to manage client data and communications, providing key insights to inform team strategy."
        ]
    },
    {
        company: "INovex Idea Solution Limited",
        period: "May 2023 - October 2023",
        title: "Sales and Marketing Executive (Software)",
        responsibilities: [
            "Executed targeted social media campaigns that successfully promoted company services and drove engagement.",
            "Ensured optimal app performance and user experience by conducting thorough pre-launch testing.",
            "Acted as a key liaison in client meetings, translating their needs into actionable product recommendations.",
            "Built and nurtured strong client relationships, establishing a foundation of trust that fueled business growth."
        ]
    },
    {
        company: "Digital Marketing Solution (Pvt.) Limited",
        period: "November 2022 - April 2023",
        title: "Marketing Executive",
        responsibilities: [
            "Improved website functionality and user experience by conducting detailed site audits and identifying key areas for enhancement.",
            "Managed and optimized Facebook ad campaigns to maximize reach and audience engagement.",
            "Developed compelling ad copy and website content, implementing foundational SEO principles to boost visibility.",
            "Strengthened local search presence by executing effective local SEO strategies."
        ]
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

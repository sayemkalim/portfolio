import { Code2, Database, Layout, Smartphone, Server, Wrench, Github, Linkedin, Mail } from 'lucide-react';

export const PROFILE = {
    name: "Md Sayem Kalim",
    title: "Frontend Developer | Full Stack Developer",
    summary: "Frontend & Full Stack Developer building scalable web and mobile applications. Specializing in high-performance React & Node.js ecosystems.",
    about: "I am a passionate developer with a strong foundation in modern web technologies. My journey involves building scalable architectures, optimizing frontend performance, and crafting intuitive user experiences. I have real-world experience as an intern where I've contributed to full-stack applications and mobile solutions.",
    email: "sayemkalim@gmail.com",
    resumeLink: "https://drive.google.com/file/d/18wGHbtz6XHEtCcyuumukznnJnEvPffPP/view?usp=sharing",
    socials: {
        github: "https://github.com/sayemkalim",
        linkedin: "https://www.linkedin.com/in/md-sayem-kalim-75a871185/"
    }
};

export const SKILLS = [
    {
        category: "Frontend Development",
        icon: Layout,
        items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"]
    },
    {
        category: "Backend Development",
        icon: Server,
        items: ["Node.js", "Express.js", "REST APIs", "Authentication (JWT, OAuth)"]
    },
    {
        category: "Mobile Development",
        icon: Smartphone,
        items: ["React Native", "Expo", "Mobile UI/UX"]
    },
    {
        category: "Database",
        icon: Database,
        items: ["MongoDB", "Firebase", "Mongoose"]
    },
    {
        category: "Tools & DevOps",
        icon: Wrench,
        items: ["Git & GitHub", "Swagger", "Postman", "Vite",]
    }
];

export const PROJECTS = [
    {
        title: "Ads On Way",
        description: "A role-based web application for Meta and Google ad account ledger management, wallet tracking, and financial reporting.",
        tech: ["React.js", "Shadcn UI", "Chart.js", "TanStack Query"],
        features: [
            "Wallet & Ledger System",
            "Ad Account Management",
            "Financial Reports & Analytics"
        ],
        links: {
            github: "https://github.com/ragOP/adsonway-front-end",
            live: "https://adsonway-front-end.vercel.app"
        },
        color: "from-indigo-500 to-purple-500"
    },
    {
        title: "MJ Design",
        description: "A premium ethnic wear e-commerce website featuring secure authentication and seamless shopping experience.",
        tech: ["Next.js", "Tailwind CSS", "TanStack Query", "NextAuth"],
        features: [
            "Google Login Authentication",
            "Dynamic Product Catalog",
            "Secure Checkout Process"
        ],
        links: {
            github: "#",
            live: "https://mjdesign-fe.vercel.app"
        },
        color: "from-amber-500 to-rose-500"
    },
    {
        title: "Petcaart",
        description: "A modern e-commerce platform for pet supplies featuring OTP-based authentication and a seamless user experience.",
        tech: ["Next.js", "Tailwind CSS", "Shadcn UI", "TanStack Query"],
        features: [
            "OTP-based Authentication",
            "Advanced Search & Filtering",
            "User-friendly Interface"
        ],
        links: {
            github: "#",
            live: "https://www.petcaart.com/"
        },
        color: "from-emerald-500 to-teal-500"
    },
    {
        title: "CRM Dashboard",
        description: "A comprehensive dashboard for managing agent commissions, deposit records, and generating financial reports.",
        tech: ["React.js", "Tailwind CSS", "MongoDB"],
        features: [
            "Agent Commission Management",
            "Real-time Reports & Analytics",
            "Deposit & Refund Tracking"
        ],
        links: {
            github: "https://github.com/sayemkalim/mva",
            live: "https://mva-two.vercel.app"
        },
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "Pet E-Commerce App",
        description: "A cross-platform mobile application for pet supplies with integrated payment gateways.",
        tech: ["React Native", "Redux", "Firebase", "Razorpay"],
        features: [
            "Secure payment processing",
            "Product categorization & search",
            "Order tracking system"
        ],
        links: {
            github: "#",
            live: "#"
        },
        color: "from-rose-400 to-orange-300"
    },

];

export const EXPERIENCE = [
    {
        role: "Full Stack Developer Intern",
        company: "Najcode Private Limited",
        duration: "2025 - Present",
        description: "Contributing to the development of scalable web and mobile applications using React Native, Next.js, and React.js. Focused on optimizing frontend performance and implementing secure authentication flows."
    },
    {
        role: "Frontend Developer Intern",
        company: "Sewzee",
        duration: "2023 - 2024",
        description: "Led the migration of legacy code to React, improved UI/UX consistency, and reduced page load times by 40%."
    }
];

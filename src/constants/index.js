import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  vedavaani,
  hmari,
  initiator,
  aicte,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  shell,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Learning-Focused 3D Integration (Three.js)",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI Prototyping & Design Integration",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Volunteer",
    company_name: "Hamari Pahchan",
    icon: hmari,
    iconBg: "#383E56",
    date: "Aug 2023 - Sep 2023",
    points: [
      "Designing posters and creating content for social media.",
      "Assisting with crowdfunding initiatives and digital media marketing.",
      "Working independently on a project as a social entrepreneur.",
      "Drafting and filing legal documents related to the organization.",
    ],
  },
  {
    title: "Front-end Developer Intern",
    company_name: "Initiatorz",
    icon: initiator,
    iconBg: "#383E56",
    date: "Aug 2024 - October 2024",
    points: [
      "Built and maintained web interfaces using React.js, focusing on clean UI, performance, and component reusability.",
      "Collaborated closely with a small, agile team of friends to brainstorm, design, and develop features from the ground up.",
      "Implemented responsive designs and ensured compatibility across modern browsers and devices.",
      "Took part in regular code reviews, knowledge sharing, and problem-solving sessions to continuously improve code quality and team workflow.",
    ],
  },
  {
    title: "Artificial Intelligence Intern",
    company_name: "All India Council for Technical Education (AICTE)",
    icon: aicte,
    iconBg: "#E6DEDD",
    date: "Feb 2025 - March 2025",
    points: [
      "Developed and maintained an AI-based medical diagnosis system using Python and machine learning technologies.",
      "Used publicly available medical datasets to train and evaluate diagnostic models for disease prediction.",
      "Implemented data preprocessing and model training workflows, ensuring efficiency and reliability in predictions.",
      "Participated in code reviews and shared insights to improve algorithm performance and system scalability.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Vedavaani",
    description:
      "Vedavanni is an AI-powered healthcare platform that combines Ayurvedic wisdom with modern medical science to deliver smart, personalized care. It offers features like AI-driven health assistance, emergency support with real-time location sharing, nearby hospital discovery, and personalized health tracking with medicine recommendations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: vedavaani,
    source_code_link: "https://github.com/sassius/Health-Care-Ai",
  },
  {
    name: "Custom POSIX Shell",
    description:
      "POSIX-compliant shell that allows users to run external commands, execute built-in commands such as cd, pwd, echo, and exit, perform input and output redirection using >, <, and >>, utilize auto-completion for faster command entry, and manage background processes and jobs through process management and job control.",
    tags: [
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "System Programming",
        color: "blue-text-gradient",
      },
      {
        name: "CLI",
        color: "pink-text-gradient",
      },
    ],
    image: shell,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

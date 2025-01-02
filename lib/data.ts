import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import sportsreddit from "@/public/sportsreddit.png";
import pdfImg from "@/public/pdf.png";
import geogptImg from "@/public/geogpt.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Waymo",
    location: "Software Engineer Intern",
    description:
      [
        "Worked on the Fleet Infrastructure Team",
      ],
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2024 - Aug 2024",
  },
  {
    title: "BeetSoft",
    location: "Software Development Engineer Intern",
    description: [
      "Implemented the API for “Golden Hours” function that increase revenue by 35% for a voting system using Springboot",
      "Streamlined the CI/CD process by building 18 graphs using Grafana integrating Prometheus, Docker, and Micrometer",
      "Deployed a notification scheme for the system, saving ∼$1,000 in server costs by using JHipster, Angular, and Postman",
      "Added the countdown and voting instruction feature for mobile view reaching 500,000+ users by Angular & TypeScript",
     ],
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2023 - Aug 2023",
  },
  {
    title: "FPT Information System",
    location: "Software Engineer Intern",
    description: [
      "Upgraded 2 API modules in base API repository of 40+ projects by PHP & PostgreSQL in Linux operating system",
      "Improved test coverage to 100% by performing unit testing for ∼ 30 API endpoints using Golang and Gin framework",
      "Designed the database schema for an internal time tracking tool using by 100+ employees in the company using SQL",
      "Set up Gitlab version control for a team of 5, gained exposure to Docker & Kubernetes, and engaged in Scrum activities",
     ],
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - Jul 2023",
  },
  {
    title: "Hajim School of Engineering",
    location: "Teaching Assistant",
    description:[
     "Courses: Database Systems (Spring 2024) and Data Structures and Algorithms (Fall 2023)",
     "Managed instructions for 100+ students and led ∼ 28 Agile-drive full-stack projects using HTML, CSS, PHP, MySQL, and JavaScript",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "PDF Chatbot",
    description: "A PDF Chatbot to answer questions about your uploaded PDF files!",
    tags: ["React", "OpenAI API", "AWS", "PineconeDB", "LangChain"],
    imageUrl: pdfImg,
  },
  {
    title: "GeoGPT",
    description:
      "A website to generate travel plans in any country in a week!",
    tags: ["React", "OpenAI API", "Express", "Leaflet.js"],
    imageUrl: geogptImg,
  },
  {
    title: "SportsReddit",
    description:
      "A backend API resembling Reddit for Sports post",
    tags: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy"],
    imageUrl: sportsreddit,
  },
] as const;

export const skillsData = [
  "Java",
  "Python",
  "JavaScript",
  "TypeScript",
  "PHP",
  "Golang",
  "Rest API",
  "Springboot",
  "Express",
  "Node.js",
  "Laravel",
  "Gin",
  "MongoDB",
  "Docker",
  "Prometheus",
  "Grafana",
  "Redis",
  "AWS",
  "Windows",
  "Linux",
  "PostgreSQL",
] as const;

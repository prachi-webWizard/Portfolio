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
  tesla,
  freespace,
  fortray,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  memoriesapp,
  chatbot,
  webProjects,
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "MERN Stack Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
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
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Full Stack Web Developer",
    company_name: "Fortray Global Services, London",
    icon: fortray,
    iconBg: "#E6DEDD",
    date: "Jun 2024 - Present",
    points: [
      "Collaborate with stakeholders to gather, analyze, and translate business requirements into technical specifications.",
      "Develop server-side logic, APIs, and RESTful web services using languages like Node.js.",
      "Implement security best practices to protect the website, optimize performance for speed and scalability.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Freespace, India",
    icon: freespace,
    iconBg: "#383E56",
    date: "June 2019 - May 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to peer developers.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Her ability to create beautiful, user-friendly websites that work seamlessly is a testament to your talent and dedication.",
    name: "Vivek Gupta",
    designation: "Software Engineer",
    company: "Freespace",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Her intuitive user interfaces and clean, efficient code make navigating websites a delightful experience. Appreciated!",
    name: "Deepak Jain",
    designation: "Senior Software Engineer",
    company: "Freespace",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Keep up the great work in delivering a fast and responsive website! Her commitment to optimizing performance has not gone unnoticed.",
    name: "Vaishnavi T",
    designation: "Senior Manager",
    company: "ITLH",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Memories App",
    description:
      "The App is called Memories and it is a simple social media app that allows users to post interesting events that happened in their lives.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
    ],
    image: memoriesapp,
    source_code_link:
      "https://github.com/prachi-webWizard/memories-social-media-app/tree/main",
  },
  {
    name: "Chat Bot",
    description:
      "Chat application integrated with OpenAI allows us to chat with AI bot, AI code and AI assistance. This also works as a messaging app.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "reduxtoolkit",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "openAI",
        color: "orange-text-gradient",
      },
    ],
    image: chatbot,
    source_code_link: "https://github.com/prachi-webWizard/chat-bot",
  },
  {
    name: "20 Web Frontend Projects",
    description:
      "This project gets you build things from scratch and has some dynamic functionality from small games to expense tracker with no frameworks or libraries used, just pure basics!",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: webProjects,
    source_code_link:
      "https://github.com/prachi-webWizard/20-mini-frontend-projects",
  },
];

export { services, technologies, experiences, testimonials, projects };

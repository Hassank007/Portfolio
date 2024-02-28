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
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  fcc,
  coursera,
  udemy,
  github,
  nextjs,
  solidity,
  express,
  firebase,
  mysql,
  Dinemarket,
Portfolio,
Jobportal,
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
    title: "Front-end Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Developer",
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
    name: "nextjs",
    icon: nextjs,
  },
  {
    name: "express",
    icon: express,
  },
  {
    name: "solidity",
    icon: solidity,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "mysql",
    icon: mysql,
  },
];

const experiences = [
  {
    title: "freecodecamp",
    company_name: "HTML & CSS",
    icon: fcc,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "🎓 Certified by FreeCodeCamp in HTML and CSS, I've honed my skills in front-end development to create visually stunning and seamlessly functional web experiences. Through rigorous training and hands-on projects, I've mastered the intricacies of HTML structure and CSS styling, enabling me to craft responsive layouts and captivating designs. With this certification, backed by practical experience, I'm equipped to tackle diverse challenges in web development with confidence and precision.",
    ],
  },
  {
    title: "Udemy",
    company_name: "React & Nextjs",
    icon: udemy,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Certified by Udemy in React and Next.js, I've deepened my expertise in cutting-edge front-end development technologies. Through comprehensive coursework and hands-on exercises, I've mastered React's component-based architecture and Next.js's server-side rendering capabilities. Proficient in building dynamic and high-performance web applications, I leverage these skills to enhance user interactivity and experience. This certification not only demonstrates my commitment to staying current with the latest advancements in front-end development but also validates my ability to deliver innovative solutions that surpass client expectations.",
    ],
  },
  {
    title: "Web3 and Blockchain",
    company_name: "Solidity",
    icon: coursera,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Certified by Coursera in Web3 and Blockchain, I've gained expertise in decentralized technologies like blockchain fundamentals, smart contracts, and decentralized applications (DApps). With this certification, I'm equipped to build secure, transparent, and tamper-resistant solutions, contributing to the advancement of blockchain technology and its real-world applications.",
    ],
  },
  {
    title: "Github Global Campus",
    company_name: "Acknowledgement",
    icon: github,
    iconBg: "black",
    date: "Jan 2023 - Present",
    points: [
      "Recognized as a recipient of the GitHub Student Global Campus program, I've gained access to invaluable perks and resources. This acknowledgment underscores my commitment to leveraging cutting-edge tools and platforms to enhance my skills and contribute meaningfully to the global developer community.",
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
    name: "Dine Market",
    description:
      
"Presenting Dine Market: An e-commerce solution crafted during the PIAIC hackathon. Utilizing Next.js, React, TypeScript, and Tailwind CSS, it streamlines product listings, search, shopping cart features, and ensures a seamless user experience across all devices.",
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
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Dinemarket,
    source_code_link: "https://dine-market-bay.vercel.app/",
  },
  {
    name: "Job Finder",
    description:
      "Introducing Job Finder: A Next.js web application engineered with React, Tailwind CSS, MongoDB, and JWT validation. Designed for seamless user authentication, job posting, application tracking, and CV management. Optimized for local deployment and equipped with production-ready CV storage support.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: Jobportal,
    source_code_link: "https://job-portal-teal.vercel.app",
  },
  {
    name: "Portfolio",
    description:
      
"Utilizing React.js, Three.js, and React Three Fiber, our dynamic portfolio boasts customizable 3D elements and interactive sections. Integrated features like animated testimonials, a 3D Earth model in the contact section, and responsive design ensure an immersive user experience.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Portfolio,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

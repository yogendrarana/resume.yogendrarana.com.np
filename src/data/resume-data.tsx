import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Yogendra Rana",
  initials: "YR",
  location: "Pokhara, Nepal",
  locationLink: "https://www.google.com/maps/place/pokhara",
  about: "Full Stack Developer",
  summary: "Full stack web developer with nearly two years of experience building user interfaces and RESTful APIs. Proficient in JavaScript/TS and its frameworks like React, Next, Node, Express, and Nest. Also familiar with Go and its backend framework, Gin.",
  avatarUrl: " https://github.com/yogendrarana.png",
  personalWebsiteUrl: "https://www.yogendrarana.com.np/",
  contact: {
    email: "yogendrarana4321@gmail.com",
    tel: "+977 9825159891",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/yogendrarana",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yogendra-rana/",
        icon: LinkedInIcon,
      },
      {
        name: "Twitter",
        url: "https://twitter.com/yoogendra_rana",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Prithvi Narayan Campus, Pokhara, Gandaki, Nepal",
      degree: "Bachelor's Degree in Computer Science and Information Technology",
      start: "2018",
      end: "2023",
    },
    {
      school: "SOS Hermann Gmeiner Gandaki, Nepal",
      degree: "10+2 Science",
      start: "2018",
      end: "2016",
    },
  ],
  work: [
    {
      company: "Rangin Technology",
      link: "https://www.rangin.com.np/",
      badges: ["Hybrid"],
      title: "Full Stack Developer",
      logo: "",
      start: "May, 2023",
      end: "present",
      description:
        "Worked as a fullstack developer to create user interfaces in React.js and Next.js and REST APIs in Node.js, Express.js, and Nest.js. Technologies: JavaScript, TypeScript, React, Next.js, Node.js, Express.js, Nest.js, MongoDB, PostgreSQL, Docker, and Nginx.",
    },
    // {
    //   company: "Nipuna Prabidhik Sewa",
    //   link: "https://www.nipunasewa.com/",
    //   badges: ["On Site"],
    //   title: "React JS Developer",
    //   logo: "",
    //   start: "Jan, 2023",
    //   end: "July, 2023",
    //   description:
    //     "As a frontend developer, I built an admin panel for emart using React.js, Tailwind CSS, and Firebase. Technologies: React.js, Tailwind CSS, Firebase",
    // },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Go",
    "React",
    "Next",
    "Node",
    "Express",
    "Nest",
    "REST API",
    "GraphQL",
    "Socket.io",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Docker",
    "Nginx",
    "Ubuntu",
  ],
  projects: [
    {
      title: "Iphone Fix by XPF",
      techStack: ["HTML", "CSS", "JS"],
      description: "A website for a night club in Pokhara. Role: Frontend Development.",
      logo: "",
      link: {
        label: "www.iphonefixbyxpf.com",
        href: "https://www.iphonefixbyxpf.com/",
      },
    },
    {
      title: "Artsy Web Gallery",
      techStack: ["JavaScript/TS", "React.js", "Redux Toolkit", "Express.js", "Mongo", "JWT", "Stripe", "Khalti"],
      description: "A web platform for artists to showcase their work and connect with art lovers. Role: Fullstack Development.",
      logo: "",
      link: {
        label: "artsy-art-gallery.vercel.app",
        href: "https://artsy-art-gallery.vercel.app/",
      },
    },

    {
      title: "Catwalk Pokhara",
      techStack: ["HTML", "CSS", "JS"],
      description: "A website for a night club in Pokhara. Role: Integration of new features in already built project",
      logo: "",
      link: {
        label: "www.catwalkpokhara.com",
        href: "https://www.catwalkpokhara.com/",
      },
    },

    {
      title: "Swift Chat",
      techStack: ["Side Project", "Next.js", "Zustand", "Pusher", "Next Auth", "Framer Motion"],
      description: "A minimal web chat application. Role: Fullstack Development.",
      logo: "",
      link: {
        label: "swift-web-chat.vercel.app",
        href: "https://swift-web-chat.vercel.app/",
      },
    },
    {
      title: "Ecommerce Website",
      techStack: ["Side Project", "React.js", "Zustand", "Framer Motion"],
      description: "An ecommerce website with ui components like filter, slider, cart, payment form etc. Role: Frontend Development.",
      logo: "",
      link: {
        label: "react-web-ecommerce.vercel.app",
        href: "https://react-web-ecommerce.vercel.app/",
      },
    },
  ],
} as const;

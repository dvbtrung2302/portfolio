export const CATEGORY_TYPE: {[type: string]: string} = {
  all: "All",
  eCommerce: "E-Commerce",
  cxm: "CXM",
  dashboard: "Dashboard",
  entertainment: "Entertainment",
  education: "Education",
  landingPage: "Landing Page",
  design: "Design",
  other: "Other"
}

export const INFO = {
  name: "Dang Vo Bao Trung",
  avatar: "/images/info/avatar.jpeg",
  job: "I'm a Front-End developer",
  description: "I am Trung, web developer from Viet Nam. I have the desire to become a front‑end developer & web designer, I am passionate about building excellent website that improves the lives of those around me.",
  socials: [
    {
      id: 1,
      link: "https://www.instagram.com/dvbtrung_/",
      icon: "fab fa-instagram"
    },
    {
      id: 2,
      link: "https://www.facebook.com/baotrungne/",
      icon: "fab fa-facebook-f"
    },
    {
      id: 3,
      link: "https://www.youtube.com/channel/UCGeHjXwKETa3c26NF24npbA",
      icon: "fab fa-youtube"
    },
    {
      id: 4,
      link: "https://gitlab.com/dvbtrung2302",
      icon: "fab fa-gitlab"
    },
    {
      id: 5,
      link: "https://github.com/dvbtrung2302",
      icon: "fab fa-github"
    },
  ],
  skills: [
    { id: 1, name: "Web Development", percent: 90 },
    { id: 2, name: "Back-End Development", percent: 40, color: "#ff4c60" },
    { id: 3, name: "UI/UX Design", percent: 60, color: "#6c6ce5" },
  ],
  achivements: [
    { id: 1, name: "Year of \n experience", amount: "2+", icon: "fas fa-star" },
    { id: 2, name: "Projects \n completed", amount: "10+", icon: "fas fa-fire" },
    { id: 3, name: "Happy \n customers", amount: "5+", icon: "fas fa-users" },
    { id: 4, name: "Awards Won", amount: "0", icon: "fas fa-award" },
  ],
  techSkills: [
    { id: 1, imageSrc: "/images/skills/javascript.svg", name: "JavaScript" },
    { id: 2, imageSrc: "/images/skills/typescript.svg", name: "TypeScript" },
    { id: 3, imageSrc: "/images/skills/reactjs.svg", name: "ReactJS" },
    { id: 4, imageSrc: "/images/skills/nextjs.svg", name: "NextJS" },
    { id: 5, imageSrc: "/images/skills/html.svg", name: "HTML" },
    { id: 6, imageSrc: "/images/skills/css.svg", name: "CSS" },
    { id: 7, imageSrc: "/images/skills/jest.svg", name: "Jest" },
    { id: 8, imageSrc: "/images/skills/nodejs.svg", name: "NodeJS" }
  ],
  education: [
    { 
      id: 1, 
      time: "09/2018 - Present", 
      title: "Engineering Degree", 
      description: "Study Information Systems at University of Information Technology VNU-HCM.", 
      icon: "icon-graduation" 
    },
  ],
  works: [
    { 
      id: 1, 
      time: "04/2020 - 08/2020", 
      title: "Freelancer", 
      description: "Develop some projects as Freelancer Developer.",
      icon: "icon-briefcase" 
    },
    { 
      id: 2, 
      time: "08/2020 - Present", 
      title: "Front-End Developer", 
      description: "Work at Kenh Giai Phap Co. as a Front-End Developer.",
      icon: "icon-briefcase" 
    }
  ],
  projects: [
    {
      id: 1,
      name: "REshare",
      category: "eCommerce",
      logo: "/images/projects/reshare/logo.svg",
      description: "A technology platform that helps people donate and buy used clothes, simplifying a convenient and completely free living space.",
      technicals: ["TypeScript", "NextJS", "CSS Module"],
      link: "https://www.reshare.vn/",
      images: [
        { id: 1, src: "/images/projects/reshare/reshare-1.png", type: "desktop" },
        { id: 2, src: "/images/projects/reshare/reshare-2.png", type: "desktop" },
        { id: 3, src: "/images/projects/reshare/reshare-3.png", type: "desktop" },
        { id: 4, src: "/images/projects/reshare/reshare-4.png", type: "desktop" },
        { id: 5, src: "/images/projects/reshare/reshare-5.png", type: "desktop" },
        { id: 6, src: "/images/projects/reshare/reshare-6.png", type: "desktop" },
        { id: 7, src: "/images/projects/reshare/reshare-7.png", type: "desktop" },
        { id: 8, src: "/images/projects/reshare/reshare-8.png", type: "desktop" },
        { id: 9, src: "/images/projects/reshare/reshare-9.png", type: "desktop" },
        { id: 10, src: "/images/projects/reshare/reshare-10.png", type: "desktop" },
        { id: 11, src: "/images/projects/reshare/reshare-11.png", type: "desktop" },
        { id: 12, src: "/images/projects/reshare/reshare-12.png", type: "desktop" },
        { id: 13, src: "/images/projects/reshare/reshare-13.png", type: "mobile" },
        { id: 14, src: "/images/projects/reshare/reshare-14.png", type: "mobile" },
        { id: 15, src: "/images/projects/reshare/reshare-15.png", type: "mobile" },
        { id: 16, src: "/images/projects/reshare/reshare-16.png", type: "mobile" },
      ]
    },
    {
      id: 2,
      name: "Next CXM",
      category: "cxm",
      logo: "/images/projects/nextcxm/logo.svg",
      description: "A software to create customer segments, create marketing campaigns from customer data",
      technicals: ["TypeScript", "ReactJS", "SCSS"],
      images: [
        { id: 1, src: "/images/projects/nextcxm/nextcxm-1.png", type: "desktop" },
        { id: 2, src: "/images/projects/nextcxm/nextcxm-2.png", type: "desktop" },
        { id: 3, src: "/images/projects/nextcxm/nextcxm-3.png", type: "desktop" },
        { id: 4, src: "/images/projects/nextcxm/nextcxm-4.png", type: "desktop" },
        { id: 5, src: "/images/projects/nextcxm/nextcxm-5.png", type: "desktop" },
        { id: 6, src: "/images/projects/nextcxm/nextcxm-6.png", type: "desktop" },
      ]
    },
    {
      id: 3,
      name: "ReecoTech",
      category: "dashboard",
      logo: "/images/projects/reecotech/logo.png",
      description: "Admin dashboard of ReecoTech's system of collecting, storing, analyzing and distributing meteorological, hydrographic and environmental data.",
      technicals: ["ReactJS", "CSS", "Redux", "SocketIO"],
      images: [
        { id: 1, src: "/images/projects/reecotech/reecotech-1.png", type: "desktop" },
        { id: 2, src: "/images/projects/reecotech/reecotech-2.png", type: "desktop" },
        { id: 3, src: "/images/projects/reecotech/reecotech-3.png", type: "desktop" },
        { id: 4, src: "/images/projects/reecotech/reecotech-4.png", type: "desktop" },
        { id: 5, src: "/images/projects/reecotech/reecotech-5.png", type: "desktop" },
        { id: 6, src: "/images/projects/reecotech/reecotech-6.png", type: "desktop" },
        { id: 7, src: "/images/projects/reecotech/reecotech-7.png", type: "desktop" },
        { id: 8, src: "/images/projects/reecotech/reecotech-8.png", type: "desktop" },
      ]
    },
    {
      id: 4,
      name: "SFlix",
      category: "entertainment",
      logo: "/images/projects/sflix/logo.png",
      description: "Website to watch movies online for free",
      technicals: ["TypeScript", "NextJS", "SCSS"],
      images: [
        { id: 1, src: "/images/projects/sflix/sflix-1.png", type: "desktop" },
        { id: 2, src: "/images/projects/sflix/sflix-2.png", type: "desktop" },
        { id: 3, src: "/images/projects/sflix/sflix-3.png", type: "desktop" },
        { id: 4, src: "/images/projects/sflix/sflix-4.png", type: "desktop" },
        { id: 5, src: "/images/projects/sflix/sflix-5.png", type: "desktop" },
        { id: 6, src: "/images/projects/sflix/sflix-6.png", type: "desktop" },
        { id: 7, src: "/images/projects/sflix/sflix-7.png", type: "mobile" },
        { id: 8, src: "/images/projects/sflix/sflix-8.png", type: "mobile" },
        { id: 9, src: "/images/projects/sflix/sflix-9.png", type: "mobile" },
      ]
    },
    {
      id: 11,
      name: "FMovies",
      category: "entertainment",
      logo: "/images/projects/fmovies/logo.png",
      description: "Website to watch movies online for free",
      technicals: ["TypeScript", "NextJS", "SCSS"],
      images: [
        { id: 1, src: "/images/projects/fmovies/fmovies-1.png", type: "desktop" },
        { id: 2, src: "/images/projects/fmovies/fmovies-2.png", type: "desktop" },
        { id: 3, src: "/images/projects/fmovies/fmovies-3.png", type: "desktop" },
        { id: 4, src: "/images/projects/fmovies/fmovies-4.png", type: "desktop" },
        { id: 5, src: "/images/projects/fmovies/fmovies-5.png", type: "desktop" },
        { id: 6, src: "/images/projects/fmovies/fmovies-6.png", type: "mobile" },
        { id: 7, src: "/images/projects/fmovies/fmovies-7.png", type: "mobile" },
      ]
    },
    {
      id: 5,
      name: "tailieuthaynghia.com",
      category: "education",
      logo: "/images/projects/tailieuthaynghia/logo.svg",
      description: "Website sharing pdf, word documents of math, physics, chemistry",
      technicals: ["TypeScript", "NextJS", "CSS Module"],
      link: "https://tailieuthaynghia.com/",
      images: [
        { id: 1, src: "/images/projects/tailieuthaynghia/tailieuthaynghia-1.png", type: "desktop" },
        { id: 2, src: "/images/projects/tailieuthaynghia/tailieuthaynghia-2.png", type: "desktop" },
        { id: 3, src: "/images/projects/tailieuthaynghia/tailieuthaynghia-3.png", type: "desktop" },
        { id: 4, src: "/images/projects/tailieuthaynghia/tailieuthaynghia-4.png", type: "desktop" },
        { id: 5, src: "/images/projects/tailieuthaynghia/tailieuthaynghia-5.png", type: "desktop" },
        { id: 6, src: "/images/projects/tailieuthaynghia/tailieuthaynghia-6.png", type: "mobile" },
        { id: 7, src: "/images/projects/tailieuthaynghia/tailieuthaynghia-7.png", type: "mobile" },
      ]
    },
    {
      id: 6,
      name: "Digic",
      category: "landingPage",
      logo: "/images/projects/digic/logo.svg",
      description: "Website for renting services such as: domain name, cloud server, cloud hosting...",
      technicals: ["TypeScript", "NextJS", "CSS Module"],
      images: [
        { id: 1, src: "/images/projects/digic/digic-1.png", type: "desktop" },
        { id: 2, src: "/images/projects/digic/digic-2.png", type: "desktop" },
        { id: 3, src: "/images/projects/digic/digic-3.png", type: "desktop" },
        { id: 4, src: "/images/projects/digic/digic-4.png", type: "desktop" },
        { id: 5, src: "/images/projects/digic/digic-5.png", type: "desktop" },
        { id: 6, src: "/images/projects/digic/digic-6.png", type: "mobile" },
        { id: 7, src: "/images/projects/digic/digic-7.png", type: "mobile" },
      ]
    },
    {
      id: 7,
      name: "PickBazar",
      category: "eCommerce",
      logo: "/images/projects/pickbazar/logo.svg",
      description: "Website selling books, this project is developed for the purpose of learning ReactJS.",
      technicals: ["ReactJS", "CSS", "NodeJS", "MongoDB"],
      link: "https://dvbt-bookstore-demo.firebaseapp.com/",
      images: [
        { id: 1, src: "/images/projects/pickbazar/pickbazar-1.png", type: "desktop" },
        { id: 2, src: "/images/projects/pickbazar/pickbazar-2.png", type: "desktop" },
        { id: 3, src: "/images/projects/pickbazar/pickbazar-3.png", type: "desktop" },
        { id: 4, src: "/images/projects/pickbazar/pickbazar-4.png", type: "desktop" },
        { id: 5, src: "/images/projects/pickbazar/pickbazar-5.png", type: "desktop" },
        { id: 6, src: "/images/projects/pickbazar/pickbazar-6.png", type: "desktop" },
        { id: 7, src: "/images/projects/pickbazar/pickbazar-7.png", type: "desktop" },
        { id: 8, src: "/images/projects/pickbazar/pickbazar-8.png", type: "desktop" },
        { id: 9, src: "/images/projects/pickbazar/pickbazar-9.png", type: "desktop" },
        { id: 10, src: "/images/projects/pickbazar/pickbazar-10.png", type: "desktop" },
        { id: 11, src: "/images/projects/pickbazar/pickbazar-11.png", type: "desktop" },
        { id: 12, src: "/images/projects/pickbazar/pickbazar-12.png", type: "desktop" },
        { id: 13, src: "/images/projects/pickbazar/pickbazar-13.png", type: "mobile" },
        { id: 14, src: "/images/projects/pickbazar/pickbazar-14.png", type: "mobile" },
        { id: 15, src: "/images/projects/pickbazar/pickbazar-15.png", type: "mobile" },
        { id: 16, src: "/images/projects/pickbazar/pickbazar-16.png", type: "mobile" },
      ]
    },
    {
      id: 8,
      name: "Todos App",
      category: "other",
      logo: "/images/projects/todos/logo.svg",
      description: "Todos app, this project is developed for the purpose of learning ReactJS.",
      technicals: ["ReactJS", "CSS"],
      link: "https://todo-demo-23.firebaseapp.com/",
      images: [
        { id: 1, src: "/images/projects/todos/todos-1.png", type: "desktop" },
        { id: 2, src: "/images/projects/todos/todos-2.png", type: "mobile" },
      ]
    },
    {
      id: 9,
      name: "Our Love",
      category: "other",
      logo: "/images/projects/love/logo.png",
      description: "This website to keep memories with my girlfriend, this project is developed for the purpose of learning HTML, CSS, JavaScript.",
      technicals: ["HTML", "CSS", "JavaScript"],
      link: "https://ntml-dvbt.firebaseapp.com/",
      images: [
        { id: 1, src: "/images/projects/love/love-1.png", type: "desktop" },
        { id: 2, src: "/images/projects/love/love-2.png", type: "desktop" },
        { id: 3, src: "/images/projects/love/love-3.png", type: "desktop" },
        { id: 4, src: "/images/projects/love/love-4.png", type: "desktop" },
        { id: 5, src: "/images/projects/love/love-5.png", type: "mobile" },
        { id: 6, src: "/images/projects/love/love-6.png", type: "mobile" },
      ]
    },
    {
      id: 10,
      name: "Smart Home",
      category: "design",
      logo: "/images/projects/smarthome/logo.svg",
      description: "This is the design of smart home app, this project is for learning how to use Figma.",
      link: "https://www.figma.com/file/tUiWspAe3mAHT8hcRmNASn/Smart-Home?node-id=15%3A595",
      images: [
        { id: 1, src: "/images/projects/smarthome/smarthome-1.svg", type: "mobile" },
        { id: 2, src: "/images/projects/smarthome/smarthome-2.svg", type: "mobile" },
        { id: 3, src: "/images/projects/smarthome/smarthome-3.svg", type: "mobile" },
        { id: 4, src: "/images/projects/smarthome/smarthome-4.svg", type: "mobile" },
        { id: 5, src: "/images/projects/smarthome/smarthome-5.svg", type: "mobile" },
        { id: 6, src: "/images/projects/smarthome/smarthome-6.svg", type: "mobile" },
        { id: 7, src: "/images/projects/smarthome/smarthome-7.svg", type: "mobile" },
      ]
    },
  ]
}

export const PROJECT_LIMIT = 6;
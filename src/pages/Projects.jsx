import "../styles/Projects.css";

const websiteProjects = [
{
    title: "Bonchon Calorie Counter",
    img: "/photos/bonchon-calorie-counter.jpg",
    desc: "Bonchon Calorie Counter is a React + Vite web application that allows users to browse menu items, adjust quantities, and instantly compute total calorie intake. It focuses on fast UI interactions, clean state management, and a responsive ordering-style experience.",
    link: "https://bonchon-calorie-counter.vercel.app/",
    type: "website",
  },
  {
    title: "RC Digitized Research Catalog",
    img: "/photos/rc-digitized-search-enginge.jpg",
    desc: "A commissioned web-based research catalog and search engine designed to digitize and organize academic research records.",
    link: "https://rc-digitized-search-engine-zfua.vercel.app/search",
    type: "website",
  },
  {
    title: "Task Track",
    img: "/photos/landing-page-task-track.png",
    desc: "A task management system built with HTML, CSS, PHP, and SQL, focusing on team collaboration and task tracking.",
    link: "https://github.com/chezcka/task-track.git",
    type: "github",
  },
  {
    title: "EroVital Signs WebApp",
    img: "/photos/erovital-signs-web-app.png",
    desc: "Frontend development of a health monitoring web application using HTML, CSS, and JavaScript.",
    link: "https://github.com/httprenz/VitalWebApp.git",
    type: "github",
  },
  {
    title: "Guruji Indian Sweets & Food Store",
    img: "/photos/guruji-indian-sweets-street-food.png",
    desc: "Homepage redesign focused on improved visual hierarchy and user experience.",
    link: "https://chezcka.github.io/guruji-website/",
    type: "website",
  },
  {
    title: "EatPizza Philippines",
    img: "/photos/eatpizza-website.jpg",
    desc: "Official website design and development to improve brand visibility and UX.",
    link: "https://eatpizza.com.ph/",
    type: "website",
  },
];

const mobileProjects = [
  {
    title: "Smart MobilityX",
    img: "/photos/smartmobilityx.png",
    desc: "Android ride-hailing and smart mobility application built using Java and XML layouts.",
    link: "https://github.com/Jgallinera/Smart-Mobility-X.git",
  },
  {
    title: "BossPaCheque",
    img: "/photos/bosspacheque.png",
    desc: "Mobile application for quick dataset validation.",
    link: "https://github.com/JaiLayos/BossPaCheque.git",
  },
];

const figmaProjects = [
  {
    title: "DiaTrans",
    img: "/photos/diatrans.png",
    desc: "Dialect translator application prototype with complete user flows.",
    link: "https://www.figma.com/proto/alKd3m83ghYDC1t3Egezsk/Untitled",
  },
  {
    title: "TasteBud Explorer",
    img: "/photos/tastebud-explorer.png",
    desc: "UI/UX prototype exploring interactive food discovery concepts.",
    link: "https://www.figma.com/proto/XaNANmpfMFUa4qjux8LEV3",
  },
  {
    title: "Fanta Practice Design",
    img: "/photos/fanta.png",
    desc: "Brand website redesign practice using Figma.",
    link: "https://www.figma.com/proto/Jd2GIFT3XCowhtW9c3X8og",
  },
  {
    title: "Coca-Cola Practice Design",
    img: "/photos/coca-cola.png",
    desc: "Practice UI/UX website design inspired by Coca-Cola branding.",
    link: "https://www.figma.com/proto/CsIkNXNN89YfOnsoyKnRpG",
  },
];

function ProjectGrid({ projects, buttonLabel }) {
  return (
    <div className="projects-grid">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <img src={project.img} alt={project.title} loading="lazy" />
          <div className="project-info">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              {buttonLabel}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <section className="projects-page">
      <div className="projects-container">
        <div className="projects-section">
          <h2>Website Projects</h2>
          <ProjectGrid projects={websiteProjects} buttonLabel="View Project" />
        </div>

        <div className="projects-section">
          <h2>Mobile Applications</h2>
          <ProjectGrid projects={mobileProjects} buttonLabel="View on GitHub" />
        </div>

        <div className="projects-section">
          <h2>Figma Designs</h2>
          <ProjectGrid projects={figmaProjects} buttonLabel="View on Figma" />
        </div>
      </div>
    </section>
  );
}

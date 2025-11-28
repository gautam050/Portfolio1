
import React from "react";
import "./experience.css";

export default function Experience() {
  const projects = [
    {
      title: "Portfolio",
      description: "My personal portfolio showcasing my projects, skills, and contact information.",
      img: "/images/Screenshot (83).png",
      live: "/portfolio.html",
      github: "https://github.com/gautam050/portfolio"
    },
    {
      title: "Sorting Visualizer",
      description: "A visual tool to understand sorting algorithms like Bubble, Merge, and Quick sort.",
      img: "/images/Screenshot (84).png",
      live: "https://sortingvisualizationbygautam.netlify.app/",
      github: "https://github.com/gautam050/Sorting-Visualizer"
    },
    {
      title: "Dashboard Cryptocurrency",
      description: "React-based dashboard displaying cryptocurrency prices and market trends.",
      img: "/images/Screenshot (96).png",
      live: "https://reactcryptodashboardgautam.netlify.app",
      github: "https://github.com/gautam050/Crypto-Dashboard"
    },
    {
      title: "Employee Management System",
      description: "A full-stack system to manage employee data, tasks, and departments.",
      img: "/images/Screenshot (95).png",
      live: "https://github.com/gautam050/Employee-Management-System",
      github: "https://github.com/gautam050/Employee-Management-System"
    },
  ];

  return (
    <div className="experience" id="experience">
      <h2 className="proj-heading"><i className="fa-solid fa-user"></i> Projects</h2>
      <div className="projects-container">
        {projects.map((proj, index) => (
          <div className="cardo" key={index}>
            <img src={proj.img} alt={proj.title} className="img" />
            <div className="intr">
              <h6>{proj.title}</h6>
              <p>{proj.description}</p>
              <div className="proj-btns">
                <a href={proj.live} target="_blank" rel="noopener noreferrer" className="btn live-btn">Live</a>
                <a href={proj.github} target="_blank" rel="noopener noreferrer" className="btn github-btn">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

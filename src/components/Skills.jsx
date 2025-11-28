import React from "react";
import "./skills.css";
export default function Skills() {
  const skills = [
    "/images/logos/javascript--v1.png",
    "/images/logos/77.png",
    "/images/logos/typescript.png",
    "/images/logos/2.png",
    "/images/logos/3.png",
    "/images/logos/mongodb.png",
    "/images/logos/redux.png",
    "/images/logos/4.png",
    "/images/logos/5.png",
    "/images/logos/6.png",
    "/images/logos/555.png",
    "/images/logos/images.png",
    "/images/logos/github.png",
    "/images/logos/vscode.jpeg",
  ];

  return (
    <div className="skills" id="skills">
      <h2 className="skill-title">
        <i className="fa-solid fa-code"></i> Skills
      </h2>
       <h2 className="skill-title">
         A comprehensive overview of my technical skills and development expertise
      </h2>

      <div className="skills-grid">
        {skills.map((logo, index) => (
          <div key={index} className="skill-card">
            <img src={logo} alt={`Skill ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

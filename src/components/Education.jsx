import React from "react";
import "./education.css";

export default function Education() {
  const educations = [
    {
      school: "ITM University ",
      year: "B.Tech in Computer Science Engineering (2020-2024)",
      role: "Coordinator, Film Club",
      description: "Directed and produced theme-based short films promoting Women Empowerment, freedom, and awareness of the Indian constitution. Learned effective communication, collaboration, and adaptability."
    },
    {
      school: "Adarsh Public School",
      year: "Class XII (2019-2020)",
      role: "Debate Club Member",
      description: "Participated in weekly discussions and inter-school debates, honing public speaking and critical thinking skills."
    },
    {
      school: "Delhi Public School",
      year: "Class X (-2017)",
      role: "Captain, Inter-school Cricket",
      description: "Demonstrated leadership and teamwork, achieving victory in an inter-school cricket tournament. Gained appreciation for collaboration and strategic thinking."
    },
  ];

  return (
    <div className="education" id="education">
      <div className="head">
        <a href="#"><i className="fas fa-graduation-cap"></i> Education</a>
      </div>

      <div className="education-container">
        {educations.map((edu, index) => (
          <div
            key={index}
            className={`education-box ${index % 2 === 0 ? "left" : "right"}`}
          >
            <h3>{edu.school}</h3>
            <small>({edu.year})</small>
            <p><strong>{edu.role}:</strong> {edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

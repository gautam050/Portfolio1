import React from "react";
import "./home.css";

export default function Home() {
  return (
    <div className="home" id="home">
      <div className="home-content">
        <h3>Hi, myself</h3>
        <h1>Ashutosh Gautam</h1>
        <h3>
          <span>Software Developer</span>
        </h3>
        <p>
          Enthusiastic Software Engineer proficient in HTML5, CSS3, JavaScript,
          and Java, with hands-on experience in Data Structures, Algorithms, and
          MySQL. My commitment to crafting innovative solutions, coupled with a
          dynamic approach to challenges, fosters adaptability and insightful
          decision-making. Eager to contribute expertise to meaningful projects
          and collaborate within dynamic teams to drive impactful results.
        </p>
      </div>

      {/* Image container */}
      <div className="home-img">
        <img src="/images/aaa.png" alt="profile" />

        {/* ⭐ Social media icons must be inside home-img */}
        <div className="social-media">
          <a
            href="https://www.linkedin.com/in/ashutosh-gautam-aa8797255/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          <a
            href="https://www.instagram.com/ashutoshgautam01/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a href="mailto:ashutoshgautam055@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>

          <a href="https://github.com/gautam050" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

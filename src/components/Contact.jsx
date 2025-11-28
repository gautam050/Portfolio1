import React, { useRef } from "react";
import "./contact.css";                   
export default function Contact() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const name = form["name"].value;
    const email = form["input-email"].value;
    const message = form["input-message"].value;

    // IMPORTANT: Replace the SMTP credentials below with a secure server-side solution.
    // The lines below use SMTPJS which requires exposing credentials in client-side JS (not recommended).
    // Instead, host an API endpoint that sends the email securely.
    window.Email.send({
      Host: "smtp.elasticemail.com",
      Username: "YOUR_SMTP_USERNAME", // <<-- REPLACE
      Password: "YOUR_SMTP_PASSWORD", // <<-- REPLACE
      To: "ashutoshgautam055@gmail.com",
      From: "YOUR_SMTP_USERNAME",
      Subject: "New message from Portfolio contact form",
      Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`
    }).then(
      function (message) {
        alert("Message sent successfully!");
        form.reset();
      },
      function (err) {
        console.error(err);
        alert("There was a problem sending the message. Use a secure server-side email service.");
      }
    );
  };

  return (
    <div id="contact" className="contacts">
      <div className="contact">
        <a href="#contact" className="contact-heading">
  <i className="fa-solid fa-id-card" style={{ marginRight: "8px" }}></i>
  Contact
</a>

        <div id="contact-container">
          <div id="contact-form-container">
            <form id="contact-form" ref={formRef} onSubmit={handleSubmit}>
              <input id="input-name" name="name" type="text" placeholder=" Name" />
              <input id="input-email" name="input-email" type="text" required placeholder=" Email" />
              <textarea id="input-message" name="input-message" rows="2" cols="40" placeholder="Description"></textarea>
              <button className="sub-btn" type="submit">SEND MESSAGE</button>
            </form>
          </div>

          <div id="my-details-container">
            <h3>Get In touch</h3>
            <p>
              I am an ambitious individual pursuing a B.Tech in Computer Science Engineering. Proficient in HTML, CSS, and JavaScript,
              I've showcased my skills through projects and certifications, such as achieving excellence in CSS on HackerRank and mastering Java, Data Structures and Algorithms with Coding Ninjas.
            </p>
            <br />
            <h3>My Address</h3>
            <div className="my-details-info-container">
              <i className="fas fa-map-marker-alt"></i>
              <span>Gwalior MP, India</span>
            </div>
            <br />
            <div className="my-details-info-container">
              <a href="mailto:ashutoshgautam055@gmail.com">
                <i className="far fa-envelope"></i>
                <span>ashutoshgautam055@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
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

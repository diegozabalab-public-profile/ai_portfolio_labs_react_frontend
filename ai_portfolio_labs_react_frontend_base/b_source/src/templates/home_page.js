import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import FooterPage from "./footer_page";
import "./css/home_page_styles.css";


const HomePage = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true" || localStorage.getItem("darkMode") === null;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`home-page-container ${darkMode ? "dark-mode" : ""}`}>
      {/* Main Content (Left Side) */}
      <div className="main-content">
        {/* Profile Section */}
        <div className="profile-section">
          <div className="profile-container">
            <img src="/profile_pictures/profile-picture.jpg" alt="Diego Zabala" className="profile-pic" />

            {/* Small Floating Dark Mode Icon on Profile Picture */}
            <button onClick={toggleDarkMode} className="dark-mode-icon">
              {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
          </div>
          <h1>Diego Alberto Zabala Betancur</h1>
          <h3>Python Developer | Data Scientist | ML Engineer | Researcher</h3>
        </div>

        {/* Contact Information */}
      <div className="contact-info">
        <p>📍 Brisbane, Australia</p>
        <p>📞 <a href="tel:+610468887239">(+61) 0468 887 239</a></p>
        <p>📧 <a href="mailto:diegozabalab@gmail.com">diegozabalab@gmail.com</a></p>
        <p>🔗 <a href="https://www.linkedin.com/in/diegozabalab" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      </div>

    {/* Professional Summary */}
    <div className="section">
      <h2>About Me</h2>
      <p>
        Passionate AI and tech-driven professional with expertise in Data Science, Machine Learning, and Cloud Technologies.
        Experienced in statistical data analysis, Business Intelligence, and natural language processing.
        Strong problem-solving skills with a focus on delivering functional MVPs quickly and efficiently.
      </p>
    </div>

      {/* Technical Skills */}
      <div className="section">
        <h2>Technical Skills</h2>
        <ul>
          <li>Cloud Technologies: AWS, GCP, Azure, Power BI</li>
          <li>Programming: Python (TensorFlow, PyTorch, Scikit-learn), R, PHP, NodeJS, SQL</li>
          <li>Databases: MongoDB, Neo4j, SQL/NoSQL</li>
          <li>Other Tools: API Development, CRM Monitoring, Data-Driven Decision Making</li>
        </ul>
      </div>

      {/* Work Experience */}
      <div className="section">
        <h2>Work Experience</h2>

        <p><strong>Python Developer</strong> – BORO Solutions Limited (2021 - Present)</p>
        <ul>
          <li>Implemented projects based on BORO's Ontological Framework.</li>
          <li>Ensured optimal software quality with clean coding standards.</li>
        </ul>

        <p><strong>Data Scientist & AWS Architect</strong> – FINANCREDITOS S.A.S (2020 - 2021)</p>
        <ul>
          <li>Built a Big Data architecture on AWS Cloud to reduce messaging costs.</li>
          <li>Increased contactability percentage by 45% through optimized cloud solutions.</li>
        </ul>

        <p><strong>Full-Stack Developer</strong> – NINTERA S.A.S (July 2019 – October 2020)</p>
        <ul>
          <li>Developed websites using Node.js, Angular, and Loopback framework.</li>
          <li>Managed a mailing database ecosystem integrated with AWS and IBM Silverpop.</li>
          <li>Created reports and performed web scraping using PHP and Drupal.</li>
        </ul>
      </div>

      </div>

      {/* New Scrollable Right-Hand Section */}
      <div className="right-section">
        <div className="right-section-content">
          {/* Projects I've Worked On */}
          <div className="right-section-item">
            <h3>📌 Projects I've Worked On</h3>
            <ul>
              <li><a href="https://dazabalab.appfestiva.com/ai_battle" target="_blank" rel="noopener noreferrer">AI Battle: TensorFlow vs. PyTorch</a></li>
              <li><a href="https://github.com/diegozabalab-public-profile/sentiment-analysis" target="_blank" rel="noopener noreferrer">NLP Sentiment Analysis</a></li>
            </ul>
          </div>

          {/* What I Am Learning Right Now */}
          <div className="right-section-item">
            <h3>📚 What I Am Learning Right Now</h3>
            <ul>
              <li><a href="https://kubernetes.io/docs/home/" target="_blank" rel="noopener noreferrer">MLOps with Kubernetes & Docker</a></li>
              <li><a href="https://huggingface.co/docs/transformers/index" target="_blank" rel="noopener noreferrer">Optimizing Large Language Models (LLMs)</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Component */}
      <FooterPage />

    </div>
  );
};

export default HomePage;

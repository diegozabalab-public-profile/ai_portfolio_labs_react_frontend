import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import FooterPage from "./footer_page";
import AiModelsInferenceTimesResults from "../templates/ai_models_inference_times_results";
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
                    <p><strong>Python Developer</strong> – BORO Solutions Limited (October 2021 - Present)</p>
                    <p>London, England - Remote - Full-time</p>
                    <ul>
                        <li>Implementing projects based on BORO's Ontological framework.</li>
                        <li>Adhering to meticulous clean coding standards to proactively mitigate technical debt and ensure optimal, future-proof software quality.</li>
                    </ul>
                    <br/>
                    <p><strong>Principal Data Scientist</strong> – Xertica.ai (May 2021 – October 2021)</p>
                    <p>Mexico - Remote - Full-time</p>
                    <ul>
                        <li>Led the Machine Learning (ML) team at a GCP-driven company, spearheading innovation and delivering high-impact AI solutions for clients.</li>
                        <li>Designed and deployed advanced ML algorithms on GCP, optimizing platforms with seamless, scalable upgrades.</li>
                        <li>Enhanced model performance and reliability, refining existing ML systems to drive measurable improvements.</li>
                        <li>Successfully deployed ML models to production, ensuring scalability, robustness, and alignment with business objectives.</li>
                    </ul>
                    <br/>
                    <p><strong>Data Scientist & AWS Architect</strong> – FINANCREDITOS S.A.S (November 2020 – October 2021)</p>
                    <p>Medellín, Colombia - Contractor</p>
                    <ul>
                        <li>Built a Big Data architecture on AWS Cloud with the aim of reducing current costs in the dispatch of all types of messaging (SMS, calls, chats, etc.) for the recovery of overdue portfolio.</li>
                        <li>Achieved aim: contactability percentage increased by 45%.</li>
                    </ul>
                    <br/>
                    <p><strong>Full-Stack Developer</strong> – NINTERA S.A.S (July 2019 – October 2020)</p>
                    <p>Medellín, Colombia - Full-time</p>
                    <ul>
                        <li>Development of websites using Node.js, Angular, and utilizing the Loopback framework.</li>
                        <li>Management of a mailing database ecosystem integrated with AWS (S3, EC2, IAM, Roles, Athena, AWS CLI (Python), Lambda, DynamoDB, Pinpoint) and IBM.</li>
                        <li>Development in Drupal, PHP, web scraping, and generation of interaction reports.</li>
                    </ul>
                </div>

                {/* Projects Section */}
                <div className="section">
                    <h2>AI Models Lab</h2>
                    {/* Embedded AI Battle */}
                    <div className="ai-battle-container">
                        <AiModelsInferenceTimesResults />
                    </div>
                </div>
            </div>

            {/* New Scrollable Right-Hand Section */}
            <div className="right-section">
                <div className="right-section-content">
                    {/* Projects I've Worked On */}
                    <div className="right-section-item">
                        <h3>📌 Projects I've Worked On</h3>
                        <ul>
                            <li>
                                <a href="https://github.com/diegozabalab-public-profile/ai-portfolio-labs/tree/master/ai_portfolio_labs_base/b_source/django_apps/ai_portfolio_labs/portfolio/ai_models" target="_blank" rel="noopener noreferrer">
                                    AI Battle: TensorFlow vs. PyTorch
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* What I Am Learning Right Now */}
                    <div className="right-section-item">
                        <h3>📚 What I Am Learning Right Now</h3>
                        <ul>
                            <li><a href="https://huggingface.co/blog/mlabonne/llm-course" target="_blank" rel="noopener noreferrer">The Large Language Model Course</a></li>
                            <li><a href="https://www.deeplearning.ai/short-courses/efficiently-serving-llms/" target="_blank" rel="noopener noreferrer">Efficiently Serving LLMs</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <FooterPage />
        </div>
    );
};

export default HomePage;

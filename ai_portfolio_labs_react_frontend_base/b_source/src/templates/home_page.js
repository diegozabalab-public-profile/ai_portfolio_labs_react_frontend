import React, { useState, useEffect } from "react";
import FooterPage from "./footer_page.js";
import ProfileSection from "./components/sections/js/profile_section.js";
import ContactInfo from "./components/sections/js/contact_info.js";
import AboutSection from "./components/sections/js/about_section.js";
import TechnicalSkills from "./components/sections/js/technical_skills.js";
import WorkExperience from "./components/sections/js/work_experience.js";
import ProjectsSection from "./components/sections/js/projects_section.js";
import LearningSection from "./components/sections/js/learning_section.js";
import TechRoadmapPage from "./tech_roadmap_page";
import AiModelsInferenceTimesResults from "../templates/ai_models_inference_times_results";
import "./css/home_page_styles.css";

const HomePage = () => {
    const [darkMode, setDarkMode] = useState(() =>
        localStorage.getItem("darkMode") === "true" ||
        localStorage.getItem("darkMode") === null
    );

    useEffect(() => {
        localStorage.setItem("darkMode", darkMode);
        document.body.classList.toggle("dark-mode", darkMode);
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode(prev => !prev);

    return (
        <div className={`home-page-container ${darkMode ? "dark-mode" : ""}`}>
            <div className="main-content">
                <ProfileSection darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <ContactInfo />
                <AboutSection />
                <TechnicalSkills />
                <WorkExperience />
                <div className="section">
                    <TechRoadmapPage />
                </div>
                <ProjectsSection>
                    <AiModelsInferenceTimesResults />
                </ProjectsSection>
            </div>

            <div className="right-section">
                <div className="right-section-content">
                    <LearningSection />
                </div>
            </div>

            <FooterPage />
        </div>
    );
};

export default HomePage;

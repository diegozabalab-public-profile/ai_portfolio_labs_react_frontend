import React from "react";

const ProjectsSection = ({ children }) => (
    <div className="section">
        <h2>AI Models Lab</h2>
        <div className="ai-battle-container">
            {children}
        </div>
    </div>
);

export default ProjectsSection;

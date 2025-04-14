import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ProfileSection = ({ darkMode, toggleDarkMode }) => (
    <div className="profile-section">
        <div className="profile-container">
            <img
                src="/profile_pictures/profile-picture.jpg"
                alt="Diego Zabala"
                className="profile-pic"
            />
            <button onClick={toggleDarkMode} className="dark-mode-icon">
                {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
        </div>
        <h1>Diego Alberto Zabala Betancur</h1>
        <h3>Python Developer | Data Scientist | ML Engineer | Researcher</h3>
    </div>
);

export default ProfileSection;

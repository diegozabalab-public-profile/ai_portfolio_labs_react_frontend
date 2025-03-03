import React from "react";
import { Link } from "react-router-dom";
import "./css/not_found_styles.css"; // Import styles

const NotFound = () => {
    return (
        <div className="not-found-container">
            <h1>😵 Oops! Page Not Found</h1>
            <p>
                It looks like this page got lost in the matrix. Maybe an AI ate it? 🤖🍽️
            </p>
            <p>Don't worry, you can always go back:</p>
            <Link to="/" className="home-link">🏠 Return Home</Link>
        </div>
    );
};

export default NotFound;

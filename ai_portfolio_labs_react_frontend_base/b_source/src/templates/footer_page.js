import React from "react";
import "./css/footer_page_styles.css"; // Import footer styles

const FooterPage = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Diego Zabala. All Rights Reserved.</p>
                <div className="footer-links">
                    <a
                        href="https://github.com/diegozabalab-public-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/diegozabalab"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                    <a href="mailto:diegozabalab@gmail.com">Email Me</a>
                </div>
            </div>
        </footer>
    );
};

export default FooterPage;

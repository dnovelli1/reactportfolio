import React from 'react';
import './style.css';

function Footer() {
    return (
        <footer className="footer mt-auto py-3">
            <h4>Contact Me</h4>
            <div className="container">
                <a className="myLinks" target="blank" href="https://www.linkedin.com/in/david-jacob-novelli/" alt="This will take you to my linkedin profile!"><i className="fab fa-linkedin"></i></a>
                <a className="myLinks" target="blank" href="https://github.com/dnovelli1" alt="This will take you to my GitHub profile!"><i className="fab fa-github-square"></i></a>
                <a className="myLinks" target="blank" href="mailto:jakenovelli11@gmail.com" alt="This will autofill my email in a draft in your email!"><i className="fas fa-envelope-square"></i></a>
                <a className="myLinks" href="callto:17076852450" alt="My phone number is 7076852450"><i className="fas fa-phone-square"></i></a>
                <a className="myLinks" href="./assets/resume/JakeNovelliResume.docx.pdf" download="Resume.pdf" target="blank"><i className="far fa-file"></i></a>
            </div>
        </footer>
    )
}

export default Footer;
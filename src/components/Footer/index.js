import React from 'react';
import './style.css';

function Footer() {
    return (
        <div className="page-footer font-small blue pt-4">
            <div className="container-fluid text-center">
                <div className="row">
                    <div>
                        <h5 className="text-uppercase">Contact Me</h5>
                        <ul>
                            <li><a className="myLinks" target="blank" href="https://www.linkedin.com/in/david-jacob-novelli/" alt="This will take you to my linkedin profile!"><i className="fab fa-linkedin"></i></a></li>
                            <li><a className="myLinks" target="blank" href="https://github.com/dnovelli1" alt="This will take you to my GitHub profile!"><i className="fab fa-github-square"></i></a></li>
                            <li><a className="myLinks" target="blank" href="mailto:jakenovelli11@gmail.com" alt="This will autofill my email in a draft in your email!"><i className="fas fa-envelope-square"></i></a></li>
                            <li><a className="myLinks" href="callto:17076852450" alt="My phone number is 7076852450"><i className="fas fa-phone-square"></i></a></li>
                            <li><a className="myLinks" href="./assets/resume/JakeNovelliResume.docx.pdf" download="Resume.pdf" target="blank"><i className="far fa-file"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-3">© 2021 Copyright: Jake Novelli</div>
        </div>
    )
}

export default Footer;
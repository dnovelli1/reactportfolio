import React from 'react';
import './style.css';
import FadeIn from 'react-fade-in';

function AboutSec() {
    return (
        <FadeIn>
        <div className="container">
            <div class="card">
                <div class="card-img-overlay position-relative">
                    <h5 class="card-title text-center">About Me</h5>
                    <p class="card-text">
                        Hello and welcome to my Professional Coding Portfolio. My name is Jake Novelli and I am 27 years old from the Bay Area of California.
                        I am a future Full Stack Web Developer who specializes in HTML, CSS, Javascript, Node, MySQL, Express, React and many more!
                        Please have a glimpse into what your website could offer in the Projects section.
                        For business inquiries please see the Contact Me section on every page. The links are to all of my professional sites.
                        If you would like a copy of my resume, please click the file icon in the Contact Me section. The link will begin a download of my Resume.
                        </p>
                </div>
                <img src="./about.gif" class="card-img" style={{maxHeight: 600}} alt="cool" />
            </div>
        </div>
        </FadeIn>
    )
}

export default AboutSec;
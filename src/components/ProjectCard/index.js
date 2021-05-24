import React from 'react';
import './style.css';
import FadeIn from 'react-fade-in';

function ProjectCard(props) {
    return (
        <FadeIn>
        <div className="card mb-3 text-center">
            <div className="row g-0 projects">
                <div className="col-md-12">
                    <img src={props.image} alt={props.name}></img>
                </div>
                <div className="col-md-12" style={{float: "right"}}>
                    <div className="card-content mt-3">
                        <h5 className="card-title text-white">{props.name}</h5>
                        <a href={props.github} className="btn btn-light">Github</a>
                        <a href={props.site} className="btn btn-light">Full Site</a>
                    </div>
                </div>
            </div>
        </div>
        </FadeIn>
    )
}

export default ProjectCard;
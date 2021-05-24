import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Projects() {
    const data = [
        {
            id: 1,
            name: "Sporcle But Better",
            image: "https://i.ibb.co/Wsyw7hM/sporclegif.gif",
            github: "https://github.com/dnovelli1/project2",
            site: "https://radiant-chamber-32939.herokuapp.com/"
        },
        {
            id: 2,
            name: "Expedition Appetite",
            image: "https://i.ibb.co/99Dffwd/apetitegif.gif",
            github: "https://github.com/SerenaChandler/Project1",
            site: "https://serenachandler.github.io/Project1/"
        },
        {
            id: 3,
            name: "Clicky Doge",
            image: "https://i.ibb.co/JqKCqRh/websitepreview.gif",
            github: "https://github.com/dnovelli1/clickygame",
            site: "https://dnovelli1.github.io/clickygame/"
        },
        {
            id: 4,
            name: "Tech-Blog",
            image: "https://i.ibb.co/myh8wzy/techblog.png",
            github: "https://github.com/dnovelli1/techblog",
            site: "https://techblogger1.herokuapp.com/"
        },
        {
            id: 5,
            name: "Fitness Tracker",
            image: "https://i.ibb.co/5Ld8K3n/fitness.png",
            github: "https://github.com/dnovelli1/workouttracker",
            site: "https://rocky-brushlands-51729.herokuapp.com/"
        },
        {
            id: 6,
            name: "Weather Dashboard",
            image: "https://i.ibb.co/ZgBwkkt/weather.png",
            github: "https://github.com/dnovelli1/weatherdashboard",
            site: "https://dnovelli1.github.io/weatherdashboard/"
        }
    ]
    return (
        <div className="container">
            {data.map(project => (
                <ProjectCard 
                id={project.id}
                name={project.name}
                image={project.image}
                github={project.github}
                site={project.site}
                />
            ))}
        </div>
    )
}

export default Projects;
import React from "react";
import './project.css';

const Project = ({ imgUrl, date, text, data, gitlink }) => {
    return (
        <div className="portfolio__projects-container_project">
            <div className="portfolio__projects-container_project-image">
                <img src={imgUrl} alt="project_image" />
            </div>
            <div className="portfolio__projects-container_project-content">
                <div>
                    <p>{date}</p>
                    <h3>{text}</h3>
                    <p className="data">{data}</p>
                </div>
                <a href={gitlink} target="blank" className="sourceCode">Source Code</a>
            </div>
        </div>
    )
}

export default Project
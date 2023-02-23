import React from "react";
import './jobs.css';

const Jobs = ({ title, year, designation, text }) => {
    return (
        <div className="portfolio__jobs">
            <div className="portfolio__jobs-header">
                <div />
                <h1>{title}</h1>
                <p>{year}</p>
                <p>{designation}</p>
            </div>
            <div className="portfolio__jobs-text">
                <p>{text}</p>
            </div>
        </div>

    )
};

export default Jobs
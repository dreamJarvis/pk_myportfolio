import React from "react";
import './skills.css';

const Skills = () => {
    return (
        <div className="portfolio__skills section__margin" id="skills">
            <div className="portfolio__skills-title">
                <h1>Skills</h1>
            </div>
            <div className="portfolio__skills-sections">

                <div className="portfolio_skills-sections_languages skill_container">
                    <h3 className="gradient__text">Languages</h3>
                    <div className="items">
                        <ul>
                            <li>C++</li>
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>Kotlin</li>
                        </ul>
                    </div>
                </div>
                <div className="portfolio_skills-sections_frameworks skill_container">
                    <h3 className="gradient__text">Frameworks</h3>
                    <div className="items">
                        <ul>
                            <li>React JS</li>
                            <li>Docker</li>
                            <li>Kubernetes</li>
                            <li>Springboot</li>
                            <li>Joget DX</li>
                        </ul>
                    </div>
                </div>
                <div className="portfolio_skills-sections_databases skill_container">
                    <h3 className="gradient__text">Databases</h3>
                    <div className="items">
                        <ul>
                            <li>PostgreSQL</li>
                            <li>MySQL</li>
                        </ul>
                    </div>
                </div>
                <div className="portfolio_skills-sections_others skill_container">
                    <h3 className="gradient__text">Others</h3>
                    <div className="items">
                        <ul>
                            <li>Android Studio</li>
                            <li>Apache Kafka</li>
                            <li>IOT</li>
                            <li>Open CV</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
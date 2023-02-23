import React from "react";
import './projects.css';
import { project1, project2, project3 } from './imports';
import Project from '../../containers/project/Project';

const Projects = () => {
    return (
        <div className="portfolio__projects section__padding" id="projects">
            <div className="portfolio__projects-heading">
                <h1 className="gradient__text">Projects</h1>
            </div>
            <div className="portfolio__projects-container">
                <div className="portfolio__projects-container_groupA">
                    <Project imgUrl={project1} date="June 2021" text="News App"
                        data="NewsApp is an android application that fetches top 100 daily Indian news from an API called NewsAPI.
                        Technologies being used are: Android Studio, Kotlin, NewsAPI. Concepts leart during L&D: Retrofit, Glide, Android Fundamentals (Architectural Components, Data Binding)"
                        gitlink="https://github.com/Prankishor/NewsAPP" />
                </div>
                <div className="portfolio__projects-container_groupB">
                    <Project imgUrl={project2} date="Mar 2019" text="Speech Embedded Facial Recognition System"
                        data="It is a facial recognition system that has a speech module attached. The system is attempted to be made 
                        portable in order to help people with no sight. Its main goal is to make people with no sight independent and help 
                        them recognise known as well as new people standing near them."
                        gitlink="https://github.com/Prankishor/Speech-Embedded-Image-Recognition-System" />
                    <Project imgUrl={project3} date="July 2019" text="Anti-Theft Home Automation"
                        data="This is a project that i made during my summer training (4th Semester). 
                    My main motive behind this project was to learn the basics of Internet Of Things. 
                    I also learnt to work with Arduino UNO and different sensors and components including PIR sensor, 
                    bluetooth module, servo motor etc."
                        gitlink="https://github.com/Prankishor/Home-Automation" />
                    {/* <Project imgUrl={project4} date="Dec 2022" text="Movie Seat Booking: UI"
                        data="A frontend / UI based project solely focused on L&D with Vanilla Javascript involving modern syntax and design" />
                    <Project imgUrl={project5} date="Feb 2023" text="My Portfolio using React JS"
                        data="A React JS based fully functional frontend portfolio project." /> */}
                </div>
            </div>
        </div>
    )
}

export default Projects
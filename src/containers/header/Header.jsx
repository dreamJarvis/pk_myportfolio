import React from "react";
import './header.css';
import profilee from '../../assets/profilee.jpg';
import Typical from "react-typical";
import { SocialIcon } from "react-social-icons";

const Header = () => {
    return (
        <div className="portfolio__header section__padding" id="home">
            <div className="portfolio__header-content">
                <h1 className="gradient__text">Prankishore Talukdar</h1>
                <div className="roles">
                    <span className="primary-text">
                        <p>
                            <Typical
                                steps={[
                                    "Software Development Engineer",
                                    1000,
                                    "Front-End Developer",
                                    1000,
                                    "BPM Developer",
                                    1000,
                                    "Software Consultant",
                                    1000,
                                ]}
                                loop={Infinity}
                            />
                        </p>
                    </span>
                </div>
                <div className="subtext">
                    <span>Currently working for Daimler Trucks Innovation Center India,
                        the one who keeps the world moving!
                    </span>
                </div>
                <div className="resume">
                    <a href="resume.pdf" download="Prankishor.pdf">
                        <button className="btn highlighted-btn">Download CV</button>
                    </a>
                </div>
                <div className="socials">
                    <div className="linkedin">
                        <SocialIcon url="https://www.linkedin.com/in/prankishor-talukdar-769084190" bgColor="#9d95b8" />
                    </div>
                    <div className="instagram">
                        <SocialIcon url="https://www.instagram.com/prankishor_/" bgColor="#9d95b8" />
                    </div>
                    <div className="twitter">
                        <SocialIcon url="https://twitter.com/PrankishorT" bgColor="#9d95b8" />
                    </div>
                </div>
            </div>
            <div className="circle">
                <div className="portfolio__header-image">
                    <img src={profilee} alt="profile" />
                </div>
            </div>

        </div>
    )
}

export default Header
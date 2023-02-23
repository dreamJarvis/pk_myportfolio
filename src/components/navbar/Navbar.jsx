import React from "react";
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import { useState } from "react";

const Menu = () => (
    <>
        <p><a href="#home">Home</a></p>
        <p><a href="#skills">Skills</a></p>
        <p><a href="#experience">Experience</a></p>
        <p><a href="#projects">Projects</a></p>
    </>
)


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="portfolio__navbar">
            <div className="portfolio__navbar-links">
                <div className="portfolio__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="portfolio__navbar-links_container">
                    <Menu />
                </div>
            </div>
            <div className="portfolio__navbar-contact">
                <a href="#contact" className="contactbtn">Contact</a>
            </div>
            <div className="portfolio__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="fff" size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className="portfolio__navbar-menu_container scale-up-center">
                        <div className="portfolio__navbar-menu_container-links">
                            <Menu />
                            <div className="portfolio__navbar-menu_container-links_contact">
                                <a href="#contact" classname="contactbtnmenu">Contact</a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
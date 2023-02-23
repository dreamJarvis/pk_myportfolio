import React from "react";
import './footer.css';
import ContactUs from "../contactus/ContactUs";

const Footer = () => {
    return (
        <div className="portfolio__footer section__padding" id="contact">
            <h1 className="gradient__text">Contact</h1>
            <div className="portfolio__footer-container">
                <div className="portfolio__footer-form_container">
                    <ContactUs />
                </div>
                <div className="footer-line">
                    <p className="gradient__text">"A simple hello can lead to a million things!"</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
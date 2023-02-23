import React from "react";
import './experience.css';
import Jobs from '../../containers/jobs/Jobs';

const jobsData = [
    {
        title: 'Daimler Truck Innovation Center India ',
        year: 'Dec 2021 - Present',
        designation: 'Software Consultant',
        text: 'Responsible for developing low/pro code solutions in order to simplify the management of business processes for Daimler Truck: Detroit and Europe. Also managing and maintaining the hosting environment for Joget with Docker containers and Kubernetes.',
    },
    {
        title: 'Mercedes-Benz Research & Development Center India',
        year: 'Aug 2021 - Dec 2021',
        designation: 'Graduate Engineer Trainee',
        text: 'Implemented data streaming using Apache Kafka to replicate data from source database to target database with latency as low as 2ms and developed API’s for Producer and Consumer for Kafka with SpringBoot.',
    },
    {
        title: 'Cognizant ',
        year: 'April 2021 - Aug 2021',
        designation: 'Intern',
        text: 'Hands on training in MySQL, Core Java, Python, Big Data Fundamentals and Data Warehousing.',
    },
];

const Experience = () => {
    return (
        <div className="portfolio__experience section__padding" id="experience">
            <div className="portfolio__experience-header">
                <h1 className="gradient__text">Experience</h1>
            </div>
            <div className="portfolio__jobs-container">
                {jobsData.map((item, index) => (
                    <Jobs title={item.title} year={item.year} designation={item.designation} text={item.text} key={item.title + index} />
                ))}
            </div>
        </div>
    )
}

export default Experience;
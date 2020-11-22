import React, { useState } from 'react';

import Title from './Title';
import Project from './Project';
import ModalImage from './ModalImage';

import utTravelImg from '../assets/project/ut-travel-1.PNG';
import stuCrudImg from '../assets/project/stu-crud-1.PNG';
import stationAppImg from '../assets/project/station-app-1.jpg';
import resumeAppImg from '../assets/project/resume-app-1.PNG';


const projects = [
    {
        title: "Graduation Thesis - Building Coach Station Management System Based On Microservice Architecture",
        description: "Build applications to meet the need to buy tickets online for guest and manage information about automakers, routes, fares, order,... This system is implemented according to the microservice architecture.",
        techUsed: "Technique: ReactJS, React-Native, NodeJS, MongoDB, Ant Design, React Router",
        member: "Member: Nay Thom, Minh Duy",
        roles: "Roles: Build front-end for web and android app, fetch API with Axios, Update data",
        sourceUrl: "https://github.com/thomnay98/coach-station-management-app",
        liveDemo: "",
        image: stationAppImg
    },
    {
        title: "Mini project - Resume App",
        description: "Resume Application is a website which is introduce about my self and show some projects that I have done.",
        techUsed: "Technique: ReactJS, Bootstrap",
        member: "Member: Nay Thom",
        roles: "",
        sourceUrl: "https://github.com/thomnay98/resume-app",
        liveDemo: "",
        image: resumeAppImg
    },
    {
        title: "Mini project - UT Travel App",
        description: "The Website use to show the tours. With the function of filtering by price and destination you want to travel. Using Context API to store data like a global state and Contentful as a database",
        techUsed: "Technique: ReactJS, ContextAPI, React Router, Contentful",
        member: "Member: Nay Thom",
        roles: "",
        sourceUrl: "https://github.com/thomnay98/react-ut-travel-app",
        liveDemo: "https://react-ut-travel.netlify.app/",
        image: utTravelImg
    },
    {
        title: "Mini project - Student CRUD App",
        description: "Build CRUD App with the function of add, edit, delete student using React Redux, Hooks",
        techUsed: "Technique: ReactJS, Redux, Bootstrap",
        member: "Member: Nay Thom",
        roles: "",
        sourceUrl: "https://github.com/thomnay98/student-crud-app-redux",
        liveDemo: "https://thomnay98.github.io/student-crud-app-redux",
        image: stuCrudImg
    },
]

export default function Projects() {

    const [image, setImage] = useState();
    const [showModal, setShowModal] = useState(false);

    return (
        <div id="project">
            <div className="container">
                <Title title="Project" />
                {
                    projects.map((project, index) => {
                        return <Project 
                                    key={index} 
                                    index={index} 
                                    project={project} 
                                    setShowModal={setShowModal}
                                    setImage={setImage} 
                                />
                    })
                }
            </div>
            <ModalImage image={image} showModal={showModal} setShowModal={setShowModal} />
        </div>
    )
}

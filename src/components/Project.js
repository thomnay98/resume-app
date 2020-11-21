import React from 'react';

const checkIndex = (index) =>{
    if(index%2 === 0){
        return true;
    }else{
        return false;
    }
}

function Project({ index, project }) {
    return (
        <div className="project-item">
        {
            checkIndex(index)
            ?
            <div className="row">
                <div data-aos="fade-right" className="col-md justify-content-center project-img" align="center">
                    <img src={project.image} alt="" />
                </div>
                <div data-aos="fade-left" className="col-md project-des">
                    <h4 className="text-center">
                        {project.title}
                    </h4>
                    <p>
                        {project.description}
                    </p>
                    <p>
                        {project.techUsed}
                    </p>
                    <p>
                        {project.member}
                    </p>
                    <p>
                        {project.roles}
                    </p>
                    <span className="project-btn">
                        {
                            project.sourceUrl
                            ?
                            <button className="btn btn-global">
                                <a href={project.sourceUrl} target="blank">Source Code</a>
                            </button>
                            :
                            null
                        }
                        {
                            project.liveDemo
                            ?
                            <button className="btn btn-global">
                                <a href={project.liveDemo} target="blank">Live Demo</a>
                            </button>
                            :
                            null
                        }
                    </span>
                </div>
            </div>
            :
            <div className="row">
                <div data-aos="fade-right" className="col-md project-des">
                    <h4 className="text-center">
                        {project.title}
                    </h4>
                    <p>
                        {project.description}
                    </p>
                    <p>
                        {project.techUsed}
                    </p>
                    <p>
                        {project.member}
                    </p>
                    <p>
                        {project.roles}
                    </p>
                    <span className="project-btn">
                        {
                            project.sourceUrl
                            ?
                            <button className="btn btn-global">
                                <a href={project.sourceUrl} target="blank">Source Code</a>
                            </button>
                            :
                            null
                        }
                        {
                            project.liveDemo
                            ?
                            <button className="btn btn-global">
                                <a href={project.liveDemo} target="blank">Live Demo</a>
                            </button>
                            :
                            null
                        }
                    </span>
                </div>
                <div data-aos="fade-left" className="col-md project-img">
                    <img src={project.image} alt="" />
                </div>
            </div>
        }
        </div>
    )
}

export default Project;

import React from 'react';
import { Link } from 'react-scroll';

function Navbar() {

    const [shadow, setShadow] = React.useState(false);

    const addShadowNavbar = () => {
        if(window.scrollY >= 100){
            setShadow(true);
        }else{
            setShadow(false);
        }
    }

    window.addEventListener('scroll', addShadowNavbar);

    return (
        <nav className={shadow?"navbar navbar-expand-md navbar-light fixed-top active":"navbar navbar-expand-lg navbar-light fixed-top"}>
            <div className="container">
                <Link 
                    className="nav-brand" 
                    to="home" 
                    smooth={true} 
                    offset={-50} 
                    duration={500} 
                    
                >
                    MY RESUME
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-bars" />
                </button>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link activeClass="active" 
                                className="nav-link" 
                                to="home" 
                                spy={true} 
                                smooth={true} 
                                offset={-50} 
                                duration={500} 
                                
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClass="active" 
                                className="nav-link" 
                                to="about" 
                                spy={true} 
                                smooth={true} 
                                offset={-50} 
                                duration={500} 
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClass="active" 
                                className="nav-link" 
                                to="skill" 
                                spy={true} 
                                smooth={true} 
                                offset={1} 
                                duration={500} 
                            >
                                Skill
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClass="active" 
                                className="nav-link" 
                                to="project" 
                                spy={true} 
                                smooth={true} 
                                offset={0} 
                                duration={500} 
                            >
                                Project
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link activeClass="active" 
                                className="nav-link" 
                                to="contact" 
                                spy={true} 
                                smooth={true} 
                                offset={-50} 
                                duration={500} 
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

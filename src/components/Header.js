import React from 'react';
import { Link } from 'react-scroll';

export default function Header() {
    return (
        <header id="home">
            <div className="container">
                <div className="header-content">
                    <h1>I am Nay Thom</h1>
                    <h2>I'm Front-end Devoloper</h2>
                    <Link activeClass="active" 
                        className="nav-link" 
                        to="about" 
                        spy={true} 
                        smooth={true} 
                        offset={-50} 
                        duration={500} 
                    >
                        <i className="fa fa-chevron-circle-down" />
                    </Link>
                </div>
            </div>
        </header>
    )
}

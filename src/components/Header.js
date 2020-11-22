import React from 'react';
import { Link } from 'react-scroll';
import Typed from 'react-typed';

export default function Header() {
    return (
        <header id="home">
            <div className="container">
                <div className="header-content">
                    <h3>Hello, my name is</h3>
                    <h1>Nay Thom</h1>
                    <h2>
                        And I'm a {''}
                        <span>
                            <Typed
                                strings={['Front-end Developer']}
                                typeSpeed={60}
                                backSpeed={50}
                                loop
                            />
                        </span>
                    </h2>
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

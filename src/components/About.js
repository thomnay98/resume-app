import React from 'react';

import Title from './Title';
import Avatar from '../assets/avatar.jpg';

export default function About() {
    return (
        <section id="about">
            <div className="container">
                <Title title="About" />
                <div className="row">
                    <div data-aos="flip-left" className="col-md d-flex justify-content-center">
                        <img src={Avatar} alt="" />
                    </div>
                    <div data-aos="flip-left" className="col-md">
                        <p>Hi, I'm Nay Thom, a developer living in Ho Chi Minh city. I’m originally from Gia Lai province. I moved to HCM in 2016 as a student at UIT (University of Information Technology).</p>
                        <p>I really love soccer and game, so I usually spend my free time for playing soccer or game with my friend. Besides esports games, I often play blockchain game and spent time to search and research the new one.</p>
                        <p>In terms of work, my immediate goal is to have a stable job, a working environment where I can develop my professional skills, learn new programming knowledge to successfully complete my assigned work. Becoming a fullstack developer is my long-term goal.</p>
                        <button className="btn btn-global">My CV</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

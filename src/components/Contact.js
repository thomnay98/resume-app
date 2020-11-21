import React from 'react';

import Title from './Title';

export default function Contact() {
    return (
        <section id="contact">
            <div className="container" align="center">
                <Title title="Contact" />
                <h3 data-aos="fade-up">Would you like to work with me? Awesome!</h3>
                <button data-aos="fade-up" className="btn btn-global">
                    Email
                </button>
            </div>
        </section>
    )
}

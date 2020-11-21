import React from 'react';

import Skill from './Skill';
import Title from './Title';

import htmlLogo from '../assets/logoSkill/html-logo.png';
import cssLogo from '../assets/logoSkill/css-logo.png';
import jsLogo from '../assets/logoSkill/js-logo.png';
import bootstrapLogo from '../assets/logoSkill/bootstrap-logo.png';
import reactLogo from '../assets/logoSkill/react-logo.png';

const items = [
    {
        name: "HTML",
        image: htmlLogo
    },
    {
        name: "CSS",
        image: cssLogo
    },
    {
        name: "JAVASCRIPT",
        image: jsLogo
    },
    {
        name: "BOOTSTRAP",
        image: bootstrapLogo
    },
    {
        name: "REACTJS",
        image: reactLogo
    },
]

export default function Skills() {
    return (
        <section id="skill">
            <div className="container">
                <Title title="Skills" />
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                    {
                        items.map((item, index) => {
                            return (
                                <div key={index} className="col">
                                    <Skill item={item} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

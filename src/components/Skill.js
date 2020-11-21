import React from 'react';

function Skill({ item }) {
    console.log(item);
    return (
        <div data-aos="zoom-in" className="skill-item">
            <img src={item.image} alt={item.name} />
            <div className="text-logo">{item.name}</div>
        </div>
    )
}

export default Skill;

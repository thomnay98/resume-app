import React from 'react'

function Title({title}) {
    return (
        <div data-aos="flip-up" className="section-title">
            <h1>{title}</h1>
            <div />
        </div>
    )
}

export default Title;

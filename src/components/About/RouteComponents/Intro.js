import React from 'react'

import '../../../styles/About/Route/Intro.scss'
const Intro = () => {
    return (
        <>
            <div className="about-intro">
                <div className="about-intro__container">
                    <div className="about-intro__header">
                        <h2 className="about-intro__number">0<span>1</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">H<span>ello</span>.</h1>
                    </div>
                    <div className="about-intro__description">
                        <p data-aos='fade-right' >I am <span>Abdulrehman siddiqui....</span></p>
                        <p data-aos='fade-right' data-aos-delay='200'>I'm a dedicated Front-End Developer with over a year of experience in building responsive websites</p>
                        <p data-aos='fade-right' data-aos-delay='400'>using React and Vue. I love creating innovative front-end features and am continuously expanding</p>
                        <p data-aos='fade-right' data-aos-delay='600'>my skills. I also have a basic understanding of server-side development with Node.js.</p>
                        {/* <p data-aos='fade-right' data-aos-delay='800'>Add few more lines if required...</p> */}

                        <div className="about-intro__emoji">:&nbsp;)</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro
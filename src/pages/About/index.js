import React from 'react'
import './style.css'

const About = () => {
    return (
        <>
            <div style={{ padding: '30px', display: 'flex' }}>
                <img className='holpic' src="holpic.PNG" alt="Picture of Bradley" />
                <div style={{ padding: '30px' }}>
                    <h1>Hello I'm Bradley</h1>
                    <h3>A Trainee Software Developer based in the United Kingdom </h3>
                    <p>I was born and raised in Liverpool, where I am currently based after a 4 year spell in Leeds. Those 4 years were spent studying at Leeds university.</p>
                    <p>I am currently taking part in a 13-week intensive course with tech academy <a href='https://www.getfutureproof.co.uk/' target={'blank'}>futureproof</a>.</p>
                    <a href='./BradleyCV pdf.pdf' download={"BradleyCV.pdf"}><button className='btnSecondary'>Download my CV!</button></a>
                </div>
            </div>
            <div style={{ padding: '30px', display: 'flex' }}>
                <div>
                    <h2>Education</h2>
                </div>
                {/* <img src="" alt="" /> */}
                
            </div>
        </>
    )
}

export default About
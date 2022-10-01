import React from 'react'
import './style.css'

const About = () => {
    return (
        <div style={{ padding: '30px', display: 'flex' }}>
            <img className='holpic' src="holpic.PNG" alt="Picture of Bradley" />
            <div style={{padding: '30px'}}>
                <h1>Hello I'm Bradley</h1>
                <h3>A Trainee Software Developer based in the United Kingdom </h3>
                <br />
                <p1>I was born and raised in Liverpool, where I am currently based after a 4 year spell in Leeds where I studied at university.</p1>
            </div>
        </div>
    )
}

export default About
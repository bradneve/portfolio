import React from 'react'
import './style.css'

const About = () => {
    return (
        <>
            <div className='intro-container' style={{ padding: '30px', display: 'flex', textAlign:'center', alignItems: 'center' }}>
                <img className='holpic' src="holpic.PNG" alt="Picture of Bradley" />
                <div style={{ padding: '30px' }}>
                    <h1>Hello I'm Bradley</h1>
                    <h3>A Trainee Software Developer based in the United Kingdom </h3>
                    <p>I was born and raised in Liverpool, where I am currently based after a 4 year spell in Leeds. Those 4 years were spent studying at Leeds university.</p>
                    <p>I am currently taking part in a 13-week intensive course with tech academy <a style={{textDecoration: 'underline'}} className='contactLink' href='https://www.getfutureproof.co.uk/' target={'blank'}>futureproof</a>.</p>
                    <a  href='./BradleyeNeveCV.pdf' download={"./BradleyNeveCV.pdf"}><button className='btnSecondary'>Download my CV!</button></a>
                </div>
            </div>
            <div className='education-container' style={{ padding: '30px', display: 'flex' }}>
                <div style={{textAlign: 'center'}}>
                    <h2>Education</h2>
                    {/* <ul className='education-list'> */}
                        <p className='education-list'>Degree - Mathematics MMATH/BSc 2:1</p>
                        <p className='education-list'>A-levels - Mathematics A*, Further Mathematics A, Physics, A</p>
                    {/* </ul> */}
                </div>
                <img className='education-pic' src="gradpic2.jpg" alt="" />
                
            </div>
        </>
    )
}

export default About
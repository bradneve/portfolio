import React from 'react'
import './style.css'

const About = () => {
    return (
        <>
            <div className='intro-container' style={{ padding: '30px', display: 'flex', textAlign: 'center', alignItems: 'center' }}>
                <img className='holpic' src="holpic.PNG" alt="Picture of Bradley" />
                <div style={{ padding: '30px' }}>
                    <h1>Hello I'm Bradley</h1>
                    <h3>A Trainee Software Developer based in the United Kingdom </h3>
                    <p>I was born and raised in Liverpool, where I am currently based after a 4 year spell in Leeds. Those 4 years were spent studying at Leeds university, where I obtained a 2:1 in an mathematics integrated master's degree.</p>
                    <p>Most recently, I completed a 13-week intensive course with tech academy <a style={{ textDecoration: 'underline' }} className='contactLink' href='https://www.getfutureproof.co.uk/' target={'blank'}>futureproof</a>. Here I learnt all the basics of programming and web-development and had the opportunity to put these skills to the test during regular project weeks. Now I look to take the next step in my journey into technology and as such, have began my search for a permanent role in the industry.</p>
                    <a href='./BradleyeNeveCV.pdf' download={"./BradleyNeveCV.pdf"}><button className='btnSecondary'>Download my CV!</button></a>
                </div>
            </div>
            {/* <div className='education-container' style={{ padding: '30px', display: 'flex' }}>
                <div style={{ textAlign: 'center', width: '100%' }}>
                    <h2>Education</h2>
                    <p className='education-list'>Degree - Mathematics MMATH/BSc 2:1</p>
                    <p className='education-list'>A-levels - Mathematics A*, Further Mathematics A, Physics, A</p>
                </div>
                <img className='education-pic' src="gradpic2.jpg" alt="" />
            </div> */}
        </>
    )
}

export default About
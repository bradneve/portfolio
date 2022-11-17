import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

const Home = () => {
    return (
        <div style={{ paddingBottom: '100px' }}>
            <div className='streak'>
                <div style={{ padding: '30px' }}>

                    <h2 className='hello'>Hello, I am</h2>
                    <h1 className='myName'>Bradley Neve</h1>
                    <h3 className='jobTitle'>A Trainee Software Developer</h3>
                    <h3>Based in the United Kingdom</h3>
                </div>
                <img className='gradPic' src="gradpic.jpg" alt="Me" />
            </div>

            <div className='gallery-container'>
                <h1 style={{paddingBottom: '50px'}}>Featured Projects</h1>
                <div className="gallery">
                    <Link to="/projects">
                        <img className='gallery-img' src="fantaisy.png" title="TITLE 1" />
                    </Link>
                    <Link to="/projects">
                    <img className='gallery-img' src="triviarangers.png" title="TITLE 2" />
                    </Link>
                    <Link to="/projects">
                    <img className='gallery-img' src="wroteit.png" title="TITLE 2" />
                    </Link>
                    <Link to="/projects">
                    <img className='gallery-img' src="habitual.png" title="TITLE 2" />
                    </Link>
                </div>
            </div>
            {/* <div className='streak-two'>
                <img className='fantaisyPic' src="fantaisy.png" alt="Me" />
                <div style={{padding: '30px'}}>
                    
                <h2 className='hello'>Hello, I am</h2>
                <h1 className='myName'>Bradley Neve</h1>
                <h3 className='jobTitle'>A Trainee Software Developer</h3>
                <h3>Based in the United Kingdom</h3>
                </div>
            </div> */}
        </div>
    )
}

export default Home
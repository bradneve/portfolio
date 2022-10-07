import React from 'react'
import './home.css'

const Home = () => {
    return (
        <div style={{paddingBottom: '100px'}}>
            <div className='streak'>
                <div style={{padding: '30px'}}>
                    
                <h2 className='hello'>Hello, I am</h2>
                <h1 className='myName'>Bradley Neve</h1>
                <h3 className='jobTitle'>A Trainee Software Developer</h3>
                <h3>Based in the United Kingdom</h3>
                </div>
                <img className='gradPic' src="gradpic.jpg" alt="Me" />
            </div>
        </div>
    )
}

export default Home
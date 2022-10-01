import React from 'react'
import './home.css'

const Home = () => {
    return (
        <div style={{paddingBottom: '100px'}}>
            <div className='streak'>
                <div style={{padding: '30px'}}>
                    
                <h2>Hello, I am</h2>
                <h1>Bradley Neve</h1>
                <h3>A Trainee Software Developer based in the United Kingdom </h3>
                </div>
                <img className='gradPic' src="gradpic.jpg" alt="Me" />
            </div>
        </div>
    )
}

export default Home
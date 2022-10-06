import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Home, About, Projects } from './pages';
import { Header, Footer } from './layout/index'


const App = () => {


  return (
    <>
        <div style={{ backgroundColor:'#505760', color: '#cbd3e0', margin: '0', padding: '10px'}}>
          <Header />
          <Routes>

          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>

          </Routes>
          <Footer />

        </div>
    </>
  )
};

export default App;

import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Home, About, Projects } from './pages';
import { Header, Footer } from './layout/index'
import './app.css'


const App = () => {


  return (
    <>
        <div className="app">
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

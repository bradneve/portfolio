import React, { useEffect, useState } from 'react';
import { Home } from './pages';
import { Header, Footer } from './layout/index'


const App = () => {


  return (
    <>
        <div style={{ backgroundColor:'#505760', color: '#cbd3e0', margin: '0', padding: '10px'}}>
          <Header />
          <Home />
          {/* <Footer /> */}

        </div>
    </>
  )
};

export default App;

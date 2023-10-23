import React from 'react';
import { Home } from './components/Seccion/Home';
import { About } from './components/Seccion/About';
import { Menu } from './components/Menu/Menu';
import { Work } from './components/Seccion/Work';
import './App.scss'
import { AsideCV } from './components/AsideCV/AsideCV';
import { TimeLine } from './components/Seccion/TimeLine';
 

function App() {
  return (
    <>
   
    <div className="container">
      <div className="left">
        <aside>
          <AsideCV />
        </aside>
      </div>
      <div className="right">
        <header>
         
        </header>
        <main>
        <Menu />
        <div className="global-seccion">
        <Home/>
          <About/>
          <Work />
          <TimeLine />
        </div>
        </main>
      </div>
    </div>
    

   
    
    </>
    
  );
}

export default App;

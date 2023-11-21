import React from "react";
import { Home } from "./components/Seccion/Home/Home";
import { About } from "./components/Seccion/About/About";
import { Menu } from "./components/Menu/Menu";
import { Work } from "./components/Seccion/Work/Work";
import "./App.scss";
import { AsideCV } from "./components/AsideCV/AsideCV";
import { TimeLine } from "./components/Seccion/TimeLine/TimeLine";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="container">
        <ProgressBar />

        <aside className="left">
          <AsideCV />
        </aside>

        <main className="right">
          <header>
            <Menu />
          </header>

          <div className="global-seccion">
            <Home />
            <About />
            <Work />
            <TimeLine />
          </div>
        </main>

        <footer className="cont-foot">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;

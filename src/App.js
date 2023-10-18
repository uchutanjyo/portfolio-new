import React from 'react';
import './styles/App.css';

// react router
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';
// pages
import Home from './Home';
import About from './Skills';
import Projects from "./Projects";
import Skills from './Skills';
import Contact from './Contact';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="Navandtitle">
          <nav className="Nav">
            <div className="Nav-links">
              <Link to="/" id="/home" className="Navbar-link">
                {" "}
                <div className="nav-item">
                  <img src={require("./assets/about.png")} />
                  About{" "}
                </div>
              </Link>
              <Link to="/Projects" id="/projects" className="Navbar-link">
                {" "}
                <div className="nav-item">
                  <img src={require("./assets/projects.png")} />
                  Projects{" "}
                </div>
              </Link>

              <Link to="/Skills" id="/skills" className="Navbar-link">
                {" "}
                <div className="nav-item">
                  <img src={require("./assets/skills.png")} />
                  Skills{" "}
                </div>
              </Link>

              <Link to="/Contact" id="/contact" className="Navbar-link">
                {" "}
                <div className="nav-item">
                  <img src={require("./assets/contact.png")} />
                  Contact{" "}
                </div>
              </Link>
            </div>
          </nav>
        </div>
        <div className="background-title-1">
          <h1 className="Title"></h1>
        </div>{" "}
        <div className="background-title-2">
          {" "}
          <h1 className="Title"></h1>
        </div>
        <div className="right-background-title">
          {" "}
          <h1 className="Title"></h1>
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="about/" element={<About />}></Route>
          <Route path="projects/" element={<Projects />}></Route>
          <Route path="skills/" element={<Skills />}></Route>
          <Route path="contact/" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';

// react router
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';
// pages
import Home from './Home';
import About from './Skills';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';


const App = () => {
return (
    <>
        <BrowserRouter>
    <div className='Navandtitle'>
             
        <nav className='Nav'>
            <div className='Nav-links'>
                
                    <Link to="/" id='home' className='Navbar-link'>Home</Link>
                     <Link to="/About" className='Navbar-link'>About</Link>
                    <Link to="/Projects" className='Navbar-link'>Projects</Link>
                    <Link to="/Skills" className='Navbar-link'>Skills</Link>
                    <Link to="/Contact" className='Navbar-link'>Contact</Link>
                                        <Link to="/" className='Navbar-link'></Link>

                    
            
</div>

        </nav>
     
    </div>
          <div className='Main-banner-background'>
         
</div>


<div className='background-title'>
      
          <h1 className='Title'></h1>
                                          </div>  
                                          <div className='right-background-title'>          <h1 className='Title'></h1>
</div>
    <Routes>
<Route  path="/" element={<Home />} >
</Route>
<Route  path="about/" element={<About />}>
</Route>
<Route  path="projects/" element={<Projects />}>
</Route>
<Route  path="skills/" element={<Skills />}>
</Route>
<Route  path="contact/" element={<Contact />}>
</Route>
</Routes>
</BrowserRouter>
</>
)
};

export default App;
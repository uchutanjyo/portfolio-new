import React from 'react';
import Main from './components/Main'
import Post from './components/Post'
import Paragraph from './components/Paragraph'


const Projects = () => {
  return (
    <>
    <div className='section'>
     
        <div className="header">
      <h1>My projects</h1>
    <div className="underline"></div>
    </div>
     <div className="projects-container">
   
   {/* 1st project */}
    <div className="project-container">
         <h2>Experimental musician "Mite" - artist website</h2>
    <div className="project-image">
   
    <div>  <img  src={require('./assets/mite-bandcamp.png')} /></div>  
    </div>
    <div className="project-info">
          <div className="project-actual-info">
            Simple single-page React/React Router app for a musician website. Includes a built in music player and an album-viewer modal which displays detailed album information when opened.
          </div>
    <div className="project-gotosite">
      <button>Go to site</button>
    </div>
    </div>
    <div className="project-tech">      
      <img src={require('./assets/html.png')} />
      <img src={require('./assets/css.png')} />
       <img src={require('./assets/react.png')} />

</div>
    </div>

       {/* 2nd project */}
    <div className="project-container">
         <h2>Experimental musician "Mite" - artist website</h2>
    <div className="project-image">
   
    <div>  <img  src={require('./assets/mite-bandcamp.png')} /></div>  
    </div>
    <div className="project-info">
      <h2></h2>
    </div>
    <div className="project-tech"></div>
    </div>

           {/* 3nd project */}
    <div className="project-container">
         <h2>Experimental musician "Mite" - artist website</h2>
    <div className="project-image">
   
    <div>  <img  src={require('./assets/mite-bandcamp.png')} /></div>  
    </div>
    <div className="project-info">

    </div>
    <div className="project-tech"></div>
    </div>


    <div className="project-container">fa</div>
        <div className="project-container">fa</div>
         


        </div>
 
    </div>
    
 


    </>
  );
};

export default Projects;

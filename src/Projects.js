import React from 'react';



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
         <h2>"The Indispensable" (E-commerce Store)</h2>
    <div className="project-image">
   
    <div><a href="https://the-indispensable.netlify.app/"><img src={require('./assets/the-indispensable.png')} /></a></div>  
    </div>
    <div className="project-info">
    <div className="project-actual-info">
          <div>
            Online shop selling essential items. Full-stack application with shopping cart functionality. Back-end created with Express.js, connected to MySQL database. Front-end created with React.
          </div>
          <div>
           <b> A few things are still a work in progress:</b> unique user shopping cart, user login/authentication, optimizing app speed, refactor to make use of React components as much as possible. 
      </div>
      </div>
    <div className="project-viewcode">
    <form action="https://the-indispensable.netlify.app/">
    <a href="https://the-indispensable.netlify.app/" title="view code">view code<img src={require('./styles/github.png')} /></a>

    </form>
    </div>
    </div>
    <div className="project-tech">      
      <img src={require('./assets/html.png')} />
      <img src={require('./assets/sass.png')} />
       <img src={require('./assets/react.png')} />
       <img src={require('./assets/nodejs.png')} />
       <img src={require('./assets/sql.png')} />
</div>
    </div>

       {/* 2nd project */}
       <div className="project-container">
         <h2>Experimental musician "Mite" - artist website</h2>
    <div className="project-image">
   
    <div>  <img  src={require('./assets/mite-bandcamp.png')} /></div>  
    </div>
    <div className="project-info">
          <div className="project-actual-info">
            Simple single-page React/React Router app for a musician website. Includes a built in music player and an album-viewer modal which displays detailed album information when opened.
          </div>
    <div className="project-viewcode">
    <form action="http://mitehole.bandcamp.com">
    <a href="https://the-indispensable.netlify.app/" title="view code">view code<img src={require('./styles/github.png')} /></a>
    </form>
    </div>
    </div>
    <div className="project-tech">      
      <img src={require('./assets/html.png')} />
      <img src={require('./assets/css.png')} />
       <img src={require('./assets/react.png')} />
</div>
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


    <div className="project-container"></div>
        <div className="project-container"></div>
         


        </div>
 
    </div>
    
 


    </>
  );
};

export default Projects;

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
            An online shop selling essential items. Full-stack application with shopping cart functionality. User can search for products by name/category and add items to (currently COMMUNAL) shopping cart. Items can also be deleted from the shopping cart.
          <br/><br/>
            
           This single-page app was created with React hooks, functional components, and React router. The front end makes Axios GET and POST requests to a REST API created with Express.js, connected to a MySQL database. Deployed to Netlify and Heroku.
          </div>
          <div>
           <b> A few things are still a work in progress:</b> cart total price, unique user shopping cart, user login/authentication, optimizing app speed (currently, state is not updating quickly enough when adding/deleting cart items), refactor to make use of React components as much as possible, <strike>add search-by-category functionality, 'Featured Product of the day' </strike>, make mobile + higher resolution responsive. All coming very soon!  
      </div>
      </div>
    <div className="project-viewcode">
    <form action="https://the-indispensable.netlify.app/">
    <a href="https://github.com/uchutanjyo/e-commerce" title="view code">view code<img src={require('./styles/github.png')} /></a>

    </form>
    </div>
    </div>
    <div className="project-tech">      
      <img src={require('./assets/html.png')} />
      <img src={require('./assets/sass.png')} />
       <img src={require('./assets/react.png')} />
       <img src={require('./assets/nodejs.png')} />
       <img src={require('./assets/mysql.png')} />
</div>
    </div>

       {/* 2nd project */}
       <div className="project-container">
         <h2>Experimental musician "Mite" - artist website</h2>
    <div className="project-image">
   
    <div>  <img  src={require('./assets/mite.png')} /></div>  
    </div>
    <div className="project-info">
          <div className="project-actual-info">
            Simple single-page React/React Router app for a musician website. Includes a built in music player (coming within a few days) and an album-viewer modal which displays detailed album information when opened. ** Will be deployed very soon **
          </div>
    <div className="project-viewcode">
    <form action="http://mitehole.bandcamp.com">
    <a href="" title="view code">view code<img src={require('./styles/github.png')} /></a>
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
         <h2>Meal Planner App</h2>
    <div className="project-image">
   
    <div>  <img  src={require('./assets/mealplanner.png')} /></div>  
    </div>
    <div className="project-info">
          <div className="project-actual-info">
Multi-step meal planner app coded entirely with vanilla Javascript. User has option to create menu item in Step 1, add ingredients in Step 2, and confirm the menu item and choose a calendar date in Step 3. Ultimately, the user can create colour-coded meal plans by type (breakfast, lunch dinner) for the current month and view detailed daily info via a modal calendar. Data stored in local storage. *Currently undergoing refactoring*.         </div>
    <div className="project-viewcode">
    <form action="http://mitehole.bandcamp.com">
    <a href="https://github.com/uchutanjyo/" title="view code">view code<img src={require('./styles/github.png')} /></a>
    </form>
    </div>
    </div>
    <div className="project-tech">      
      <img src={require('./assets/html.png')} />
      <img src={require('./assets/css.png')} />
       <img src={require('./assets/javascript.png')} />
</div>
    </div>


        </div>
    </div>
    
 


    </>
  );
};

export default Projects;

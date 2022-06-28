import React from "react";

const Projects = () => {
  return (
    <>
      <div className="section">
        <div className="header">
          <h1>My projects</h1>
          <div className="underline"></div>
        </div>
        <div className="projects-container">
          {/* 1st project */}
          <div className="project-container">
            <h2>"The Indispensable" (E-commerce Store)</h2>
            <div className="project-image">
              <div>
                <a href="https://the-indispensable.netlify.app/" target="_blank">
                  <img src={require("./assets/the-indispensable.png")} />
                </a>
              </div>
            </div>
            <div className="project-info">
              <div className="project-actual-info">
                <div>
                  An online shop selling essential items. Full-stack application
                  with shopping cart functionality. User can search for products
                  by name/category and add items to (currently COMMUNAL - yes,
                  everyone in the world can share one..) shopping cart. Items
                  can also be deleted from the shopping cart.
                  <br />
                  <br />
                  This single-page app was created with React hooks, functional
                  components, and React router. The front end makes Axios GET
                  and POST requests to a REST API created with Express.js,
                  connected to a MySQL database. Deployed to Netlify and Heroku.
                </div>
                <div>
                  <b> A few things are still a work in progress:</b>  <strike>cart total price</strike>, unique user shopping cart, user login/authentication,
                  <strike>
                    fix delete (wrong item being deleted from cart)
                  </strike>
                  ,
                  <strike>
                    optimizing app speed (currently, state is not updating
                    quickly enough when adding/deleting cart items)
                  </strike>
                  , refactor to make use of React components as much as
                  possible,
                  <strike>
                    add search-by-category functionality, 'Featured Product of
                    the day', make mobile responsive
                  </strike>
                  + higher resolution responsive. All coming very soon!
                </div>
              </div>
              <div className="project-viewcode">
                <a
                  href="https://github.com/uchutanjyo/e-commerce" 
                  title="view code"
                  target="_blank"
                >
                  view code
                  <img src={require("./styles/github.png")} />
                </a>
              </div>
            </div>
            <div className="project-tech">
              
              <img src={require("./assets/html.png")} />
              <img src={require("./assets/sass.png")} />
              <img src={require("./assets/react.png")} />
              <img src={require("./assets/nodejs.png")} />
              <img src={require("./assets/mysql.png")} />
            </div>
          </div>

          {/* 2nd project */}
           <div className="project-container">
            <h2>Personal Web Developer Blog Website</h2>
            <div className="project-image">
              <div>
                
                <img  alt="under construction, coming soon!" />
              </div>
            </div>
            <div className="project-info">
              <div className="project-actual-info">
                <div>
                  <b>*Currently NOT live, coming soon*</b>
                </div>
                Personal blog application built with React. Includes custom pagination hook (using state and memoization) built for a previously completed coding assessment and reworked into original project.  Will be deployed ASAP.
              </div>
              <div className="project-viewcode">
                  <a href="https://github.com/uchutanjyo/personal-blog" title="view code" target="_blank">
                    view code
                    <img src={require("./styles/github.png")} />
                  </a>
              </div>
            </div>
            <div className="project-tech">
            <img src={require("./assets/html.png")} />
              <img src={require("./assets/sass.png")} />
              <img src={require("./assets/react.png")} />
            </div>
          </div>

          {/* 3rd project */}
          <div className="project-container">
            <h2>Experimental musician "Mite" - artist website</h2>
            <div className="project-image">
              <div>
                
                <a href="https://mitehole.netlify.app/" target="_blank">
                  
                  <img src={require("./assets/mite.png")} />
                </a>
              </div>
            </div>
            <div className="project-info">
              <div className="project-actual-info">
                <div>
                  Simple single-page React app for a musician
                  website. Includes a built in music player and an album-viewer
                  modal which displays detailed album information when opened.
                  Mobile-responsive.
                </div>
                <div>
                  Still under construction:
                  <strike>
                    music player conversion from earlier Vanilla JS project to
                    React
                  </strike>
                  , audio scrubbing, correct display of track progress.
                </div>
              </div>
              <div className="project-viewcode">
                <a
                  href="https://github.com/uchutanjyo/mitehole"
                  title="view code"
                  target="_blank"
                >
                  view code
                  <img src={require("./styles/github.png")} />
                </a>
              </div>
            </div>
            <div className="project-tech">
              <img src={require("./assets/html.png")} />
              <img src={require("./assets/css.png")} />
              <img src={require("./assets/react.png")} />
            </div>
          </div>

           {/* 4th project */}
           <div className="project-container">
            <h2>Personal Portfolio (This Website)</h2>
            <div className="project-image">
              <div>
                <a href="https://mattengerer.ca/" target="_blank">
                  <img src={require("./assets/portfolio.png")} />
                </a>
              </div>
            </div>
            <div className="project-info">
              <div className="project-actual-info">
                <div>
                  Because I am happy with the simple and clean design, I stuck
                  this on here. Mobile-responsive.
                </div>
                <div>
                  Still under construction: adding an increasing number of
                  projects, optimize code, optimize responsiveness for larger
                  resolutions.
                </div>
              </div>
              <div className="project-viewcode">
                <a
                  href="https://github.com/uchutanjyo/portfolio"
                  title="view code"
                  target="_blank"
                >
                  view code
                  <img src={require("./styles/github.png")} />
                </a>
              </div>
            </div>
            <div className="project-tech">
              <img src={require("./assets/html.png")} />
              <img src={require("./assets/sass.png")} />
              <img src={require("./assets/react.png")} />
            </div>
          </div>

  {/* 5th project */}
  <div className="project-container">
            <h2>Meal Planner App</h2>
            <div className="project-image">
              <div>
                <img src={require("./assets/mealplanner.png")} />
              </div>
            </div>
            <div className="project-info">
              <div className="project-actual-info">
                <div>
                  <b>*Currently NOT live, undergoing major refactoring*</b>
                </div>
                Multi-step meal planner app coded entirely with vanilla
                Javascript. User has option to create menu item in Step 1, add
                ingredients in Step 2, and confirm the menu item and choose a
                calendar date in Step 3. The user can create colour-coded meal
                plans by type (breakfast, lunch dinner) for the current month
                and view detailed daily info via a modal calendar. Data stored
                in local storage.
              </div>
              <div className="project-viewcode">
                  <a href="https://github.com/uchutanjyo/" title="view code" target="_blank">
                    view code
                    <img src={require("./styles/github.png")} />
                  </a>
              </div>
            </div>
            <div className="project-tech">
              <img src={require("./assets/html.png")} />
              <img src={require("./assets/css.png")} />
              <img src={require("./assets/javascript.png")} />
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Projects;

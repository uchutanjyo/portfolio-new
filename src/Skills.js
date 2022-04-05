import React from 'react';
import Main from './components/Main'
import Post from './components/Post'
import Paragraph from './components/Paragraph'


const Skills = () => {
  return (
    <>
     <div className='section'>
     
        <div className="header">
      <h1>My skills</h1>
    <div className="underline"></div>
    </div>
<div className='skills-info'> 
<div> I'm currently stronger in front-end development, but am working to become more knowledgable in back-end technologies with the goal of eventually being able to call myself a full-stack developer.</div> 
<div> Whether it's furthering my knowledge of the following technologies and tools or learning brand new ones, I'm always striving to learn more. What's next on my list? Whichever tool is required for the job! </div> </div>
     <div className="skills-container">
    <div className="skill-container">
      <div className="skill-icon">
        <img src={require('./assets/html.png')} />
    </div>
        <div className="skill-title">HTML5</div>
   
    </div>
    <div className="skill-container">
           <div className="skill-icon">
        <img src={require('./assets/css.png')} />

          <div className="skill-title">CSS3</div>
          </div>
    </div>
        <div className="skill-container">
               <div className="skill-icon">
        <img src={require('./assets/javascript.png')} />
      </div>

       <div className="skill-title">Javascript</div>
            </div>
        
            <div className="skill-container">
                   <div className="skill-icon">
        <img src={require('./assets/sass.png')} />
      </div>
      <div className="skill-title">Sass</div>
       
            </div>
            
    <div className="skill-container">     <div className="skill-icon">
        <img src={require('./assets/react.png')} />
      </div>
        <div className="skill-title">React JS</div>
       
            </div>

        <div className="skill-container">     <div className="skill-icon">
        <img src={require('./assets/nodejs.png')} />
      </div>
      <div className="skill-title">Node JS</div>
       
              </div>

          <div className="skill-container">     <div className="skill-icon">
        <img src={require('./assets/sql.png')} />
      </div>
      <div className="skill-title">SQL</div>
       
           </div>
         


          <div className="skill-container">     <div className="skill-icon">
        <img src={require('./assets/git.png')} />
      </div>
      <div className="skill-title">Git</div>
       
           </div>

                     <div className="skill-container">     <div className="skill-icon">
        <img src={require('./assets/question.png')} />
      </div>
      <div className="skill-title"></div>
       
           </div>
        </div>
    </div>
    
 


    </>
  );
};

export default Skills;

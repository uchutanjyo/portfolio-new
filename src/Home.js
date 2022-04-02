import React from 'react';
import Main from './components/Main'
import Post from './components/Post'
import Paragraph from './components/Paragraph'


const Home = () => {
  return (
    <>
    <div className='section'>
     
        <div className="header">
      <h1>About me</h1>
    <div className="underline"></div>
    </div>
     <div className="section-header">
       <section className='Portraits'>
        <img src="https://f4.bcbits.com/img/0026884514_10.jpg"className="portrait" />
        </section>
        <div className="header-info">
           <div className="info-section"><img src={require('./about.png')} /> Matthew Engerer</div>
             <div className="info-section"><img src={require('./location.png')} /> Toronto, ON</div>
              <div className="info-section"><img src={require('./projects.png')} /> Front-end web developer specializing in single-page React applications.</div>

        </div>
       
         
        </div>
    <div className='info'>I've been passionate about building web pages from an early age, but only considered web development as a career more recently in life. Since realizing that this is in fact the path I've been looking for all along, I've developed an even stronger passion for creating web apps with clean code, minimal design, and intuitive user experiences.
    </div>
<div className="info">I'd describe myself as organized, detail-oriented, hard-working, creative and easy-going. A  wide range of work and life experience has shaped me into a resilient person, versatile in every role I've undertaken. Web development is the next big challenge in my life; I'm very excited to get started in my first position!   </div>

   <div className='icons'>

<button id="github" ></button>
<button id="linkedin" ></button>
 </div>

    </div>
    


    </>
  );
};

export default Home;

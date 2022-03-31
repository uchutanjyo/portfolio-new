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
              <div className="info-section"><img src={require('./projects.png')} /> Front-end web developer</div>

        </div>
       
         
        </div>
    <div className='info'>My passion for building websites started in the early 2000s. Beginning with website-builders such as Maxpages and Geocities, I eventually moved on to creating my own pages using HTML and CSS. I vividly remember looking forward to Friday nights in late elementary school so I could 'work on my website'. Unfortunately, my interest waned around the start of highschool, and remained dormant until very recently in my life.
    </div>
<div className="info">Before and after graduating from UOT in 2016 I worked in a wide variety of professions. It was only after my return from a working holiday in Japan (premature due to COVID-19) and a physical injury that  I began to research Web Development as a potential career path for myself. Over the last year and a half, I have gradually built up my skills in HTML, CSS (incl. SASS), Javascript (ES6) and more recently, React. My main passion is writing clean code resulting in responsive single-page applications. I am very excited to find my first job as a developer!</div>
  
    </div>
    
 


    </>
  );
};

export default Home;

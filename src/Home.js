import React from 'react';
import Main from './components/Main'
import Post from './components/Post'
import Paragraph from './components/Paragraph'


const Home = () => {
  return (
    <>
    <header><h1>Matt Engerer</h1>
         <section className='Portraits'>
        <img src="https://f4.bcbits.com/img/0026884514_10.jpg"className="portrait" />
        </section>
    <div className='info'><h3>I'm a new front-end web developer passionate about creating interactive web experiences with clean code and simple yet effective design. I'm really looking forward to working with you!</h3>
    </div>
  
    </header>
    <div className='line'>__________________________________________________________________________________________________________________________________________</div>
 


    </>
  );
};

export default Home;

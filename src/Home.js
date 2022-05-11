import React from 'react';


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
           <div className="info-section"><img src={require('./assets/about.png')} /> Matthew Engerer</div>
             <div className="info-section"><img src={require('./assets/location.png')} /> Toronto, ON</div>
              <div className="info-section"><img src={require('./assets/projects.png')} /> Front-end web developer specializing in single-page React applications.</div>
        </div>
       
         
        </div>
    <div className='info'>I've been passionate about building web pages from an early age, but only considered web development as a career more recently in life. Since realizing that this is in fact the path I've been looking for all along, I've developed an even stronger passion for creating web apps with clean code, simple yet effective design, and intuitive user experiences.
    </div>
<div className="info">I'd describe myself as organized, detail-oriented, hard-working, creative and easy-going. I am comfortable with meeting tight deadlines and working under pressure.  A  wide range of work and life experience has shaped me into a resilient person, versatile in every role I've undertaken. I consider Web development to be the next big challenge in my life; I'm very excited to get started in my first position!   </div>

<div className="info">When I'm not coding, I make music, improve my 日本語, and spend time outside as much as possible.</div>
   <div className='icons'>

<div className="icon-container">
<form action="https://github.com/uchutanjyo">
<button id="github" ></button>
</form>
</div>
<div className="icon-container">
<form action="https://www.linkedin.com/in/matthew-engerer-143960238/">
<button id="linkedin" ></button>

</form>
</div>
 </div>

    </div>
    


    </>
  );
};

export default Home;

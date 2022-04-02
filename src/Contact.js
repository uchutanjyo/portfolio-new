import React from 'react';
import Main from './components/Main'
import Post from './components/Post'
import Paragraph from './components/Paragraph'
import ContactForm from './components/ContactForm';


const Contact = () => {
  return (
    <>
     <div className='section'>
        <div className="header">
      <h1>Contact me</h1>
    <div className="underline"></div>
    </div>
    <ContactForm></ContactForm>
 </div>

    </>
  );
};

export default Contact;

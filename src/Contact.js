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
    <div className='form-container'>
<div className='contact-info'> Email me at <a className='email' href="mailto:matt.engerer@aol.com">matt.engerer@aol.com</a>  OR fill out the form below! </div>
    <ContactForm></ContactForm>
 </div></div>

    </>
  );
};

export default Contact;

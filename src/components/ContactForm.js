import React from 'react';


const ContactForm = ({children}) => {
  return (

    <div >

<form className='contact'action="submit">
    <label htmlFor="name">Name</label>
    <input type="text" id='name'/>
       <label htmlFor="name">E-mail address</label>
    <input type="text" id='email'/>
       <label htmlFor="name">Message</label>
    <input type="text" id='message'/>
    <button action='submit'>Submit</button>
</form>
    </div>
  );
};

export default ContactForm;

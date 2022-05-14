import React, {useState, useRef} from 'react';

import emailjs from 'emailjs-com';

const ContactForm = ({children}) => {
  const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form.current)
      emailjs.sendForm(
        'service_7ugyzgd',
        'template_u8jvcfm',
        form.current,
        'CNPOcX_lOqJC8MPax')
        .then(result => {
          console.log(result)
        }).catch(err => console.log(err))
    }

  return (
    <>
<form ref={form} className='contact'action="submit">
    <label htmlFor="name">Name</label>
    <input type="text" id='name' name="user_name"/>
       <label htmlFor="name" >E-mail address</label>
       <input type="text"  id='email' name="user_email" />
       <label htmlFor="name"  name='message' >Message</label>
    <textarea  rows="10" id='message' name="message"/>
    <button action='submit' onClick={handleSubmit}>Submit</button>
</form>

<div className='hidden'></div>
</>
  );
};

export default ContactForm;


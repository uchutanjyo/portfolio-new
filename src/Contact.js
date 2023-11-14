import React, {useEffect} from "react";
import ContactForm from "./components/ContactForm";

const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0);  }, []);

  return (
    <>
      <div className="section">
        <div className="header">
          <h1>Contact me</h1>
          <div className="underline"></div>
        </div>
        <div className="form-container">
          <div className="contact-info">
            {" "}
            For all inquiries, please e-mail me at{" "}
            <a className="email" href="mailto:matt.engerer@aol.com">
              matt.engerer@gmail.com
            </a>{" "}
            OR fill out the form below!{" "}
          </div>
          <ContactForm></ContactForm>
        </div>
      </div>
    </>
  );
};

export default Contact;

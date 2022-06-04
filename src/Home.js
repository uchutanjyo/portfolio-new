import React from "react";

const Home = () => {
  return (
    <>
      <div className="section">
        <div className="header">
          <h1>About me</h1>
          <div className="underline"></div>
        </div>
        <div className="section-header">
          <section className="Portraits">
            <div className="portrait">
              <img src={require("./assets/me.jpg")} />
            </div>
          </section>
          <div className="header-info">
            <div className="info-section">
              <img src={require("./assets/about.png")} /> Matthew Engerer
            </div>
            <div className="info-section">
              <img src={require("./assets/location.png")} /> Toronto, ON
            </div>
            <div className="info-section">
              <img src={require("./assets/projects.png")} /> Front-end web
              developer specializing in single-page React applications.
            </div>
          </div>
        </div>
        <div className="home-info">
          <div className="info">
            I've been passionate about building web pages from an early age, but
            only considered web development as a career more recently in life.
            Since choosing this is as my career path, I've developed an even
            stronger passion for creating web apps with clean code,
            simple-yet-effective design, and intuitive user experiences.
          </div>
          <div className="info">
            I'd love to join your team (or help you reach your business goals).
            Please navigate to the Contact section to get in touch with me!{" "}
          </div>

          <div className="info">
            When I'm not coding, I make music, improve my 日本語, and spend time
            outside as much as possible.
          </div>
        </div>
        <div className="icons">
          {/* github icon */}
          <div className="icon-container">
            <form action="https://github.com/uchutanjyo">
              <button id="github"></button>
            </form>
          </div>
          {/* linkedin icon */}
          <div className="icon-container">
            <form action="https://www.linkedin.com/in/matthew-engerer-143960238/">
              <button id="linkedin"></button>
            </form>
          </div>
          {/* blogger icon */}
          <div className="icon-container">
            <form action="https://matte-webdevelopment.blogspot.com/">
              <button id="blogger"></button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

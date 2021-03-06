import React from "react";

const Skills = () => {
  return (
    <>
      <div className="section">
        <div className="header">
          <h1>My skills</h1>
          <div className="underline"></div>
        </div>
        <div className="skills-info">
          {" "}
          <div>
            {" "}
            I'm calling myself a front-end developer for the sake of
            highlighting my main strength; however, my knowledge of back-end
            technologies is growing every day (see my most recent project).
          </div>
          <div>
            {" "}
            Whether it's furthering my knowledge of the following technologies
            and tools or learning brand new ones, I'm always striving to learn
            more. What's next on my list? Whichever tool is required for the
            job!{" "}
          </div>{" "}
        </div>
        <div className="skills-container">
          <div className="skill-container">
            <div className="skill-icon">
              <img src={require("./assets/html.png")} />
            </div>
            <div className="skill-title">HTML5</div>
          </div>
          <div className="skill-container">
            <div className="skill-icon">
              <img src={require("./assets/css.png")} />
              <div className="skill-title">CSS3</div>
            </div>
          </div>

          <div className="skill-container">
            <div className="skill-icon">
              <img src={require("./assets/javascript.png")} />
            </div>
            <div className="skill-title">Javascript</div>
          </div>
          <div className="skill-container">
            <div className="skill-icon">
              <img src={require("./assets/sass.png")} />
            </div>
            <div className="skill-title">Sass</div>
          </div>
          <div className="skill-container">
            {" "}
            <div className="skill-icon">
              <div>
                <img src={require("./assets/react.png")} />
              </div>{" "}
            </div>
            <div className="skill-title">React.js</div>
          </div>

          <div className="skill-container">
            {" "}
            <div className="skill-icon">
              <img src={require("./assets/nodejs.png")} />
            </div>
            <div className="skill-title">Node.js</div>
            <div className="skill-title">Express.js</div>
          </div>

          <div className="skill-container">
            {" "}
            <div className="skill-icon">
              <img src={require("./assets/mysql.png")} />
            </div>
            <div className="skill-title">MySQL</div>
            <div className="skill-title">Sequelize</div>
          </div>
          <div className="skill-container">
            {" "}
            <div className="skill-icon">
              <img src={require("./assets/git.png")} />
            </div>
            <div className="skill-title">Git</div>
          </div>

          <div className="skill-container">
            {" "}
            <div className="skill-icon">
              <img src={require("./assets/question.png")} />
            </div>
            <div className="skill-title"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

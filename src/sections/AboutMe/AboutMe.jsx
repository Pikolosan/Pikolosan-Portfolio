import React from "react";
import "./AboutMestyles.css"; // Ensure this path is correct based on your project structure
import img from "../../assets/dummy.gif";
const AboutMe = () => {
  return (
    <div className="about_container">
      <div className="about_contents">
        {/* Image Section */}
        <section className="imageSection">
          <img src={img} alt="dummy gif" />
        </section>

        {/* Info Section */}
        <section className="infoSection">
          <h1>About Me</h1>
          <h2>Full Stack Web Developer</h2>
          <h3>Welcome to my portfolio! </h3>
          <p>
            I'm a dedicated Full-Stack Web Developer with a passion for creating
            seamless, user-centric web applications.
          </p>
          <h3>What I Do</h3>
          <p>
            I build dynamic and responsive websites using both front-end and
            back-end technologies. My work combines technical skill with design
            sensibility to ensure each project is both functional and visually
            engaging.
          </p>
          <h3>Discover More</h3>
          <p>
            Explore my portfolio to see how I leverage my skills to transform
            ideas into reality.
          </p>

          <div className="personalInfo">
            <div>
              <span>Name: </span>
              <span> Parth Chaudhary </span>
            </div>
            <div>
              <span>Age: </span>
              <span>19 years</span>
            </div>
            <div>
              <span>Email: </span>
              <span>parthchaudhary.jc@yahoo.com</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;

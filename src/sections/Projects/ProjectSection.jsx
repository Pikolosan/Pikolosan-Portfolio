import React, { useEffect } from "react";
import "./styles.css";
import apple from "../../assets/Apple.png";
import trainers from "../../assets/trainers.png";
import cssCoding from "../../assets/css-coding.png";
import instagram from "../../assets/instagram.png";

const ProjectSection = () => {
  useEffect(() => {
    const filterItems = document.querySelectorAll(".list");
    const projectBoxes = document.querySelectorAll(".project-box");

    filterItems.forEach((item) => {
      item.addEventListener("click", () => {
        const filter = item.getAttribute("data-filter");
        filterItems.forEach((i) => i.classList.remove("active"));
        item.classList.add("active");
        projectBoxes.forEach((box) => {
          if (filter === "all") {
            box.style.display = "block";
          } else if (box.classList.contains(filter)) {
            box.style.display = "block";
          } else {
            box.style.display = "none";
          }
        });
      });
    });
  }, []);

  return (
    <section id="project">
      {/* Heading */}
      <div className="project-heading">
        <h1>My Projects</h1>
      </div>
      {/* Filter */}
      <ul className="project-filter">
        <li className="list" data-filter="all">
          All
        </li>
        <li className="list" data-filter="front-end">
          Front-End
        </li>
        <li className="list" data-filter="full-stack">
          Full-Stack
        </li>
        <li className="list" data-filter="ml-ai">
          ML/Ai
        </li>
        <li className="list" data-filter="css">
          CSS
        </li>
      </ul>

      <div className="project-container">
        <div className="project-box front-end">
          <div className="project-img">
            <img src={apple} alt="Apple" />
          </div>
          <div className="project-info">
            <h3>iPhone Website</h3>
            <span>
              iPhone15 Advertising with 3D models and G-sap Animations
            </span>
          </div>
          <div className="project-buttons">
            <a
              href="https://pikolosan.github.io/IPhone15-Pro-Hosting/"
              className="btn"
            >
              View
            </a>
            <a
              href="https://github.com/Pikolosan/IPhone-15-Web-Clone-SourceCode"
              className="btn"
            >
              Code
            </a>
          </div>
        </div>
        <div className="project-box front-end">
          <div className="project-img">
            <img src={trainers} alt="Trainers" />
          </div>
          <div className="project-info">
            <h3>Nike Project</h3>
            <span>A new look to the Nike store.</span>
          </div>
          <div className="project-buttons">
            <a
              href="https://nike-landing-page-ab592u2mj-pikolosans-projects.vercel.app/"
              className="btn"
            >
              View
            </a>
            <a
              href="https://github.com/Pikolosan/Nike-Landing-Page"
              className="btn"
            >
              Code
            </a>
          </div>
        </div>
        <div className="project-box ml-ai">
          <div className="project-img">
            <img src={instagram} alt="Instagram" />
          </div>
          <div className="project-info">
            <h3>Instagram Project</h3>
            <span>A detailed description of the Instagram Project.</span>
          </div>
          <div className="project-buttons">
            <a href="#/" className="btn">
              Code
            </a>
          </div>
        </div>
        <div className="project-box css">
          <div className="project-img">
            <img src={cssCoding} alt="CSS Coding" />
          </div>
          <div className="project-info">
            <h3>CSS Project</h3>
            <span>A detailed description of the CSS Project.</span>
          </div>
          <div className="project-buttons">
            <a href="#/" className="btn">
              Code
            </a>
          </div>
        </div>
        <div className="project-box css">
          <div className="project-img">
            <img src={cssCoding} alt="CSS Coding" />
          </div>
          <div className="project-info">
            <h3>CSS Project</h3>
            <span>A detailed description of the CSS Project.</span>
          </div>
          <div className="project-buttons">
            <a href="#/" className="btn">
              Code
            </a>
          </div>
        </div>
        <div className="project-box css">
          <div className="project-img">
            <img src={cssCoding} alt="CSS Coding" />
          </div>
          <div className="project-info">
            <h3>CSS Project</h3>
            <span>A detailed description of the CSS Project.</span>
          </div>
          <div className="project-buttons">
            <a href="#/" className="btn">
              Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;

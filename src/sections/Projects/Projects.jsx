import styles from './ProjectsStyles.module.css';
import apple from '../../assets/Apple.png';
import trainers from '../../assets/trainers.png';
import CSS from '../../assets/css-coding.png';
import insta from '../../assets/instagram.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={apple}
          link="https://github.com/Pikolosan/IPhone-15-Web-Clone-SourceCode?tab=readme-ov-file"
          h3="IPhone Store"
          p="New iPhone 15 Pro"
        />  
        <ProjectCard
          src={trainers}
          link="https://github.com/Pikolosan/Nike-Landing-Page"
          h3="Shoes Store"
          p="Nike Landing Page"
        />
        <ProjectCard
          src={insta}
          link="https://github.com/Pikolosan/Instagram-Reach-Analysis"
          h3="ML Project"
          p="Instagram Reach Analysis"
        />
        <ProjectCard
          src={CSS}
          link="https://github.com/Pikolosan/Web-Dev-Proj---Cursor-Tracer-Animation"
          h3="CSS Animation"
          p="Cursor Tracer Animation"
        />
      </div>
    </section>
  );
}

export default Projects;

import './App.css';
import Hero from './sections/Hero/Hero';
// import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import ProjectSection from './sections/Projects/ProjectSection';
import AboutMe from './sections/AboutMe/AboutMe';

function App() {
  return (
    <>
      <Hero />
      <AboutMe/>
      <Skills />
      <ProjectSection/>
      <Contact />
      <Footer />
    </>
  )
}

export default App

import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import instaLight from '../../assets/Dark-instagram.svg';
import instaDark from '../../assets/instagram-svgrepo-com.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/PJC_RESUME.pdf';
import { useTheme } from './../../common/ThemeContext';

function Hero() {
    const {theme , toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const InstaIcon = theme === 'light' ? instaLight : instaDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

    return (
        <section id="hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img className={styles.hero} src={heroImg} alt="Avatar Pic" />
                <img className={styles.colorMode} src={themeIcon} alt="Color Mode" onClick={toggleTheme} />
            </div>
            <div className={styles.info}>
                <h1> Parth <br />  Chaudhary</h1>
                <h2> Web Developer</h2>
                <span>
                    <a href="https://www.instagram.com/___its.me.parth.___/" target="_blank">
                        <img class="icons" src={InstaIcon} alt="Insta icon" />    
                    </a>
                    <a href="https://github.com/Pikolosan" target="_blank">
                        <img class="icons" src={githubIcon} alt="Github icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/parth-chaudhary-aa82ab262/" target="_blank">
                        <img class="icons" src={linkedinIcon} alt="Linkedin icon" />
                    </a>
                </span>
                <a href={CV} target="_blank" rel="noopener noreferrer">
                    <button className="hover">Resume</button>
                </a>

            </div>
        </section>
    )
}

export default Hero
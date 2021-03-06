import resume from '../data/resume.pdf'
import { AboutMe } from '../components/AboutMe'
import { Projects } from '../components/Projects'
import { Contact } from '../components/Contact'
export function Main(props){

    return(
        <main>
            <div className="navbar-box">
                <span className="links">
                    <a href='#about-me'>About Me</a>
                    <a href='#projects'>Projects</a>
                    <a href='#contact'>Contact</a>
                    <a href='https://allenlea2007.medium.com/' target="_blank" rel="noopener noreferrer">Blog</a>
                    <a href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
                </span>
            </div>
            <AboutMe />
            <Projects />
            <Contact />
        </main>
    )
}
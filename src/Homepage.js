
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';
import MProjects from './components/MProjects';
import Skills from './components/Skills';
import Social from './components/Social';

export default function Homepage() {

  return (
        <>
          <Hero/>
          <Skills/>
          <Projects/>
          <MProjects/>
          <Contact/>
          <Footer/>
          <Social/>
        </>
  )
}


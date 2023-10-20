import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import TopBar from './Components/TopBar/TopBar'
import Intro from './Components/Intro/Intro'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'
import SoftSkills from './Components/SoftSkills/SoftSkills'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import { initFlowbite } from 'flowbite'
function App() {


  AOS.init()

  useEffect(() => {
    initFlowbite()
  }, [])

  return (
    <div data-aos="fade-down" className=' bg-[#1d192c]' data-aos-duration="3000" >
      <Header />
      <TopBar />
      <Intro />
      <Projects />
      <Skills />
      <SoftSkills />
      <Footer />
    </div>

  )
}

export default App

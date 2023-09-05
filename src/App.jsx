import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import TopBar from './Components/TopBar/TopBar'
import Intro from './Components/Intro/Intro'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'
import SoftSkills from './Components/SoftSkills/SoftSkills' 
import AOS from 'aos';
import 'aos/dist/aos.css';  
import { useEffect, useState } from 'react'
import { initFlowbite } from 'flowbite'
import  contextData from './context/context'
function App() {
  
 const [language,setLanguage]= useState('en')
 
 AOS.init()

 useEffect(() => {
  initFlowbite()
 }, [])
 
  return (
    <div data-aos="fade-down"   data-aos-duration="3000" >
      <contextData.Provider value={{language,setLanguage}}> 
     <Header/> 
     <TopBar/>
     <Intro/>
     <Projects/>
     <Skills/>
     <SoftSkills/>
     <Footer/>
     </contextData.Provider>
    </div>
  
  )
}

export default App

"use client"
import Header from '../Components/module/Header/Header'
import Footer from '../Components/module/Footer/Footer'
import TopBar from '../Components/module/TopBar/TopBar'
import Intro from '../Components/module/Intro/Intro'
import Projects from '../Components/module/Projects/Projects'
import Skills from '../Components/module/Skills/Skills'
import SoftSkills from '../Components/module/SoftSkills/SoftSkills'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import { initFlowbite } from 'flowbite'

export default function Home() {

  useEffect(() => {
    AOS.init()
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




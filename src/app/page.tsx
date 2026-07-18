import Header from "../components/module/header/header";
import Footer from "../components/module/footer/footer";
import TopBar from "../components/module/topbar/topbar";
import Intro from "../components/module/intro/intro";
import Projects from "../components/module/projects/projects";
import Skills from "../components/module/skills/skills";
import SoftSkills from "../components/module/soft-skills/soft-skills";
// @ts-ignore
import "aos/dist/aos.css";

export default function Home() {
  return (
    <div 
      data-aos="fade-down"
      className=" bg-[#1d192c]"
      data-aos-duration="3000"
    >
      <Header />
      <TopBar />
      <Intro />
      <Projects />
      <Skills />
      <SoftSkills />
      <Footer />
    </div>
  );
}

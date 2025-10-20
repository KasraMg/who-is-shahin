import Header from "../Components/module/header/header";
import Footer from "../Components/module/footer/footer";
import TopBar from "../Components/module/topbar/topbar";
import Intro from "../Components/module/intro/intro";
import Projects from "../Components/module/projects/projects";
import Skills from "../Components/module/skills/skills";
import SoftSkills from "../Components/module/soft-skills/soft-skills";
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

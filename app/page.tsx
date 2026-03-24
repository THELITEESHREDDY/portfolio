import Image from "next/image";
import {NavBar,Bord }from "./Layout/page";
import Hero from "./hero/page";
import About from "./about/page";
import Skills from "./skills/page";
import Projects from "./projects/page";
import Training from "./certificationsandTraning/page";
import Education from "./education/page";
import Contact from "./contact/page";


export default function Home() {
  return (
    <div className="w-screen">
      <Bord/> 
      <NavBar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Training/>
      <Education/>
      <Contact/>
    </div>
  );
}

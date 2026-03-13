'use client'
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
import About from "./components/About";
import Art from "./components/Art";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Page() {

  return (
    <div>
      <Navigation />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Contact />
    </div>
  );
}
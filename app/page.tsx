'use client'
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Page() {

  return (
    <div className="flex justify-center items-center">
      <Navigation />
      <Hero />
    </div>
  );
}
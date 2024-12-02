"use client"
import Image from "next/image";;
import HeroSection from "./app/components/HeroSection";
import Navbar from "./app/components/Navbar";
import AboutMe from "./components/AboutMe";
import ProjectSection from "./app/components/ProjectSection";
import EmailSection from "./app/components/EmailSection";
import FooterSec from "./app/components/FooterSec";
import ContactMe from "./components/ContactMe"
import ExperienceTimeline from "./app/components/ExperienceTimeline";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-main-background bg-cover bg-fixed scroll-smooth">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
       
        <HeroSection />

        <div id="about">
          <AboutMe />
        </div>
        <div id="experience">
          <ExperienceTimeline/>
        </div>
        <div id="projects">
          <ProjectSection />
        </div>
        <div id="contact">
          <EmailSection />
        </div>
        <FooterSec />
      </div>
    </main>
  );
}

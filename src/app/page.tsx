import { Hero } from "@/components/hero";
import { Summary } from "@/components/summary";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Education } from "@/components/education";
import { Certificates } from "@/components/certificates";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen flex flex-col">
      <Hero />
      <Summary />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certificates />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}

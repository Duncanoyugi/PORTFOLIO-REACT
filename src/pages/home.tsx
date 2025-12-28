import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "../components/navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutMe } from "@/components/About";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/Experience";
import { ProjectsSection } from "@/components/Projects";
import { ContactSection } from "@/components/ContactSection";
import { FooterSection } from "@/components/FooterSection";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col">

        {/* Background Effects */}
        <StarBackground />

        {/* Navbar */}
        <Navbar />

        {/* Main Content - grows to fill available space */}
        <main className="flex-1 pt-16">
            <HeroSection />
            <AboutMe />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection/>
            <ContactSection />
        </main>

        {/* Footer - sticks to bottom */}
        <FooterSection />

    </div>;
};

import HeroSection from "../sections/heroSection/HeroSection";
import ProjectSection from "../sections/projectSection/ProjectSection";
import ContactSection from "../sections/contactSection/ContactSection";
import FooterSection from "../sections/footerSection/FooterSection";

function Index() {
  return (
    <div className="flex flex-col gap-20">
      <HeroSection />
      <ProjectSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default Index;

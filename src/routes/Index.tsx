import HeroSection from "../sections/heroSection/HeroSection";
import ProjectSection from "../sections/projectSection/ProjectSection";

function Index() {
  return (
    <div className="flex flex-col gap-40 container mx-auto px-6 py-16 lg:py-24  xl:py-32">
      <HeroSection />
      <ProjectSection />
    </div>
  );
}

export default Index;

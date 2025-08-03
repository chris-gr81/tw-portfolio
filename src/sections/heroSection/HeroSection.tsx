import Button from "../../components/button/Button";
import Socials from "../../components/socials/Socials";

function HeroSection() {
  return (
    <section className="hero-section flex flex-col lg:flex-row lg:items-center lg:justify-center gap-20 container mx-auto px-6 py-16 lg:py-24  xl:py-32">
      <div className="flex flex-col gap-6">
        <img
          className="rounded-full w-24 h-24 lg:w-28 lg:h-28"
          src="pictures/portrait.jpg"
          alt="portrait picture of the developer"
        />
        <h2 className="text-lg xl:text-xl text-white ">
          Hi, ich bin{" "}
          <span className="text-xl xl:text-2xl font-bold">Christian</span>.
        </h2>
        <h1 className="text-white text-4xl xl:text-6xl">
          Ihr neuer{" "}
          <div>
            <span className="font-bold text-4xl xl:text-6xl bg-gradient-to-r from-emerald-700 to-slate-600 bg-clip-text text-transparent">
              Frontend-Developer
            </span>
            .
          </div>
        </h1>
        <p className="text-zinc-400 xl:text-xl">
          Mein Name ist Christian Grimm und ich bin Softwareentwickler mit
          Schwerpunkt auf den Bereich Frontend Web Development aus Mannheim. Ich
          verbinde technisches Verständnis mit langjähriger Erfahrung im
          Projektmanagement und entwickle moderne Webanwendungen, die durchdacht
          und nutzerfreundlich sind. Neue Technologien zu lernen reizt mich
          genauso wie die Herausforderung, komplexe Ideen in klare Lösungen zu
          verwandeln.
        </p>
        <Socials />
        <Button
          text="Projekte ansehen"
          href="#project-session"
          iconSrc="/icons/IconArrowDown.svg"
        />
      </div>
      <div>
        <img
          src="pictures/techs.png"
          alt="Tech-Stack-Logos"
          className="w-full max-w-[500px] lg:w-[500px]"
        />
      </div>
    </section>
  );
}

export default HeroSection;

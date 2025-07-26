import { ReactSVG } from "react-svg";
import Button from "../../components/button/Button";
import techImage from "../../assets/images/techs.png";
import portrait from "../../assets/images/portrait.jpg";

function HeroSection() {
  return (
    <section>
      <div className="flex flex-col gap-6">
        <img
          className="rounded-full w-1/4 mt-16"
          src={portrait}
          alt="portrait picture of the developer"
        />
        <h2 className="text-lg text-white ">
          Hi, ich bin <span className="text-xl font-bold">Christian</span>.
        </h2>
        <h1 className="text-white text-4xl ">
          Ihr neuer{" "}
          <div>
            <span className="font-bold text-4xl bg-gradient-to-r from-emerald-700 to-slate-600 bg-clip-text text-transparent">
              Frontend-Developer
            </span>
            .
          </div>
        </h1>
        <p className="text-zinc-400">
          Mein Name ist Christian Grimm und ich bin Softwareentwickler mit
          Schwerpunkt auf den Bereich Frontend Web Development aus Mannheim. Ich
          verbinde technisches Verständnis mit langjähriger Erfahrung im
          Projektmanagement und entwickle moderne Webanwendungen, die durchdacht
          und nutzerfreundlich sind. Neue Technologien zu lernen reizt mich
          genauso wie die Herausforderung, komplexe Ideen in klare Lösungen zu
          verwandeln.
        </p>
        <div className="flex flex-row gap-8">
          <a href="https://www.linkedin.com/in/christian-grimm-b5b854105/">
            <ReactSVG src="/icons/IconLinkedIn.svg" />
          </a>
          <a href="https://github.com/chris-gr81">
            <ReactSVG src="/icons/IconGitHub.svg" />
          </a>
          <a href="https://www.instagram.com/epicwinzer/">
            <ReactSVG src="/icons/IconInsta.svg" />
          </a>
        </div>
        <Button
          text="Projekte ansehen"
          href="#"
          iconSrc="/icons/IconArrowDown.svg"
        />
      </div>
      <div>
        <img src={techImage} alt="Tech-Stack-Logos" />
      </div>
    </section>
  );
}

export default HeroSection;

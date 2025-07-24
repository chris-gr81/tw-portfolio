import { ReactSVG } from "react-svg";
import Button from "../../components/button/Button";
import techImage from "../../assets/images/techs.png";
import portrait from "../../assets/images/portrait.jpg";

function HeroSection() {
  return (
    <section>
      <div>
        <img src={portrait} alt="portrait picture of the developer" />
        <h2>Hi, ich bin Christian.</h2>
        <h1>Ihr neuer Frontend-Developer.</h1>
        <p>
          Mein Name ist Christian Grimm und ich bin Softwareentwickler mit
          Schwerpunkt auf den Bereich Frontend Web Development aus Mannheim. Ich
          verbinde technisches Verständnis mit langjähriger Erfahrung im
          Projektmanagement und entwickle moderne Webanwendungen, die durchdacht
          und nutzerfreundlich sind. Neue Technologien zu lernen reizt mich
          genauso wie die Herausforderung, komplexe Ideen in klare Lösungen zu
          verwandeln.
        </p>
        <div>
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
        <Button />
      </div>
      <div>
        <img src={techImage} alt="Tech-Stack-Logos" />
      </div>
    </section>
  );
}

export default HeroSection;

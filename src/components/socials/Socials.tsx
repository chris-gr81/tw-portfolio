import { ReactSVG } from "react-svg";

function Socials() {
  return (
    <div className="flex flex-row gap-8 mb-2">
      <a
        href="https://www.linkedin.com/in/christian-grimm-b5b854105/"
        className="group"
        target="blank"
      >
        <ReactSVG src="/icons/IconLinkedIn.svg" />
      </a>
      <a href="https://github.com/chris-gr81" className="group" target="blank">
        <ReactSVG src="/icons/IconGitHub.svg" />
      </a>
    </div>
  );
}

export default Socials;

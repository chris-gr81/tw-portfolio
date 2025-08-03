import { ReactSVG } from "react-svg";
import iconGitHub from "../../assets/icons/IconGitHub.svg";
import iconLinkedIn from "../../assets/icons/IconLinkedIn.svg";

function Socials() {
  return (
    <div className="flex flex-row gap-8 mb-2">
      <a
        href="https://www.linkedin.com/in/christian-grimm-b5b854105/"
        className="group"
        target="blank"
      >
        <ReactSVG src={iconLinkedIn} />
      </a>
      <a href="https://github.com/chris-gr81" className="group" target="blank">
        <ReactSVG src={iconGitHub} />
      </a>
    </div>
  );
}

export default Socials;

import { ReactSVG } from "react-svg";
import Button from "../button/Button";
import arrowRight from "../../assets/icons/IconArrowRight.svg";
import arrowLink from "../../assets/icons/IconArrowLink.svg";

interface ProjectCardProps {
  picUrl: string;
  picAlt: string;
  name: string;
  text: string;
  gitDeploy: string;
  gitRepo: string;
  hashTags: string[];
}

function ProjectCard({
  picUrl,
  picAlt,
  name,
  text,
  gitDeploy,
  gitRepo,
  hashTags,
}: ProjectCardProps) {
  return (
    <div className="w-fit">
      <img src={picUrl} alt={picAlt} className="my-5 rounded-md" />
      <h2 className="text-white font-medium text-3xl mb-5">{name}</h2>
      <a
        className="flex flex-row gap-2 text-emerald-600 font-medium text-lg items-center mb-4"
        href={gitDeploy}
        target="blank"
      >
        <span>{gitDeploy.slice(8, -1)}</span>
        <ReactSVG src={arrowLink} />
      </a>
      <p className="text-zinc-400 mb-4">{text}</p>
      <div className="flex flex-wrap text-white mb-8 gap-2">
        {hashTags.map((tag) => (
          <span className="bg-zinc-700 px-2 py-1 rounded-xl text-xs" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <Button
        text="Code ansehen"
        href={gitRepo}
        iconSrc={arrowRight}
        tblank={true}
      />
    </div>
  );
}

export default ProjectCard;

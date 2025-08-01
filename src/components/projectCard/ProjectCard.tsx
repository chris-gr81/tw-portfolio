import { ReactSVG } from "react-svg";

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
      <img src={picUrl} alt={picAlt} className="my-5" />
      <h2 className="text-white font-bold text-3xl xl:text-5xl mb-5">{name}</h2>
      <a
        className="flex flex-row gap-2 text-emerald-600 font-medium text-lg items-center mb-4"
        href={gitDeploy}
        target="blank"
      >
        <span>{gitDeploy.slice(8, -1)}</span>
        <ReactSVG src="/icons/IconArrowLink.svg" />
      </a>
      <p className="text-zinc-400">{text}</p>
      <div className="text-white">
        {hashTags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <p className="text-white">{gitRepo}</p>
    </div>
  );
}

export default ProjectCard;

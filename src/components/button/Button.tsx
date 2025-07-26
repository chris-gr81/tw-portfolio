import { ReactSVG } from "react-svg";

interface ButtonProps {
  text: string;
  href?: string;
  oversize?: boolean;
  iconSrc?: string;
}

function Button({ text, href, iconSrc = "" }: ButtonProps) {
  const styling =
    "flex flex-row items-center justify-center gap-1 bg-emerald-600 text-white py-3 px-4 w-fit rounded-md text-sm font-medium";
  return href ? (
    <a href={href} className={styling}>
      {text} <ReactSVG src={iconSrc} />
    </a>
  ) : (
    <button className={styling}>
      {text} <ReactSVG src={iconSrc} />
    </button>
  );
}

export default Button;

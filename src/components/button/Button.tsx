import { ReactSVG } from "react-svg";

interface ButtonProps {
  text: string;
  href?: string;
  oversize?: boolean;
  iconSrc?: string;
  tblank?: boolean;
}

function Button({
  text,
  href,
  iconSrc,
  tblank = false,
  oversize,
}: ButtonProps) {
  const styling = `flex flex-row items-center justify-center gap-1 
    bg-emerald-600 hover:bg-emerald-400 text-white py-3 px-4 
    ${oversize ? "w-full" : "w-fit"} 
    rounded-md text-sm font-medium`;
  const targeting = tblank
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return href ? (
    <a href={href} className={styling} {...targeting}>
      {text} {iconSrc && <ReactSVG src={iconSrc} />}
    </a>
  ) : (
    <button className={styling}>
      {text} {iconSrc && <ReactSVG src={iconSrc} />}
    </button>
  );
}

export default Button;

import { Link } from "react-router-dom";

function FooterSection() {
  return (
    <section
      className="flex flex-row gap-6 bg-zinc-800 p-4 text-zinc-400 
    items-center justify-center text-sm"
    >
      <Link to="/Impressum">Impressum</Link>
      <span>&copy; Christian Grimm 2025</span>
    </section>
  );
}

export default FooterSection;

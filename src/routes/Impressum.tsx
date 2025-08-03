import { Link } from "react-router-dom";
import FooterSection from "../sections/footerSection/FooterSection";
import { ReactSVG } from "react-svg";

function Impressum() {
  return (
    <div className="flex flex-col gap-40 text-white p-4 h-screen">
      <Link to="/" className="flex flex-row gap-2 items-center">
        <ReactSVG src="/icons/IconArrowLeft.svg" />
        <span>Zurück</span>
      </Link>
      <div className="flex flex-col w-full justify-center items-center">
        <h2 className="text-4xl mb-8 font-bold">Impressum</h2>
        <h3 className="text-2xl font-bold">Angaben gemäß § 5 TMG</h3>
        <p>Christian Grimm</p>
        <p>Wiesbadener Straße 7</p>
        <p>68305 Mannheim</p>
        <h3 className="text-2xl mt-8 font-bold">Kontakt</h3>
        <p>Telefon: 0178/2879778</p>
        <p>E-Mail: cgr@etik.com</p>
      </div>
      <FooterSection />
    </div>
  );
}

export default Impressum;

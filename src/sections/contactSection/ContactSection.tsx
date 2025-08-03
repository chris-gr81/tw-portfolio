import { ReactSVG } from "react-svg";
import Button from "../../components/button/Button";
import Socials from "../../components/socials/Socials";
import iconEnvelope from "../../assets/icons/IconEnvelope.svg";
import iconLink from "../../assets/icons/IconArrowLink.svg";

function ContactSection() {
  return (
    <section
      id="contact-section"
      className="flex flex-col-reverse mt-20
            sm:max-w-screen-sm sm:mx-auto md:max-w-screen-md
            lg:grid lg:grid-cols-2 lg:gap-4 lg:items-center lg:container mx-auto"
    >
      <div className="container mx-auto px-6 py-16 lg:py-24  xl:py-32">
        <h2 className="text-white font-medium text-3xl xl:text-4xl mb-5 ">
          Noch Fragen?
        </h2>
        <p className="text-zinc-400 mb-6">
          Zögern Sie nicht mich zu kontaktieren. Nutzen Sie dafür gerne die
          unten aufgeführte E-Mail Adresse oder schauen Sie auf meinen
          LinkedIn-Profil vorbei!
        </p>
        <a
          href="mailto:cgr@etik.com"
          className="flex flex-row gap-2 items-center text-emerald-600 
          text-lg font-medium mb-6"
          target="blank"
        >
          <ReactSVG src={iconEnvelope} />
          cgr@etik.com
        </a>
        <Socials />
      </div>
      <div className="bg-zinc-800 pt-12 pb-8 px-6 text-center lg:rounded-lg">
        <h2 className="text-white font-medium text-3xl xl:text-4xl mb-5">
          Weitere Erfahrungen
        </h2>

        <p className="text-zinc-300 mb-8">
          Auf meinem GitHub-Profil finden Sie neben dem Sourcecode dieser
          Homepage alle Repositories, welche ich im Laufe der Zeit erstellt
          haben. Für eine adäquate Übersicht sind die wichtigsten Projekte in
          der Profilübersicht gepinned.
        </p>
        <Button
          text="GitHub ansehen"
          href="https://github.com/chris-gr81"
          iconSrc={iconLink}
          tblank={true}
          oversize={true}
        />
      </div>
    </section>
  );
}

export default ContactSection;

import ProjectCard from "../../components/projectCard/ProjectCard";

function ProjectSection() {
  return (
    <section
      className="project-session container mx-auto px-6"
      id="project-session"
    >
      <h2 className="text-white text-center font-medium text-3xl xl:text-5xl mb-5">
        Meine Projekte
      </h2>
      <p className="text-zinc-400 text-center mb-10">
        Nachstehend finden Sie ausgewählte Referenzprojekte von mir, sodass Sie
        sich ein Bild meiner Fähigkeiten und Erfahrungen machen können.
      </p>
      <div className="projects-wrapper grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20">
        <ProjectCard
          picUrl="pictures/wetterapp.png"
          picAlt="Preview Wetterapp"
          name="Wheater Application"
          gitDeploy="https://chris-gr81.github.io/wetterapp/"
          gitRepo="https://github.com/chris-gr81/wetterapp"
          text='
            Eine Wetter App die aktuelle Wetterdaten für Städte auf der ganzen Welt anzeigen kann.
            Die App wurde "mobile-first" entwickelt und für Mobilgeräte aller Art optimiert.
            Anwender haben die Möglichkeit, Orte in der Favoritenleiste zu speichern und diese
            Liste zu bearbeiten.Die Umsetzung erfolgte im Vanilla-Stack.'
          hashTags={["HTML", "JavaScript", "Vite", "SCSS", "BEM", "WheaterAPI"]}
        />
        <ProjectCard
          picUrl="pictures/userdirectory.png"
          picAlt="Preview User Directory"
          name="User Directory"
          gitDeploy="https://chris-gr81.github.io/user-directory/"
          gitRepo="https://github.com/chris-gr81/user-directory"
          text="
            User Directory ist ein Demoprojekt um meine Skills im TS/React-Stack unter
            Einbeziehung einer CRUD-Architketur zu belegen. Es können User angelegt, bearbeitet 
            und gelöscht werden. Einfache Validierungen wurden im Formular mit HTML-Bordmitteln
            umgesetzt."
          hashTags={[
            "HTML",
            "TypeScript",
            "React",
            "Vite",
            "SCSS",
            "RouterDOM",
          ]}
        />
        <ProjectCard
          picUrl="pictures/writtenquotes.png"
          picAlt="Preview Written Quotes"
          name="Written Quotes"
          gitDeploy="https://chris-gr81.github.io/written-quote/"
          gitRepo="https://github.com/chris-gr81/written-quote"
          text="
            Written Quotes wurde im TS/React-Stack umgesetzt. Unter Einbeziehung einer
            öffentlichen API werden Zitate dynamisch geladen und stilvoll dargestellt. Das 
            Design ist auf Mobilgeräte optimiert und nach SCSS Best Practices optimiert."
          hashTags={["HTML", "TypeScript", "React", "Vite", "SCSS", "AJAX"]}
        />
      </div>
    </section>
  );
}

export default ProjectSection;

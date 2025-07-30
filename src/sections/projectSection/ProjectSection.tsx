function ProjectSection() {
  return (
    <section className="project-session">
      <h2 className="text-white text-center font-bold text-3xl xl:text-5xl mb-5">
        Meine Projekte
      </h2>
      <p className="text-zinc-400 text-center xl:text-xl">
        Nachstehend finden Sie ausgewählte Referenzprojekte von mir, sodass Sie
        sich ein Bild meiner Fähigkeiten und Erfahrungen machen können.
      </p>
      <div className="projects-wrapper">
        <img src="pictures/wetterapp.png" alt="Preview Wetterapp" />
        <img src="pictures/userdirectory.png" alt="Preview User Directory" />
        <img src="pictures/writtenquotes.png" alt="Preview Written Quotes" />
      </div>
    </section>
  );
}

export default ProjectSection;

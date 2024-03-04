import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const card = (
    <article className="project-card">
      <img src={project.image} alt={project.fullName} />
      <h4>{project.fullName}</h4>
      <blockquote><p>{project.desc}</p></blockquote>
    </article>
  );

  return (
    project.href === "" ? (
      <div>{card}</div>
    ) : (
      <a href={project.href} target="_blank">{card}</a>
    )
  );
};

export default ProjectCard;

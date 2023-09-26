import { useContext } from 'react';
import { ProjectContext } from '../context/ProjectContext';
import { Link } from "react-router-dom";
import MobileCard from "../components/MobileCard.jsx";
import './styles/TopProjects.css'

export const TopProjects = () => {
  const projects = useContext(ProjectContext);
  const FEATURED_PROJECTS = projects.slice(0, 3);

  return (
    <section className="ProjectsContainer">
      <div className="generalContainer">
        <h3 className="ProjectsContainer-title">
          Proyectos que destacan por el diseño e interactividad
        </h3>
        <div className="featuredContainer">
          {FEATURED_PROJECTS.map((project) => {
            return (
              <article
                key={project.id}
                className="featuredContainer-elements"
              >
                <Link
                  className="project-container__link"
                  to={{ pathname: project.link }}
                  target="_black"
                  title="Visitar"
                >
                  {project.title}
                </Link>
                <MobileCard
                  imageMobile={project.imageMobile}
                  link={project.link}
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  )
}

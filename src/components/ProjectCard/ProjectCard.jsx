import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard({ projectData }) {
    // const { projectData } = props;
    return (
        <div className="project-card">
            <Link to={`/project/${projectData.id}`}>
                <img src={projectData.image} alt="the project" />
                <h3>{projectData.title}</h3>
                <h3>{projectData.category}</h3>
                <div className="description">{projectData.description}</div>
            </Link>
        </div>
    );
}
export default ProjectCard;


//linea 12 y 12 agrgada y descomentado el 6
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProjectPage.css";

function ProjectPage() {
  // State
  const [projectData, setProjectData] = useState({ pledges:[] });

  // Hooks
  const { id } = useParams();

  // Actions and Helpers
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectData(data);
      });
  }, [id]);

  // Loading State
  if (!projectData) {
    return <h3>Loading project....</h3>;
  }

  // Normal State
  return (
    <>
      <h2>{projectData.title}</h2>
      <img className="img-project"src={projectData.image} alt="the project"/>
      <div className="description">{projectData.description}</div>
      <h3>Created at: {projectData.date_created}</h3>
      <div>Goal: ${projectData.goal}</div>
      <h3>{`Status: ${projectData.is_open}`}</h3>
      <h3>Pledges:</h3>
      <ul>
        {projectData.pledges.map((pledgeData, key) => {
          return (
            <li>
              ${pledgeData.amount} from {pledgeData.supporter}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ProjectPage;
import React from 'react';
import { getProjects } from '../services/projects';
import ProjectCard from './ProjectCard';
import { Main } from './Projects.style';

export default function Projects() {
  const listOfProjects = getProjects().map((project, i) => {
    return <ProjectCard project={project} key={i} />
  })
  return (
    <Main>
      <div>
        <h1>Projects</h1>
      </div>
      <div className="project-list">
        {listOfProjects}
      </div>
    </Main>
  )
}
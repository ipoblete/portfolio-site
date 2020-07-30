import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  .coming-soon {
    width: 30rem;
    height: 30rem;
  }
`;

export default function ProjectCard({ project }) {
  return (
    <Div>
      <div>
        <img src={project.img} className="coming-soon" alt={project.title} />
      </div>
      <div className="card-content">
        <span>{project.title}</span>
        <p><a href={project.github}>Github</a> | <a href={project.site}>Site</a></p>
      </div>
    </Div>
  )
}
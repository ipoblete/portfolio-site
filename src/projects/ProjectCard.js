import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  .coming-soon {
    width: 100%;
    height: auto;
  }
`;

export default function ProjectCard({ project }) {
  return (
    <Div>
      <div>
        <img src={project.img} className="coming-soon" alt={project.title} />
      </div>
    </Div>
  )
}
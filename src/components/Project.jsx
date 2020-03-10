import React from 'react';
import Box from './Box';
import Title from './Title';
import Heading from './Heading';
import Article from './Article';
import Description from './Description';
import Responsibility from './Responsibility';

const Project = ({ title, image, description, isOdd, techStack, responsibilities }) => {
  const renderResponsibilities = responsibilities.map(responsibility => (
    <Responsibility>{responsibility}</Responsibility>
  ));

  const renderTechStack = techStack.map(tech => (
    <li className="project-tech">
      <img className="tech-image" src={`../../public/assets/logos/${tech}.svg`} />
    </li>
  ));
  return (
    <Article className="project" isOdd={isOdd}>
      <Title>{title}</Title>
      <Description isOdd={isOdd}>
        <img className="project-title-image" src={`../../public/assets/logos/${title}.png`} />
        <Heading>About</Heading>
        <p>{description}</p>
        <Heading>My Responsibilities</Heading>
        <ul>{renderResponsibilities}</ul>
        <Heading>Tech Stack</Heading>
        <ul className="project-tech-stack">{renderTechStack}</ul>
      </Description>
      <img className="project-image" src={image} />
    </Article>
  );
};

export default Project;

import React, { Component } from 'react';
import Section from 'Components/Section';
import Project from 'Components/Project';
import Story2 from 'Mockups/story2.png';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
        {
          title: 'Teva Pharmaceuticals',
          image: Story2,
          description:
            "Contracted to create a Web and Android application that communicated with Teva's proprietary medical devices over Bluetooth. The application would act as a hub where you could see data from the devices in real-time.",
          responsibilities: [
            'Independently architected and engineered a working prototype of proprietary software that is not yet available to the public.',
            'Used Cordova to port the web application to Android APK’s.',
            'Successfully used JavaScript to establish and maintain Bluetooth 4.0 (BLE) connections with various devices, often more than one at a time.',
            'Used HighCharts to plot data in real-time from BLE devices, with one device transmitting over 10,000 points of data per second.'
          ],
          techStack: ['JS', 'HTML', 'CSS', 'NodeJS']
        },
        {
          title: 'Story2',
          description:
            'Find, Shape, and Tell Powerful Stories to Achieve your personal, professional, or academic goals.',
          image: Story2,
          responsibilities: [
            'Architected, oversaw, and mostly-independently engineered StoryBuilder, a web-based text editor with the Moments Method® tools.',
            'Oversaw the growth and development of a Software Engineering intern and helped them become a full-time engineer at Story2.',
            'Responsible for all aspects of the web application from engineering, to devops, to QA, and more.'
          ],
          techStack: ['React', 'Redux', 'Styled-Components', 'NodeJS', 'PostgreSQL']
        },
        {
          title: 'Digital Prospectors',
          image: Story2,
          description: 'Ocean of things',
          responsibilities: [
            'Contracted to Draper Laboratories. Developed a Flask API to integrate 120 hour predictions of the ocean’s currents for DARPA’S Ocean of Things project.',
            'Visualized the output of the predictions using React and Kepler.GL.',
            'Displayed the paths of deployed buoys along the predicted ocean currents with React and Kepler.GL.'
          ],
          techStack: ['React', 'Redux', 'Styled-Components', 'KeplerGL', 'Python']
        }
      ]
    };
  }

  render() {
    const { projects } = this.state;

    return projects.map((project, index) => (
      <Section isOdd={index % 2}>
        <Project
          title={project.title}
          description={project.description}
          responsibilities={project.responsibilities}
          image={project.image || ''}
          isOdd={index % 2}
          techStack={project.techStack}
        />
      </Section>
    ));
  }
}

export default Projects;
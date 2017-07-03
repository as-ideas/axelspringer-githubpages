import React, { Component } from 'react';
import './Projects.scss';

import ProjectTile from '../../components/ProjectTile/ProjectTile';
import ProjectService from '../../services/ProjectService';

export default class Projects extends Component {

  renderProjectTiles() {
    let tileList = [];

    ProjectService.getProjects().forEach((project, index) => {
      tileList.push(
        <ProjectTile key={'projectTile' + index} projectData={project} />
      );
    });

    return tileList;
  }

  render() {
    return (
      <section className='projects__container' id='projects'>
        <h2 className='sectionHeading projects__heading'>Projects</h2>
        <div className='projects__tiles'>
          {this.renderProjectTiles()}
        </div>
      </section>
    );
  }
}
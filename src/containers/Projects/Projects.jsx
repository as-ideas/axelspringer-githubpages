import React, { Component } from 'react';
import './Projects.scss';

import ProjectTile from '../../components/ProjectTile/ProjectTile';

export default class Projects extends Component {
  render() {
    return (
      <section className='projects__container'>
        <h2 className='projects__heading'>Projects</h2>
        <div className='projects__tiles'>
          <ProjectTile />
        </div>
      </section>
    );
  }
}
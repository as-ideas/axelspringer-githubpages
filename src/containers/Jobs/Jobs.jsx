import React, { Component } from 'react';
import './Jobs.scss';

import Gallery from '../../components/Gallery/Gallery'

export default class Jobs extends Component {
  render() {
    return (
      <section className='jobs__container' id='jobs'>
        <div className='jobs__headingContainer'>
          <h2 className='sectionHeading jobs__heading'>Jobs</h2>
        </div>
        <Gallery />
        <div className='jobs__advertisement'>
          <p className='jobs__adHeading'>Lust bei uns mitzucoden?</p>
          <p className='jobs__adSubheading'>Dann gleich auf unserem Karriereportal nachschauen:</p>
          <p className='jobs__adSubheading'><strong>Wir haben viele offene IT-Stellen!</strong></p>
        </div>
        <a className='jobs__buttonJobs button' href="https://career.axelspringer.com/">Hier geht's zu unseren Jobs</a>
      </section>
    );
  }
}
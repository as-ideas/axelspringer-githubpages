import React, { Component } from 'react';
import './Jobs.scss';

import Gallery from '../../components/Gallery/Gallery'

export default class Jobs extends Component {
  render() {
    return (
      <section className='jobs__container' id='jobs'>
        <Gallery />
        <div className='jobs__text'>
          <p className='jobs__heading'>Lust bei uns mitzucoden?</p>
          <p className='jobs__subheading'>Dann gleich auf unserem Karriereportal nachschauen:</p>
          <p className='jobs__subheading'><strong>Wir haben viele offene IT-Stellen!</strong></p>
          <a className='jobs__buttonJobs button' href="https://career.axelspringer.com/">Hier geht's zu unseren Jobs</a>
        </div>
      </section>
    );
  }
}
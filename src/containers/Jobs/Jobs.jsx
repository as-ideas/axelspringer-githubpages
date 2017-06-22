import React, { Component } from 'react';
import './Jobs.scss';

import Gallery from '../../components/Gallery/Gallery'

export default class Jobs extends Component {
  render() {
    return (
      <section className='jobs__container'>
        <Gallery />
        <p className='jobs__heading'>Lust bei uns mitzucoden?</p>
        <p className='jobs__subheading'>Dann gleich auf unserem Karriereportal nachschauen:</p>
        <p className='jobs__subheading'>Wir haben viele offene IT-Stellen!</p>
        <a className='joobs__buttonJobs' href="#">Hier geht's zu unseren Jobs</a>
      </section>
    );
  }
}
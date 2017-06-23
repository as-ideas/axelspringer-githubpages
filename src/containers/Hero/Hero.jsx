import React, { Component } from 'react';
import './Hero.scss';

import Socials from '../../components/Socials/Socials'
//import '../../static/work.jpg';

export default class Hero extends Component {
  render() {
    return (
      <header className='hero__container'>
        <p className='hero__text'>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          <span className='hero__author'>Tommy</span>
        </p>
        <Socials />
      </header>
    );
  }
}
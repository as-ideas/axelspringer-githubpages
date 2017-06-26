import React, { Component } from 'react';
import './Hero.scss';

import Socials from '../../components/Socials/Socials'
import '../../static/arrow.png';

export default class Hero extends Component {
  scrollDown() {
    document.getElementById('projects').scrollIntoView();
  }

  render() {
    return (
      <header className='hero__container' id='home'>
        <p className='hero__text'>
          Lorem <strong>ipsum</strong> dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    At vero eos et accusam et justo duo dolores et ea rebum. <strong>Stet clita</strong> kasd gubergren, no sea takimata
                    sanctus est Lorem <strong>ipsum dolor sit</strong> amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    At vero eos et accusam et <strong>justo duo dolores</strong> et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                    Lorem ipsum dolor sit amet.
                    <span className='hero__author'>Tommy</span>
        </p>
        <Socials />
        <img className='hero__scrollDown' src='arrow.png' onClick={this.scrollDown} />
      </header>
    );
  }
}
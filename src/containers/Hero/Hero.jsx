import React, { Component } from 'react';
import './Hero.scss';

import Socials from '../../components/Socials/Socials'
import ProgressiveImage from '../../components/ProgressiveImage/ProgressiveImage';

export default (props) => {
  function scrollDown() {
    let navHeight = document.querySelector('nav').offsetHeight;
    let elemOffset = document.querySelector('#projects').getBoundingClientRect().top + window.pageYOffset

    window.scrollTo(0, elemOffset - navHeight);
  }

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
          <span className='hero__author'>Äxel</span>
      </p>
      <Socials />
      <ProgressiveImage className='hero__image' src='static/work.jpg' thumbnail='static/thumbnails/work.jpg' blurRadius='20' />
      <img className='hero__scrollDown' src='static/arrow.png' onClick={scrollDown} />
    </header>
  );
}
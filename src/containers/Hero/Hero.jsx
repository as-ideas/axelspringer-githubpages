import React, { Component } from 'react';
import './Hero.scss';

import Socials from '../../components/Socials/Socials'

export default class Hero extends Component {
  render() {
    return (
      <header className='hero__container'>
        <p className='hero__text'>
          Ditte hier isn Anlooftext aus Berlin
          <span className='hero__author'>Tommy</span>
        </p>
        <Socials />
      </header>
    );
  }
}
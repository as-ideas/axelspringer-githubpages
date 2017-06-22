import React, { Component } from 'react';
import './Footer.scss';

import Socials from '../../components/Socials/Socials'

export default class Footer extends Component {
  render() {
    return (
      <footer className='footer__container'>
        <Socials />
        <p>

        </p>
        <a href="">Impressum</a>
        <span>|</span>
        <a href="">Hinweise zum Datenschutz</a>
      </footer>
    );
  }
}
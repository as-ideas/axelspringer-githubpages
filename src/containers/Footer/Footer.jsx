import React, { Component } from 'react';
import './Footer.scss';

import Socials from '../../components/Socials/Socials'

export default class Footer extends Component {
  render() {
    return (
      <footer className='footer__container'>
        <div className='footer__content'>
          <Socials />
          <p className='footer__links'>
            <a href="">Impressum</a>
            <a href="">Hinweise zum Datenschutz</a>
          </p>
        </div>
      </footer>
    );
  }
}
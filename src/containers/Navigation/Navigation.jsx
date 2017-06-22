import React, { Component } from 'react';
import './Navigation.scss';
import 'static/as_logo.svg';

export default class Navigation extends Component {
  render() {
    return (
      <nav className='navigation__container'>
        <ul className='navigation__list'>
          <li className='navigation__item navigation__item--logo'>
            <a href='#'>
              <img className='navigation__logo' src='as_logo.svg' alt='Axel Springer SE Logo' />
            </a>
          </li>
          <li className='navigation__item'>
            <a href='#'>Our Projects</a>
          </li>
          <li className='navigation__item'>
            <a href='#'>Jobs</a>
          </li>
          <li className='navigation__item'>
            <a href='#'>How To</a>
          </li>
        </ul>
      </nav>
    );
  }
}
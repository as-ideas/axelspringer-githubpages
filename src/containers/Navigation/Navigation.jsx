import React, { Component } from 'react';
import './Navigation.scss';
import 'static/as_logo.svg';

export default class Navigation extends Component {

  constructor(props) {
    super(props);

    this.state = {
      active: ''
    }
  }

  isVisible(query) {
    let scrollOffset = window.pageYOffset;
    return window.pageYOffset >= this.getElemOffset(query);
  }

  getElemOffset(query) {
    return document.querySelector(query).getBoundingClientRect().top + window.pageYOffset;
  }

  handleScroll(e) {
    let active = '';

    if (this.isVisible('.projects__container')) active = 'projects__container';
    if (this.isVisible('.jobs__container')) active = 'jobs__container';

    if (active != this.state.active) {
      this.setState({
        active: active
      });
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  render() {
    console.log(this.state.active);

    return (
      <nav className='navigation__container'>
        <ul className='navigation__list'>
          <li className={'navigation__item navigation__item--logo'} >
            <a href='#home'>
              <img className='navigation__logo' src='as_logo.svg' alt='Axel Springer SE Logo' />
            </a>
          </li>
          <li className={'navigation__item' + (this.state.active == 'projects__container' ? ' navigation__item--active' : '')}>
            <a href='#projects'>Our Projects</a>
          </li>
          <li className={'navigation__item' + (this.state.active == 'jobs__container' ? ' navigation__item--active' : '')}>
            <a href='#jobs'>Jobs</a>
          </li>
          <li className='navigation__item'>
            <a href='#'>How To</a>
          </li>
        </ul>
      </nav>
    );
  }
}
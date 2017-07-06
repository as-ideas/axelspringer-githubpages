import React from 'react';
import './Socials.scss';

var FaFacebook = require('react-icons/lib/fa/facebook');
var FaTwitter = require('react-icons/lib/fa/twitter');
var FaGooglePlus = require('react-icons/lib/fa/google-plus');

export default (props) => {
    return (
        <p className='socials__container'>
            <a href='https://www.facebook.com/AxelSpringerKarriere/' className='socials__item'><FaFacebook /></a>
            <a href='' className='socials__item'><FaGooglePlus /></a>
            <a href='https://twitter.com/axelspringer' className='socials__item'><FaTwitter /></a>
        </p>
    );
}
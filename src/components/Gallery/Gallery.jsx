import React, { Component } from 'react';
import './Gallery.scss';

import GalleryService from '../../services/GalleryService';

export default class Gallery extends Component {
    constructor(props) {
        super(props)
    }

    rednerImages() {
        let images = [];

        GalleryService.getImages().forEach((image, index) => {
            images.push(
                <img className='gallery__image' key={'galleryImage' + index} src={image} />
            );
        });

        return images;
    }


    render() {
        return (
            <div className='gallery__container'>
                {this.rednerImages()}
            </div>
        );
    }
}
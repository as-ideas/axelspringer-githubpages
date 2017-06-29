import React, { Component } from 'react';
import './Gallery.scss';

import GalleryService from '../../services/GalleryService';
import ProgressiveImage from '../../components/ProgressiveImage/ProgressiveImage';

export default class Gallery extends Component {
    constructor(props) {
        super(props)
    }

    rednerImages() {
        let images = [];

        GalleryService.getImages().forEach((image, index) => {
            images.push(
                <ProgressiveImage keepRatio={true} className='gallery__image' key={'galleryImage' + index} src={image.imgUrl} />
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
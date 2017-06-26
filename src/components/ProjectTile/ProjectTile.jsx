import React, { Component } from 'react';
import GitHubStats from '../GitHubStats/GitHubStats';
import './ProjectTile.scss';

import '../../static/logo_asideas.png';
import '../../static/logo_bild.png';

var FaPlayCircle = require('react-icons/lib/fa/play-circle');

export default class ProjectTile extends Component {
    onClick() {
        window.open(this.props.projectData.videoUrl, '_blank');
    }

    render() {
        return (
            <div className='projectTile__container'>
                <h3 className='projectTile__heading'>
                    <span>{this.props.projectData.title}</span>
                    <img className='projectTile__logo' src={'../../logo_' + this.props.projectData.publisher + '.png'} />
                </h3>
                <p className='projectTile__description'>{this.props.projectData.description}</p>
                <button className='projectTile__videoButton' onClick={this.onClick.bind(this)}><FaPlayCircle /> Erklärvideo</button>
                <GitHubStats githubId={this.props.projectData.githubId} githubUrl={this.props.projectData.githubUrl} />
            </div>
        );
    }
}
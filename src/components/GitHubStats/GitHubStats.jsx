import React from 'react';
import './GitHubStats.scss';

var FaCodeFork = require('react-icons/lib/go/repo-forked');
var FaUsers = require('react-icons/lib/fa/user');
var FaStar = require('react-icons/lib/go/star');
var FaCode = require('react-icons/lib/go/code');

import TrackerService from '../../services/TrackingService'

export default (props) => {

    function openRepo() {
        console.log('Track: goToRepo');
        TrackerService.track('goToRepo / ' + props.stats.name);

        window.open(props.stats.html_url, '_blank');
    }

    return (
        <div className='gitHubStats__container' onClick={openRepo.bind(this)}>
            <div className='gitHubStats__stat'>
                <p className='gitHubStats__icon'><FaCode /></p>
                <p className='gitHubStats__description'>{props.stats.name}</p>
            </div>
            <div className='gitHubStats__stat'>
                <p className='gitHubStats__icon'><FaCodeFork /></p>
                <p className='gitHubStats__description'>{props.stats.forks_count}</p>
            </div>
            <div className='gitHubStats__stat'>
                <p className='gitHubStats__icon'><FaStar /></p>
                <p className='gitHubStats__description'>{props.stats.stargazers_count}</p>
            </div>
            <div className='gitHubStats__stat'>
                <p className='gitHubStats__icon'><FaUsers /></p>
                <p className='gitHubStats__description'>{props.stats.watchers_count}</p>
            </div>
        </div>
    );
}
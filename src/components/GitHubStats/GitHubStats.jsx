import React, { Component } from 'react';
import './GitHubStats.scss';

import GitHubService from '../../services/GitHubService';

var FaCodeFork = require('react-icons/lib/go/repo-forked');
var FaUsers = require('react-icons/lib/fa/user');
var FaStar = require('react-icons/lib/go/star');
var FaCode = require('react-icons/lib/go/code');

export default class GitHubStats extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stats: {}
        };
    }

    componentWillMount() {
        GitHubService.getStats(this.props.githubId).then((stats) => {
            let state = this.state;
            state.stats = stats;
            this.setState(state);
        });
    }

    openRepo() {
        window.open(this.props.githubUrl, '_blank');
    }

    render() {
        return (
            <div className='gitHubStats__container' onClick={this.openRepo.bind(this)}>
                <div className='gitHubStats__stat'>
                    <p className='gitHubStats__icon'><FaCode /></p>
                    <p className='gitHubStats__description'>{this.props.githubId}</p>
                </div>
                <div className='gitHubStats__stat'>
                    <p className='gitHubStats__icon'><FaCodeFork /></p>
                    <p className='gitHubStats__description'>{this.state.stats.forks}</p>
                </div>
                <div className='gitHubStats__stat'>
                    <p className='gitHubStats__icon'><FaStar /></p>
                    <p className='gitHubStats__description'>{this.state.stats.stars}</p>
                </div>
                <div className='gitHubStats__stat'>
                    <p className='gitHubStats__icon'><FaUsers /></p>
                    <p className='gitHubStats__description'>{this.state.stats.contributors}</p>
                </div>
            </div>
        );
    }
}
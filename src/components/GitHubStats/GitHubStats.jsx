import React, { Component } from 'react';
import './GitHubStats.scss';

var FaCodeFork = require('react-icons/lib/go/repo-forked');
var FaUsers = require('react-icons/lib/fa/user');
var FaStar = require('react-icons/lib/go/star');
var FaCode = require('react-icons/lib/go/code');

export default class GitHubStats extends Component {
    constructor(props) {
        super(props)
    }

    openRepo() {
        window.open(this.props.stats.html_url, '_blank');
    }

    render() {
        return (
            <div className='gitHubStats__container' onClick={this.openRepo.bind(this)}>
                <div className='gitHubStats__stat'>
                    <p className='gitHubStats__icon'><FaCode /></p>
                    <p className='gitHubStats__description'>{this.props.stats.name}</p>
                </div>
                <div className='gitHubStats__stat'>
                    <p className='gitHubStats__icon'><FaCodeFork /></p>
                    <p className='gitHubStats__description'>{this.props.stats.forks_count}</p>
                </div>
                <div className='gitHubStats__stat'>
                    <p className='gitHubStats__icon'><FaStar /></p>
                    <p className='gitHubStats__description'>{this.props.stats.stargazers_count}</p>
                </div>
                <div className='gitHubStats__stat'>
                    <p className='gitHubStats__icon'><FaUsers /></p>
                    <p className='gitHubStats__description'>{this.props.stats.watchers_count}</p>
                </div>
            </div>
        );
    }
}
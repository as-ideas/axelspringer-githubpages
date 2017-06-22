import React, { Component } from 'react';
import './ProjectTile.scss';

export default class ProjectTile extends Component {
    render() {
        return (
            <div className='projectTile__container'>
                <h3 className='projectTile__heading'>Project Titel</h3>
                <p className='projectTile__description'>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                <button className='projectTile__videoButton'>Name des erklärvideos</button>
                <div className='projectTile__github'>GitHub Stat's</div>
            </div>
        );
    }
}
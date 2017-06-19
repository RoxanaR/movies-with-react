import React, { Component } from 'react';
import './Components.css';

export default class Header extends Component {
    render() {
        return (
            <div className="container text-center">
                <h1 className="page-title Header-title">List of Movies</h1>
            </div>
        );
    }
}

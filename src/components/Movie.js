import React, { Component } from 'react';

export default class Movie extends Component {
    render() {
        return(
            <div className="col-md-6">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        {this.props.name}
                    </div>
                    <div className="panel-body">
                        Year: {this.props.year}
                    </div>
                </div>
            </div>
        );
    }
}

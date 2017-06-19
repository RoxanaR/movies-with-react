import React, { Component } from 'react';

export default class Search extends Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="well">
                            <p className="search-title">Looking for a specific movie?</p>
                            <input type="text" className="form-control" name="search" placeholder="Search.." onChange={this.props.onSearchChange}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

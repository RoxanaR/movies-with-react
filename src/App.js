import React, { Component } from 'react';
import Header from './components/Header';
import Movie from './components/Movie';
import Search from './components/Search';
import listOfMovies from './constants/mockData';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: listOfMovies
        };
    }

    onSearchChange(e) {
        this.setState({
            movies: this.filterByText(e.target.value, listOfMovies)
        });
    }

    filterByText(text, array) {
        return array.filter((elem) => elem.title.toLowerCase().indexOf(text.toLowerCase()) !== -1);
    }

    render() {
        return (
            <div>
                <Header/>
                <Search onSearchChange={this.onSearchChange.bind(this)}/>
                <div className="container">
                    <div className="row">
                    {
                        this.state.movies.map((movie, index) => <Movie name={movie.title} year={movie.releaseYear} key={index}/>)
                    }
                    </div>
                </div>

            </div>
        );
    }
}

export default App;

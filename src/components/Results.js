import React from 'react';

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='resultDiv'>
                {this.props.movie ?
                    <div>
                        <img src=''></img>
                        <h1>Title: {this.props.movie.Title}</h1>
                        <div>Rate: {this.props.movie.Rated}</div>
                        <div>Year: {this.props.movie.Year}</div>
                        <div>Vote count: {this.props.movie.imdbVotes}</div>
                        <div>Length: {this.props.movie.Runtime}</div>
                        <div>Country: {this.props.movie.Country}</div>
                        <div>Actors: {this.props.movie.Actors}</div>
                        <div>Director(s): {this.props.movie.Director}</div>
                        <div>Plot: {this.props.movie.Plot}</div>
                        <div>Website: {this.props.movie.Website}</div>
                    </div>
                    :
                    <h1>No movie to display</h1>
                }
            </div>
        );
    }
}

export default Results;
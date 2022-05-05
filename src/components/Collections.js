import React, { Component } from "react";
import "../css/collections.css";
import Movie from "./Movie";

class Collections extends Component {
  constructor() {
    super();
    this.state = {
      movie: [{}],
    };
  }

  addNote() {
    this.state.movie.push({
      id: Date.now(),
    });
    this.setState({
      movie: this.state.movie,
    });
  }

  deleteMovie(id) {
    let newMovieArr = this.state.movie;
    newMovieArr.map((movie, index) => {
      if (id === movie.id) {
        newMovieArr.splice(index, 1);
      }
    });
    this.setState({
      movie: newMovieArr,
    });
  }

  render() {
    return (
      <div>
        <div className="div-board">
          <div className="row">
            {this.state.movie.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  deleteHandler={this.deleteMovie.bind(this)}
                  //deleteHandler={this.deleteNote.bind(this)}
                />
              );
            })}
          </div>
        </div>
        <div>
          <button
            className="btn btn-success add-button"
            onClick={this.addMovie.bind(this)}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default Collections;

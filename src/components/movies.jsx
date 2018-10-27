import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService.js";
import Favorite from "./common/favorite";
import Pagination from "./common/pagination";
import paginate from "../utils/paginate";

class Movies extends Component {
  state = {
    movies: getMovies(),
    moviesPerPage: 4,
    currentPage: 1
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].isLiked = !movie.isLiked;
    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderMoviesOnTable = () => {
    const { movies: allMovies, currentPage, moviesPerPage } = this.state;
    const movies = paginate(allMovies, currentPage, moviesPerPage);

    return movies.map(movie => (
      <tr key={movie._id}>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td>
          <Favorite
            onLike={() => this.handleLike(movie)}
            isLiked={movie.isLiked}
          />
        </td>
        <td>
          <button
            onClick={() => this.handleDelete(movie)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  };

  render() {
    const { length: counter } = this.state.movies;
    const { currentPage, moviesPerPage } = this.state;

    if (counter === 0)
      return <h5 className="m-3"> There are no movies in the database. </h5>;

    return (
      <React.Fragment>
        <h5 className="m-3">Showing {counter} movie(s) in the database.</h5>
        <table className="table">
          <thead>
            <tr>
              <th className="m-5">Title</th>
              <th className="m-5">Genre</th>
              <th className="m-5">Stock</th>
              <th className="m-5">Rate</th>
              <th className="m-5" />
            </tr>
          </thead>
          <tbody>{this.renderMoviesOnTable()}</tbody>
        </table>
        <Pagination
          numOfMovies={counter}
          currentPage={currentPage}
          moviesPerPage={moviesPerPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Movies;

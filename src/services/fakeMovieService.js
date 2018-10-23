import * as genresAPI from "./fakeGenreService";

const movies = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Skyscrapper",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    isLiked: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Black Panther",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 4,
    dailyRentalRate: 2,
    isLiked: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Ocean's 8",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 6,
    dailyRentalRate: 3.5,
    isLiked: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471818",
    title: "Avengers: Infinity Wars",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 8,
    dailyRentalRate: 3,
    isLiked: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Mike and Dave need Wedding dates",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 4,
    dailyRentalRate: 1.5,
    isLiked: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471820",
    title: "Devil Tree rooted evil",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 3,
    dailyRentalRate: 1,
    isLiked: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "Deadpool 2",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 10,
    dailyRentalRate: 4,
    isLiked: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471822",
    title: "Johnny English 2",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    isLiked: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471823",
    title: "Race 3",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 2,
    isLiked: false
  }
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  const movie = movies.find(m => m._id === id);
  return movie;
}

export function saveMovie(movie) {
  let movieInDb = movies.find(m => m._id === movie._id) || {};
  movieInDb.title = movie.title;
  movieInDb.genre = movie.genresAPI.genres.find(g => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now().toString();
    movies.push(movieInDb);
  }

  return movieInDb;
}

export function deleteMovie(id) {
  let movieInDb = movies.find(m => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}

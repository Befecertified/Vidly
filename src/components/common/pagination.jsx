import React, { Component } from "react";
import PropTypes from "prop-types";

const Pagination = props => {
  const { numOfMovies, moviesPerPage, currentPage, onPageChange } = props;

  const totalPages = Math.ceil(numOfMovies / moviesPerPage);

  function range(x, y, z = 1) {
    let numbersInRange = [];
    //pre-es6 method for default values below
    // z === undefined ? z = 1 : z = z;
    if (x < y) {
      for (let i = x; i <= y; i += z) {
        numbersInRange.push(i);
      }
    } else {
      for (let i = x; i >= y; i += z) {
        numbersInRange.push(i);
      }
    }
    return numbersInRange;
  }

  const showPagination = () => {
    const pages = range(1, totalPages);

    return pages.map(page => (
      <li
        key={page}
        className={currentPage === page ? "page-item active" : "page-item"}
      >
        <a href="#" className="page-link" onClick={() => onPageChange(page)}>
          {page}
        </a>
      </li>
    ));
  };

  if (totalPages === 1) return null;
  return (
    <nav>
      <ul className="Pagination">{showPagination()}</ul>
    </nav>
  );
};

Pagination.propTypes = {
  numOfMovies: PropTypes.number.isRequired,
  moviesPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;

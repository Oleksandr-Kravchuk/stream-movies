import React from 'react';

import { Row } from 'react-bootstrap';
import MovieItem from './MovieItem';

const MoviesList = ({movies, isFavorite}) => {
  return (
    <Row xs={1} sm={2} md={3}>
      {movies.map((movie) => {
        return (
          <MovieItem key={movie.id} movie={movie} isFavorite={isFavorite}/>
        );
      })}
    </Row>
  );
};

export default MoviesList;
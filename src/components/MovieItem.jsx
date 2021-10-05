import React from 'react';


import {useDispatch } from 'react-redux';

import { Col, Card, Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import UserService from '../services/user.service';

import { deleteFavoriteMovie } from '../redux/reducers/reducer';

const MovieItem = ({ movie, isFavorite }) => {
  const dispatch = useDispatch()

  const addToFavorite = async () => {
    await UserService.addMovie(movie);
  };

  const deleteFromFavorite = () => {
    dispatch(deleteFavoriteMovie(movie.id));
  };

  return (
      <Col className="mb-4">
        <Card className="border-0">
          <Card.Img variant="top" src={ movie.image?.medium }/>
          <Card.Body>
            <Card.Title className="fs-3 fw-bold">{movie.name}</Card.Title>
            <Card.Text className="fst-italic">
              {movie.genres.length
                ? movie.genres.join(", ")
                : "Genre not defined"}
            </Card.Text>
            <Card.Text className="fw-bold">
              <i className="bi bi-star-fill text-warning me-2" />
              {movie.rating.average ? movie.rating.average : "Rating not defined"}
            </Card.Text>
            <Card.Text className="fst-normal">
              Language: {movie.language}
            </Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex flex-column">
            {isFavorite ?
              <Button className="btn-danger mb-2" onClick={deleteFromFavorite}>
                <i className="bi bi-trash me-2" />
                Remove from Favorite
              </Button> :
              <Button className="btn-warning mb-2" onClick={addToFavorite}>
                <i className="bi bi-suit-heart-fill me-2" />
                Add to Favorite
              </Button>
            }
            <Link className="btn btn-info" to={`/about/${movie.id}`}>
            <i className="bi bi-info-circle-fill me-2" />
              About Movie
            </Link>
          </Card.Footer>
        </Card>
      </Col>
  );
};

export default MovieItem;
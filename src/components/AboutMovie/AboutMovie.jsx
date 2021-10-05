import React from 'react';

import cls from './AboutMovie.module.scss'
import UserService from '../../services/user.service';
import { Button } from 'react-bootstrap';

const AboutMovie = ({movie}) => {
  const addToFavorite = async () => {
    await UserService.addMovie(movie);
  };

  return (
    <div className={cls.movie}>
      <img src={movie.image.original} alt={movie.name} />
      <div className={cls.body}>
        <h1>{movie.name}</h1>
        <div>
          <p>
            Genres: {movie.genres.length
              ? movie.genres.join(" | ")
              : "Genre not defined"}
          </p>
          <p>
            Show Type: {movie.type}
          </p>
          <p>
            <i className="bi bi-star-fill text-warning me-2" />
            {movie.rating.average ? movie.rating.average : "Rating not defined"}
          </p>
          <p>Language: {movie.language}</p>
        </div>
        <p>{movie.summary.replace(/(<([^>]+)>)/gi, "")}</p>
        <p><a href={movie.officialSite}>Official site</a></p>
        <Button className="btn-warning mb-2" onClick={addToFavorite}>
          <i className="bi bi-suit-heart-fill me-2" />
          Add to Favorite
        </Button>
      </div>
    </div>
  );
};

export default AboutMovie;
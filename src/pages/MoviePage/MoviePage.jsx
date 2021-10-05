import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById, getCastByMovieId } from '../../API/api';


import AboutMovie from '../../components/AboutMovie/AboutMovie';
import MovieCast from '../../components/MovieCast/MovieCast';
import LoadingSpinner from '../../components/LoadingSpinner';

import cls from './MoviePage.module.scss';

const MoviePage = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState({movie: null, cast: null});
  const [isLoadInfo, setIsLoadInfo] = useState(false);

  const fetchMovie = async () => {
    setIsLoadInfo(false);
    const movie = await getMovieById(id);
    const cast = await getCastByMovieId(id);
    setMovieInfo({movie: movie, cast: cast});
    setIsLoadInfo(true);
  };
  
  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <>
      { isLoadInfo ?
        <div className={cls.movie}>
          <AboutMovie movie={movieInfo.movie} />
          <MovieCast cast={movieInfo.cast} />
        </div> :
        <LoadingSpinner />}
    </>
  );
};

export default MoviePage;
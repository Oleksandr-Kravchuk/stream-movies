import React, { useEffect, useState} from 'react';
import MoviesList from '../../components/MoviesList';
import PaginationMovies from '../../components/Pagination';
import LoadingSpinner from '../../components/LoadingSpinner';

import { fetchFavoriteMovies } from '../../redux/reducers/reducer';

import {useDispatch, useSelector } from 'react-redux';

const Favorite = () => {

  const favoriteMovies = useSelector( state => state.favoriteMovies);
  const isLoading = useSelector( state => state.isLoading);
  const dispatch = useDispatch()
  const movPerPage = 12;
  const [page, setPage] = useState(1);
  const [viewMovies, setViewMovies] = useState([]);


  useEffect(() => {
    dispatch(fetchFavoriteMovies());
  }, []);

  useEffect(() => {
    setViewMovies([...favoriteMovies.slice((page - 1)*movPerPage, page*movPerPage)]);
  }, [favoriteMovies, page]);

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div>
      <div className="d-flex justify-content-end sticky-top">
        <PaginationMovies 
          changePage={changePage}
          totalPage={Math.ceil(favoriteMovies.length/movPerPage)}
          active={page}
        />
      </div>
      { isLoading ? 
        <LoadingSpinner /> :
        !favoriteMovies.length ? <h1 className="text-center text-white mt-3">Not Found</h1>:
        <MoviesList movies={viewMovies}  isFavorite={true} />
      }
    </div>
  );
};

export default Favorite;
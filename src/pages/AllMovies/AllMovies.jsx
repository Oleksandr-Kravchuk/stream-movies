import React, { useEffect, useState } from 'react';

import MoviesList from '../../components/MoviesList';
import PaginationMovies from '../../components/Pagination';
import LoadingSpinner from '../../components/LoadingSpinner';
import Filter from '../../components/Filter/Filter';

import { fetchAllMovies } from '../../redux/reducers/reducer';

import { useDispatch, useSelector } from 'react-redux';
import { useFilter } from '../../hooks/useFilter';
import { getGenresByMoviesList } from '../../utils/utils';

const AllMovies = () => {
  const allMovies = useSelector( state => state.allMovies);
  const isLoading = useSelector( state => state.isLoading);

  const dispatch = useDispatch()

  const movPerPage = 12;
  const [filter, setFilter] = useState({query: '', sort: ''});
  const [page, setPage] = useState(1);
  const [viewMovies, setViewMovies] = useState([]);

  const filteredMovies = useFilter(filter, allMovies);
  const genresList = getGenresByMoviesList(allMovies);

  useEffect(() => {
    dispatch(fetchAllMovies());
  }, []);

  useEffect(() => {
    setViewMovies([...filteredMovies.slice((page - 1)*movPerPage, page*movPerPage)]);
  }, [filteredMovies, page]);

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div>
      <div className="d-flex justify-content-between sticky-top mb-4">
        <Filter 
          filter={filter}
          setFilter={setFilter}
          options={genresList}
        />
        <PaginationMovies 
          changePage={changePage}
          totalPage={Math.ceil(filteredMovies.length/movPerPage)}
          active={page}
        />
      </div>
      { isLoading ? 
        <LoadingSpinner /> :
        !filteredMovies.length ? <h1 className="text-center text-white mt-3">Not Found</h1>:
        <MoviesList movies={viewMovies} isFavorite={false} />
      }
    </div>
  );
};

export default AllMovies;
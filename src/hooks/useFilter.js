import { useMemo } from "react";

export const useFilter = (filter, allMovies) => {
  const filteredMovies = useMemo(() => {
    return allMovies.filter( movie => {
  
      if (filter.sort && !filter.query) {
        return movie.genres.some( genre => genre.toLowerCase().includes(filter.sort.toLowerCase()));
      }
  
      if ( !filter.sort && !filter.query ) {
        return movie;
      }
  
      return movie.genres.some( genre => genre.toLowerCase().includes(filter.sort.toLowerCase())) && movie.name.toLowerCase().includes(filter.query.toLowerCase());
    });
  }, [filter, allMovies]);

  return filteredMovies;
};
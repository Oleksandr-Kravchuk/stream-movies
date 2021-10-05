export const getGenresByMoviesList = (movies) => {
  const genreHeap = movies.reduce((acc,item) => {
    acc.push(...item.genres);
    return acc;
  }, []);
  const uniqueGenres = new Set(genreHeap);
  const genresList = [...uniqueGenres].sort();

  return genresList;
};
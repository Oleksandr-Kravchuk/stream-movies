import axios from 'axios';

export const getAllMovies = async () => {
  const response = await axios.get('https://api.tvmaze.com/shows?page=1');
  return response.data;
};

export const getMovieById = async (id) => {
  const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
  return response.data;
};

export const getCastByMovieId = async (id) => {
  const response = await axios.get(`https://api.tvmaze.com/shows/${id}/cast`);
  return response.data;
};
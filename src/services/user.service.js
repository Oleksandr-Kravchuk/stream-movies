import axios from "axios";
import {authHeader} from "./auth-header";

const API_URL = "http://localhost:8080/api/users/";

// const getPublicContent = () => {
//   return axios.get(API_URL + "all");
// };

const getUserProfile = () => {
  return axios.get(API_URL + "me", { headers: authHeader() });
};

const updateUserProfile = (user) => {
  return axios.patch(API_URL + "me", user, {headers: authHeader()});
};

const getFriends = () => {
  return axios.get(API_URL + "findUsers", { headers: authHeader() });
};

const getUserFriends = () => {
  return axios.get(API_URL + "me/friends", { headers: authHeader() });
};

const addFriend = (friendId) => {
  return axios.patch(API_URL + "me/addFriend", { friendId }, { headers: authHeader() });
};

const removeFriend = (friendId) => {
  return axios.patch(API_URL + "me/removeFriend", { friendId }, { headers: authHeader() });
};

const getFavorite = () => {
  return axios.get(API_URL + "me/favorite", { headers: authHeader() });
};

const addMovie = (movie) => {
  return axios.patch(API_URL + "me/addMovie", { movie }, {headers: authHeader()});
};

const removeMovie = (movieId) => {
  return axios.patch(API_URL + "me/removeMovie", { movieId }, {headers: authHeader()});
};


// const getModeratorBoard = () => {
//   return axios.get(API_URL + "mod", { headers: authHeader() });
// };

// const getAdminBoard = () => {
//   return axios.get(API_URL + "admin", { headers: authHeader() });
// };

const UserService = {
  getUserProfile,
  updateUserProfile,
  addMovie,
  getFavorite,
  removeMovie,
  getFriends,
  getUserFriends,
  addFriend,
  removeFriend
};

export default UserService;
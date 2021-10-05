import { getAllMovies } from "../../API/api";
import AuthService from "../../services/auth.service";
import UserService from "../../services/user.service";

const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const REGISTER_FAIL = "REGISTER_FAIL";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAIL = "LOGIN_FAIL";
const LOGOUT = "LOGOUT";

const SET_MESSAGE = "SET_MESSAGE";
const CLEAR_MESSAGE = "CLEAR_MESSAGE";

const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_FAVORITE_MOVIES = "SET_FAVORITE_MOVIES";
const LOADING = "LOADING";
const SET_ALL_MOVIES = "SET_ALL_MOVIES";

const SET_ALL_USERS = "SET_ALL_USERS";

const SET_FRIENDS = "SET_FRIENDS";

const user = JSON.parse(localStorage.getItem("stream-movie-user"));

const initialState = {
  allMovies: [],
  isLoading: false,
  isLoggedIn: user ? true : false,
  user: user ? user : null,
  message: "",
  favoriteMovies: [],
  userProfile: {},
  userFriends: [],
  allUsers: []
};

const reducer = ( state = initialState, action ) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: action.payload
      };

    case SET_ALL_MOVIES:
      return {
        ...state,
        allMovies: action.payload
      };

    case SET_FAVORITE_MOVIES:
      return {
        ...state,
        favoriteMovies: action.payload
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload
      };

    case SET_FRIENDS:
      return {
        ...state,
        userFriends: action.payload
      };
    
    case SET_ALL_USERS:
      return {
        ...state,
        allUsers: action.payload
      };

    case SET_MESSAGE:
      return {
        ...state,
        message: action.payload
      };

    case CLEAR_MESSAGE:
      return {
        ...state,
        message: ""
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };

    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
      };

    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        userProfile: null,
      };

    default:
      return state;
  }
};


//message action

export const setMessage = (message) => ({
  type: SET_MESSAGE,
  payload: message,
});

export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});


//auth
export const register = (username, age, email, password) => (dispatch) => {
  return AuthService.register(username, age, email, password).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });
      dispatch(setMessage(response.data.message));

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });
      dispatch(setMessage(message));

      return Promise.reject();
    }
  );
};

export const login = (username, password) => (dispatch) => {
  return AuthService.login(username, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data.user },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LOGIN_FAIL,
      });
      dispatch(setMessage(message));

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  AuthService.logout();
  dispatch(clearMessage());
  dispatch({type: LOGOUT });
};

//actions
const isLoading = ( isLoading ) => ({type: LOADING, payload: isLoading});

const setAllMovies = ( allMovies ) => ({type: SET_ALL_MOVIES, payload: allMovies});

const setFavoriteMovies = ( favoriteMovies ) => ({type: SET_FAVORITE_MOVIES, payload: favoriteMovies});

const setUserProfile = ( userProfile ) => ({type: SET_USER_PROFILE, payload: userProfile});

const setAllUsers = ( users ) => ({type: SET_ALL_USERS, payload: users});

const setFriends = ( users ) => ({type: SET_FRIENDS, payload: users});

export const fetchAllMovies = () => async ( dispatch ) => {
  dispatch(isLoading(true));
  const movies = await getAllMovies();
  dispatch(setAllMovies(movies));
  dispatch(isLoading(false));
};

export const fetchUserProfile = () => async ( dispatch ) => {
  dispatch(isLoading(true));
  const response = await UserService.getUserProfile();
  dispatch(setUserProfile(response.data.user));
  dispatch(isLoading(false));
};

export const updateUserProfile = (user) => async ( dispatch ) => {
  dispatch(isLoading(true));
  const response = await UserService.updateUserProfile(user);
  dispatch(setUserProfile(response.data.user));
  dispatch(isLoading(false));
};

export const fetchFavoriteMovies = () => async ( dispatch ) => {
  dispatch(isLoading(true));
  const movies = await UserService.getFavorite();
  dispatch(setFavoriteMovies(movies.data));
  dispatch(isLoading(false));
};

export const deleteFavoriteMovie = (id) => async ( dispatch ) => {
  const movies = await UserService.removeMovie(id);
  dispatch(setFavoriteMovies(movies.data));
};

export const fetchAllUsers = () => async ( dispatch ) => {
  dispatch(isLoading(true));
  const response = await UserService.getFriends();
  dispatch(setAllUsers(response.data.findUsers));
  dispatch(isLoading(false));
};

export const fetchUserFriends = () => async ( dispatch ) => {
  dispatch(isLoading(true));
  const response = await UserService.getUserFriends();
  dispatch(setFriends(response.data.users));
  dispatch(isLoading(false));
};

export const deleteFriend = (id) => async ( dispatch ) => {
  const response = await UserService.removeFriend(id);
  dispatch(setFriends(response.data.users));
};

export default reducer;
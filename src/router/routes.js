import Favorite from "../pages/Favorite/Favorite";
import AllMovies from "../pages/AllMovies/AllMovies";
import Profile from "../pages/Profile/Profile";
import MoviePage from "../pages/MoviePage/MoviePage";
import Signup from "../components/Signup/Signup";
import Login from "../components/Login/Login";
import AllUsers from "../pages/AllUsers/AllUsers";
import Friends from "../pages/Friends/Friends";

export const privateRoutes = [
  { path: '/about/:id', component: MoviePage, exact: true },
  { path: '/favorite', component: Favorite, exact: true },
  { path: '/profile', component: Profile, exact: true },
  { path: '/movies', component: AllMovies, exact: true },
  { path: '/users', component: AllUsers, exact: true },
  { path: '/friends', component: Friends, exact: true },
];

export const publicRoutes = [
  { path: '/signup', component: Signup, exact: true },
  { path: '/login', component: Login, exact: true },
];
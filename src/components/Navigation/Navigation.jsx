import React from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { NavLink, useLocation, matchPath } from 'react-router-dom';

import { logout } from '../../redux/reducers/reducer';

import cls from './Navigation.module.scss';

const Navigation = () => {
  const dispatch = useDispatch()

  const logOut = () => {
    dispatch(logout());
  };
  const locatiton = useLocation();
  const match = matchPath(locatiton.pathname, {
    path: "/about/:id",
    exact: true,
  });

  return (
    <Container>
      <nav className={cls.nav}>
        <NavLink to="/movies" className={cls.navLogo}>Stream-Movies</NavLink>
        <ul className={cls.navBar}>
          <li className={ match ? cls.visible : cls.hidden}>
            <NavLink
              to={locatiton.pathname}
              className={cls.navLink}
              activeClassName={cls.active}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies"
              className={cls.navLink}
              activeClassName={cls.active}
            >
              All Movies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorite"
              className={cls.navLink}
              activeClassName={cls.active}
            >
              Favorite
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              className={cls.navLink}
              activeClassName={cls.active}
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/friends"
              className={cls.navLink}
              activeClassName={cls.active}
            >
              Friends
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={cls.navLink}
              activeClassName={cls.active}
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={cls.navLink}
              activeClassName={cls.active}
              onClick={logOut}
            >
              Log Out
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Navigation;
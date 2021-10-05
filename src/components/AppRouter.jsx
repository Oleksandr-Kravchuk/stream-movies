import React, { useEffect} from 'react';
import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { clearMessage } from '../redux/reducers/reducer';

import { privateRoutes,  publicRoutes} from '../router/routes';
import Header from './Header/Header';


const AppRouter = () => {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage());
    });
  }, [dispatch]);


  return (isLoggedIn ? 
    <>
      <Header />
      <Container className="mt-4">
        <Switch>
          {privateRoutes.map((route) => {
            return (
              <Route
                component={route.component}
                path={route.path}
                exact={route.exact}
                key={route.path}
              />
            );
          })}
          <Redirect to="/movies" />
        </Switch>
      </Container>
    </>
:
    <div className="pt-5" >
      <Switch>
        {publicRoutes.map((route) => {
          return (
            <Route
              component={route.component}
              path={route.path}
              exact={route.exact}
              key={route.path}
            />
          );
        })}
        <Redirect to="/signup" />
      </Switch>
    </div>
  );
};

export default AppRouter;
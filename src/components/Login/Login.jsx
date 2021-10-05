import React, { useEffect, useRef, useState }  from 'react';

import { useDispatch, useSelector } from "react-redux";

import { login } from '../../redux/reducers/reducer';

import { Form, Button, Card } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';

const Login = () => {
  const unmounted = useRef(false);
  const history = useHistory()
  const [successful, setSuccessful] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  const message = useSelector(state => state.message);
  const dispatch = useDispatch();


  useEffect(() => {
    return () => {unmounted.current = true}
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    setSuccessful(false);
    dispatch(login(emailRef.current.value, passwordRef.current.value))
      .then(() => {
        if (!unmounted.current) {
          setSuccessful(true);
          setTimeout(() => {
            history.push("/movies");
          }, 1000);
        }
      })
      .catch(() => {
        if (!unmounted.current) {
          setSuccessful(false);
        }
      });
  };

  return (
    <Card className="mx-auto" style={{maxWidth: "400px"}}>
      <Card.Body>
        <h2 className="text-center mb-4">Login</h2>
        <Form onSubmit={handleLogin}>
          {!successful && <>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button type="submit" className="w-100 mt-3">
              Login
            </Button>
          </>}
          {message && (
            <div className="form-group">
              <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                {message}
              </div>
            </div>
          )}
        </Form>
      </Card.Body>
      <Card.Footer className="w-100 text-center mt-2">
        Don't have an account yet? <NavLink to="/signup"> Register now</NavLink>
      </Card.Footer>
    </Card>
  );
};

export default Login;
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { register } from '../../redux/reducers/reducer';

import { Form, Button, Card } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';

const Signup = () => {
  const history = useHistory()
  const [successful, setSuccessful] = useState(false);
  const userNameRef = useRef();
  const ageRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const message = useSelector(state => state.message);
  const dispatch = useDispatch();
  

  const handleRegister = (event) => {
    event.preventDefault();
    setSuccessful(false);
    dispatch(register(userNameRef.current.value, ageRef.current.value, emailRef.current.value, passwordRef.current.value))
      .then(() => {
        setSuccessful(true);
        setTimeout(() => {
          history.push("/login");
        }, 1000);
      })
      .catch(() => {
        setSuccessful(false);
      })
  };

  return (
    <Card className="mx-auto" style={{maxWidth: "400px"}}>
      <Card.Body>
        <h2 className="text-center mb-4">Sign Up</h2>
        <Form onSubmit={handleRegister}>
          {!successful && <>
            <Form.Group id="userName">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="text" ref={userNameRef} required />
            </Form.Group>
            <Form.Group id="age">
              <Form.Label>Your Age</Form.Label>
              <Form.Control type="number" ref={ageRef} required />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button type="submit" className="w-100 mt-3">
              Sign Up
            </Button>
          </>
          }
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
        Already have an account? <NavLink to="/login">Log in</NavLink>
      </Card.Footer>
    </Card>
  );
};

export default Signup;
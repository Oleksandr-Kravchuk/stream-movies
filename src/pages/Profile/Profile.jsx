import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile, updateUserProfile } from '../../redux/reducers/reducer';

import { Form, Button, Card } from 'react-bootstrap';

const Profile = () => {
  const user = useSelector(state => state.user);
  const userProfile = useSelector(state => state.userProfile);
  const [username, setUsername] = useState(userProfile?.username || user.username);
  const [age, setAge] = useState(userProfile?.age || user.age);
  const [email, setEmail] = useState(userProfile?.email || user.email);

  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeAge = (e) => {
    const age = e.target.value;
    setAge(age);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, []);

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(updateUserProfile({username, age, email}));
  };
  return (
    <Card className="mx-auto" style={{maxWidth: "400px"}}>
      <Card.Body>
        <h2 className="text-center mb-4">Profile</h2>
        <Form onSubmit={handleUpdate}>
        <Form.Group id="userName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" value={username} onChange={onChangeUsername} required />
            </Form.Group>
            <Form.Group id="age">
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" value={age} onChange={onChangeAge} required />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={email} onChange={onChangeEmail} required />
            </Form.Group>
            <Button type="submit" className="w-100 mt-3">
              Update
            </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Profile;
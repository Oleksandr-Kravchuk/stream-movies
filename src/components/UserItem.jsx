import React from 'react';
import {useDispatch } from 'react-redux';
import { Col, Card, Button } from 'react-bootstrap';

import UserService from '../services/user.service';
import { deleteFriend } from '../redux/reducers/reducer';

const UserItem = ({ user, isFriend }) => {
  const dispatch = useDispatch()

  const addToFriend = async () => {
    await UserService.addFriend(user._id);
  };

  const deleteFromFriend = () => {
    dispatch(deleteFriend(user._id));
  };

  return (
    <Col className="mb-4">
      <Card className="border-0">
        <Card.Body>
          <Card.Title className="fs-3 fw-bold">{user.username}</Card.Title>
          <Card.Text className="fst-normal">
            Email: {user.email}
          </Card.Text>
          <Card.Text className="fst-normal">
            Age: {user.age}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex flex-column">
          {isFriend ?
            <Button className="btn-danger mb-2" onClick={deleteFromFriend}>
              Remove Friend
            </Button> :
            <Button className="btn-warning mb-2" onClick={addToFriend}>
              Add to Friend
            </Button>
          }
        </Card.Footer>
      </Card>
    </Col>
);
};

export default UserItem;
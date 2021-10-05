import React from 'react';
import { Row } from 'react-bootstrap';
import UserItem from './UserItem';

const UsersList = ({users, isFriend}) => {
  return (
    <Row xs={1} sm={2} md={3}>
      {users.map((user) => {
        return (
          <UserItem key={user._id} user={user} isFriend={isFriend}/>
        );
      })}
    </Row>
  );
};

export default UsersList;
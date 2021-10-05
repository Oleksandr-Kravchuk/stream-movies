import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fetchAllUsers } from '../../redux/reducers/reducer';

import UsersList from '../../components/UsersList';
import LoadingSpinner from '../../components/LoadingSpinner';

const AllUsers = () => {
  const allUsers = useSelector( state => state.allUsers);
  const isLoading = useSelector( state => state.isLoading);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  return (
    <div>
      { isLoading ? 
        <LoadingSpinner /> :
        !allUsers.length ? <h1 className="text-center text-white mt-3">Not Found</h1>:
        <UsersList  users={allUsers} isFriend={false}/>
      }
    </div>
  );
};

export default AllUsers;
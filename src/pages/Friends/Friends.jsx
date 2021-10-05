import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fetchUserFriends } from '../../redux/reducers/reducer';

import UsersList from '../../components/UsersList';
import LoadingSpinner from '../../components/LoadingSpinner';

const Friends = () => {
  const userFriends = useSelector( state => state.userFriends);
  const isLoading = useSelector( state => state.isLoading);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUserFriends());
  }, []);

  return (
    <div>
      { isLoading ? 
        <LoadingSpinner /> :
        !userFriends.length ? <h1 className="text-center text-white mt-3">Not Found</h1>:
        <UsersList  users={userFriends} isFriend={true}/>
      }
    </div>
  );
};

export default Friends;
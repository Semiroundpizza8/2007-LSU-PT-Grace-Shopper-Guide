import React from 'react';
import ReactDOM from 'react-dom';

const User = ({user}) => {
  return <>
    Welcome {user && user.username}
  </>
}

export default User

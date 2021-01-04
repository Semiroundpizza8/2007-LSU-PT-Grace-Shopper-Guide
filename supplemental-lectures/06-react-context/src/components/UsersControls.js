import React, { useContext } from "react";
import { UsersContext } from '../contexts/Users.js';

const UsersControls = () => {
  const { users, setSelectedUserId } = useContext(UsersContext);

  return (
    <>
      {users.map(user => (
        <div key={user.id} >
          <button onClick={() => setSelectedUserId(user.id)}>
            {user.name + ': '}
          </button>
        </div>
      ))}
    </>
  );
};
export default UsersControls;

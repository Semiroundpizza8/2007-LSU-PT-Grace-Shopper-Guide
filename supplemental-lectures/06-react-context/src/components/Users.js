import React from "react";
import {UserList, UsersControls} from "./";

const Users = ({ users, selectedUser, selectedUserId, setSelectedUserId, todos }) => {
  
  return (
    <div>
      <h1>Users</h1>
      <UserList/>
      <h2>Select a User</h2>
      <UsersControls/>
    </div>
  );
};
export default Users;

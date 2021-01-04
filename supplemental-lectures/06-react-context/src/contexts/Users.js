import React, { useState, useEffect } from 'react';

export const UsersContext = React.createContext({
  users: [],
  setUsers: () => {}, // placeholder.
  selectedUserId: 0,
  setSelectedUserId: () => {}, // placeholder.  Could put anything here, but initializing with function so stay consistent
  selectedUser: {}, // computed state
});

// regular React component. But we're adding the provider in the return statement
const UsersProvider = props => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState({});
  const selectedUser = users.find(user => user.id === selectedUserId); // computed state

  // mimick an API call
  useEffect(() => {
    // this is where a fetch would go to fetch users, then set the users
    setUsers(
      [
        { id: 1, name: "BillyBob", todos: [] },
        { id: 2, name: "Janey", todos: [] },
        { id: 3, name: "Sara", todos: [] },
        { id: 4, name: "Tommy", todos: [] },
      ]
    );
  }, []);

  // In this pattern, the context provider is placed directly inside this component. When we pass the other components as children, it "provides" the state/data necessary to the components
  return <UsersContext.Provider
    value={{
      users,
      setUsers, // using the `setUsers` function we created from the `useState` hook above.
      selectedUserId,
      setSelectedUserId,
      selectedUser,
    }}
    >
      {props.children}
    </UsersContext.Provider>
};

export default UsersProvider;

import React, {useContext} from "react";
import { UsersContext } from '../contexts/Users.js';
import { TodosContext } from '../contexts/Todos.js';

const UserList = () => {
  const { users, selectedUser, selectedUserId } = useContext(UsersContext);
  const { todos } = useContext(TodosContext);

  return (
    <>
      {selectedUser && <h2>Current User: {selectedUser.name}</h2>}
      {users.map(currentUser => {
        const todosCount = currentUser.todos.length;
        return <div key={currentUser.id}>
          {
            currentUser.id === selectedUserId 
              ? <b>{currentUser.name}</b>
              : <>{currentUser.name}</>
          }
          {
            todosCount
              ? <> has {todosCount} todo{todosCount > 1 ? 's' : ''} out of {todos.length} todos</>
              : ''
          }
        </div>
      })}
    </>
  );
};
export default UserList;

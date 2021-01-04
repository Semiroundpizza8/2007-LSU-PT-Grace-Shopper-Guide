import React, { useContext } from "react";
import { TodosContext } from '../contexts/Todos.js';
import { UsersContext } from '../contexts/Users.js';

const TodoList = () => {
  const { todos } = useContext(TodosContext);
  const { selectedUser, users, setUsers } = useContext(UsersContext);

  const assignToUser = todo => {
    const newUser = {...selectedUser};
    if(!newUser.todos.includes(todo.id)) newUser.todos.push(todo.id);
    setUsers(users.map(user => {
      if(user.id === newUser.id) return newUser;
      return user;
    }))
  }


  return (
    <>
      {todos.map(todo => (
        <div key={todo.id}>
          <b>{todo.name}:</b> do {todo.quantity} x
          {selectedUser && <button onClick={() => assignToUser(todo)}>Assign to {selectedUser.name}</button>}
        </div>
      ))}
    </>
  );
};
export default TodoList;

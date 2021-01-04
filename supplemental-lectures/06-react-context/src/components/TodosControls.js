import React, { useContext } from "react";
import { TodosContext } from '../contexts/Todos.js';

const TodosControls = () => {
  const { todos, setTodos } = useContext(TodosContext);

  const operateOnTodo = (todo, operation) => {
    const newTodo = {...todo, quantity: operation === 'add' ? todo.quantity + 1 : todo.quantity - 1};
    setTodos(todos.map(todo => {
      if(todo.id === newTodo.id) return newTodo;
      return todo;
    }))
  };

  return (
    <>
      {todos.map(todo => (
        <div key={todo.id}>
          {todo.name + ': '}
          <button onClick={() => operateOnTodo(todo, 'subtract')}>-</button>
          <button onClick={() => operateOnTodo(todo, 'add')}>+</button>
        </div>
      ))}
    </>
  );
};
export default TodosControls;

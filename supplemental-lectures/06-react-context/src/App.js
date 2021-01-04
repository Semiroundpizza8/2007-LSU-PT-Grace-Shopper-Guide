import React, { useState, useEffect } from "react";
import "./style.css";
import {
  Todos,
  Users,
} from "./components";
import TodosProvider from './contexts/Todos.js';
import UsersProvider, { UsersContext } from './contexts/Users.js';

export default function App() {
  const [todos, setTodos] = useState([]);

  // mimick an API call
  useEffect(() => {
    // this is where a fetch would go to fetch todos, then set the todos
    setTodos(
      [
        { id: 1, name: "walk dog", quantity: 5 },
        { id: 2, name: "go shopping", quantity: 1 },
        { id: 3, name: "mow lawn", quantity: 3 },
        { id: 4, name: "call Mom", quantity: 1 },
        { id: 5, name: "buy computer", quantity: 2 }
      ]
    );
    
  }, []);

  return (
    <div className="app-container">
      <TodosProvider
        value={{
          todos,
          setTodos
        }}
      >
        <UsersProvider>
          <Users/>
          <Todos/>
        </UsersProvider>
      </TodosProvider>
    </div>
  );
}

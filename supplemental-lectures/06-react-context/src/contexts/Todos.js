import React from "react";

// the context is like a new piece of state.  This is what will be updated via our provider, and what will be accessed via the useContext hooks in our components
export const TodosContext = React.createContext({
  todos: [],
  setTodos: () => {} // placeholder.  We could put anything here, but initializing as a function so we stay consistent.
});

const TodosProvider = TodosContext.Provider;

export default TodosProvider;
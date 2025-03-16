import React, { useReducer, createContext } from "react";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import "./index.css";
export const TodosContext=createContext()
function reducer(todos, action) {
  if (action.type === "Add-To-Do") {
    return [...todos, action.payload.newTodo];
  }
  if (action.type === "Toggle-To-Do") {
    return todos.map(todo =>
      todo.id === action.payload.id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
  }
  if (action.type === "Delete-To-Do") {
    return todos.filter(todo => todo.id !== action.payload.id);
  }
  return todos;
}

const initialValue = [
  { id: 1, text: "Learn React", isCompleted: false },
  { id: 2, text: "Learn Redux", isCompleted: false },
  { id: 3, text: "Learn React Router", isCompleted: false },
];

function App() {
  const [todos, dispatch] = useReducer(reducer, initialValue);

  return (
    <TodosContext.Provider value={{
      dispatch:dispatch,
      todos:todos
    }}>

     <div className="container">
     <h1 className="main-title">Todo List</h1>
      <TodoForm />
      <Todos />
     </div>
     </TodosContext.Provider>
  );
}

export default App;

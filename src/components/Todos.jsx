import React, { useContext } from "react";
import Todo from "./Todo";
import {TodosContext} from "../App";

function Todos() {
  const { todos}=useContext(TodosContext)
  return (
    <div className="todos-container">
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
}

export default Todos;

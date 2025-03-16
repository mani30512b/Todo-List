import React, { useContext } from "react";
import { TodosContext } from "../App";
function Todo({ todo }) {
  const {dispatch}=useContext(TodosContext)
  return (
    <div className="todo">
      <div className="todo-content">
        <span
          style={{
            textDecoration: todo.isCompleted ? "line-through" : "none",
            color: todo.isCompleted ? "#888" : "#242424",
          }}
        >
          {todo.text}
        </span>
        <div className="todo-actions">
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => dispatch({ type: "Toggle-To-Do", payload: { id: todo.id } })}
            className="todo-checkbox"
          />
          <button
            onClick={() => dispatch({ type: "Delete-To-Do", payload: { id: todo.id } })}
            className="todo-remove-btn"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo;

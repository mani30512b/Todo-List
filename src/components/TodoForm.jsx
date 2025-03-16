import React, { useState ,useContext} from "react";
import {TodosContext} from '../App'
function TodoForm() {
  const [title, setTitle] = useState("");
  const {dispatch}=useContext(TodosContext)
  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return;

    const newTodo = {
      id: Date.now(), // Fix: Assign unique ID
      text: title, // Fix: Use `text` instead of `title`
      isCompleted: false,
    };

    dispatch({ type: "Add-To-Do", payload: { newTodo } });
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit} className="todoForm">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="todoForm__input"
        placeholder="Add a new task..."
      />
      <button type="submit" className="todoForm__btn">
        Add
      </button>
    </form>
  );
}

export default TodoForm;

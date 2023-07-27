import React, { useState } from "react";

export default function TodoForm(props) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(value);
    setValue("");
  };

  return (
    <>
      <div className="todo-elements">
        <form onSubmit={handleSubmit} className="todo-input">
          <input
            className="input-field"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            placeholder="Add a todo..."
          />
          <button type="submit" className="add-btn">
            Add
          </button>
        </form>
      </div>
    </>
  );
}

import { useState } from "react";

function Todo() {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
  };

  return (
    <>
      <div className="todo-wrapper">
        <form onSubmit={handleSubmit} className="todos">
          <label htmlFor="text">
            <h1>Add tasks here: </h1>
          </label>
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
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

export default Todo;

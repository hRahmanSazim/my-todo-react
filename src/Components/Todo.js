import React from "react";

export default function ToDo(props) {
  return (
    <div className={props.todo.completed ? "todo-row completed" : "todo-row"}>
      <div>{props.todo.task}</div>
      <button
        onClick={() => props.removeTodo(props.todo.id)}
        className="delete-btn"
      >
        Delete
      </button>
      <button
        className="done-btn"
        onClick={() => {
          props.completeTodo(props.todo.id);
        }}
      >
        Completed
      </button>
    </div>
  );
}

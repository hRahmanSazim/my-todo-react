import React from "react";

export default function ToDo(props) {
  return (
    <div className="todo-row">
      <div>{props.todo.task}</div>
      {/* <button onClick={props.removeTodo(props.todo.id)} className="delete-btn">
        Delete
      </button> */}
    </div>
  );
}

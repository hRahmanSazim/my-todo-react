import React from "react";
import { Button, MantineProvider } from "@mantine/core";

export default function ToDo(props) {
  return (
    <MantineProvider>
      <div className={props.todo.completed ? "todo-row completed" : "todo-row"}>
        <div>{props.todo.task}</div>
        <Button
          className="done-btn"
          color="teal"
          onClick={() => {
            props.completeTodo(props.todo.id);
          }}
          radius="xl"
          size="xl"
        >
          Done
        </Button>
        <Button
          className="delete-btn"
          onClick={() => props.removeTodo(props.todo.id)}
          color="red"
          radius="xl"
          size="xl"
        >
          Delete
        </Button>
      </div>
    </MantineProvider>
  );
}

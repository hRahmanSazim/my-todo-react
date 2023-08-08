import React from "react";
import { Button, Box } from "@mantine/core";

export default function ToDo(props) {
  return (
    <Box className={props.todo.completed ? "todo-row completed" : "todo-row"}>
      <Box>{props.todo.task}</Box>
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
    </Box>
  );
}

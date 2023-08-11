import { Box, Flex } from "@mantine/core";
import Todowrapper from "./Components/Todowrapper";
import Todo from "./Components/Todo";
import { v4 as uuid } from "uuid";
import { useState } from "react";

export default function App() {
  const id = uuid().slice(0, 6);
  const [todos, setTodos] = useState([]);

  const addTodo = (value) => {
    let todo = {
      task: value,
      id: id,
      completed: false,
    };
    let newtodos = [todo, ...todos];
    setTodos(newtodos);
  };
  const completedTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  const editTodo = (id) => {
    const newtodo = prompt("Enter new todo....");
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, task: newtodo } : todo))
    );
  };

  return (
    <Box>
      <Flex direction="column" gap="xl" color="yellow">
        <Todowrapper addTodo={addTodo} />
        {todos.map((todo) => {
          return (
            <Todo
              todo={todo}
              key={todo.id}
              removeTodo={removeTodo}
              editTodo={editTodo}
              completedTodo={completedTodo}
            />
          );
        })}
      </Flex>
    </Box>
  );
}

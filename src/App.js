import TodoForm from "./Components/TodoForm";
import "./App.css";
import { useState } from "react";
import ToDo from "./Components/ToDo";
import { Button, MantineProvider, Text } from "@mantine/core";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1;
    }
    let todo = {
      task: text,
      id: id,
      completed: false,
    };
    let newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(newTodos);
  };

  const removeTodo = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <>
        <Text>Welcome to mantine</Text>
        <h1>
          <u>MY TODO</u>
        </h1>
        <h3> Add tasks below:</h3>

        <TodoForm addTodo={addTodo} />
        {todos.map((todo) => {
          return (
            <ToDo
              completeTodo={completeTodo}
              removeTodo={removeTodo}
              todo={todo}
              key={todo.id}
            />
          );
        })}
      </>
    </MantineProvider>
  );
}

export default App;

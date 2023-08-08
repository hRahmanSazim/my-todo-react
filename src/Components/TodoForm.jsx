import React, { useState } from "react";
import { Box, Input, Button, Text } from "@mantine/core";

export default function TodoForm(props) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(value);
    setValue("");
  };

  return (
    <>
      <Box>
        <form onSubmit={handleSubmit}>
          <Input
            className="input-field"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            placeholder="Add a todo..."
          />
          <Button type="submit">Add</Button>
        </form>
      </Box>
    </>
  );
}

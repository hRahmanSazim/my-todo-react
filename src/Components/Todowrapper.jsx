import { Container, Group, TextInput, Text, Space } from "@mantine/core";

import { useState } from "react";

const Todowrapper = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <Container size={550} my={40}>
      <Group position="center">
        <Text color="grape" fz={28} fw="bold">
          MY TODO APP
        </Text>
      </Group>
      <form onSubmit={handleSubmit}>
        <TextInput
          placeholder="Start writing tasks......"
          label="Add Todo"
          size="lg"
          value={value}
          radius="md"
          withAsterisk
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
      <Space h="xl" />
    </Container>
  );
};

export default Todowrapper;

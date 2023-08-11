import { Text, Flex, Button, Container, Space, Group } from "@mantine/core";

const Todo = ({ todo, removeTodo, editTodo, completedTodo }) => {
  return (
    <Flex direction="row">
      <Container>
        <Flex wrap="wrap">
          <Text>{todo.task}</Text>
        </Flex>
      </Container>
      <Space h="lg"></Space>

      <Container>
        <Group position="center" spacing="xl">
          <Button onClick={() => editTodo(todo.id)} color="violet">
            Edit
          </Button>
          <Button onClick={() => completedTodo(todo.id)} color="green">
            Complete
          </Button>

          <Button onClick={() => removeTodo(todo.id)} color="red">
            Delete
          </Button>
        </Group>
      </Container>
    </Flex>
  );
};

export default Todo;

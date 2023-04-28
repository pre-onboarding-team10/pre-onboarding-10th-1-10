import { Center, Text, VStack } from '@chakra-ui/react';
import { TodoAddForm } from '../components/TodoAddForm';
import { TodoList } from '../components/TodoList';
import { useTodos } from '../hooks/useTodos';

export const Todo = () => {
  const { todos, createTodo, updateTodo, deleteTodo } = useTodos();

  return (
    <Center w="100%" p="20px" flexDir="column">
      <Text fontSize="30" fontWeight="700" mb="20px">
        Todo!
      </Text>
      <VStack spacing="30px">
        <TodoAddForm createTodo={createTodo} />
        <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      </VStack>
    </Center>
  );
};

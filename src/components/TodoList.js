import { UnorderedList } from '@chakra-ui/react';
import { TodoItem } from '../components/TodoItem';

export const TodoList = ({ todos, updateTodo, deleteTodo }) => {
  return (
    <UnorderedList w="500px" spacing="10px">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
      ))}
    </UnorderedList>
  );
};

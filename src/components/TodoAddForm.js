import { Button, HStack, Input } from '@chakra-ui/react';
import { useState } from 'react';

export const TodoAddForm = ({ createTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    if (newTodo.length > 0) {
      await createTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
      <HStack w="full">
        <Input
          data-testid="new-todo-input"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
        />
        <Button type="submit" data-testid="new-todo-add-button">
          추가
        </Button>
      </HStack>
    </form>
  );
};

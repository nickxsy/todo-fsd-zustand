import { useCallback, useState } from 'react';

import { Checkbox, Stack, Text } from '@/shared/ui';

import {
  type TodoCompleted,
  type TodoId,
  type TodoTitle,
  useTodoStore
} from '@/entities/Todo';

type CompletedTodoCheckboxProps = {
  className?: string;
  id: TodoId;
  title: TodoTitle;
  completed?: TodoCompleted;
};

export const CompletedTodoCheckbox = ({
  id,
  title,
  completed
}: CompletedTodoCheckboxProps) => {
  const updateTodo = useTodoStore(state => state.updateTodo);

  const [checked, setChecked] = useState<TodoCompleted | undefined>(completed);

  const handleCheck = useCallback(() => {
    setChecked(prev => {
      const newChecked = Boolean(!prev) as TodoCompleted;

      updateTodo(id, title, newChecked);

      return newChecked;
    });
  }, [id, title, updateTodo]);

  return (
    <Stack $dir="row">
      <Checkbox checked={checked} onChange={handleCheck} id={id} />
      <Text as="label" $variant="small" htmlFor={id}>
        {title}
      </Text>
    </Stack>
  );
};

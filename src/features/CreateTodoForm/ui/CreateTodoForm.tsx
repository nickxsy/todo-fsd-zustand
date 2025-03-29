import { memo, useRef } from 'react';

import { Button, Input, Stack } from '@/shared/ui';

import { TodoTitle, useTodoStore } from '@/entities/Todo';

export const CreateTodoForm = memo(() => {
  const createTodo = useTodoStore(state => state.createTodo);

  const ref = useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!ref.current?.value.trim()) return;

    createTodo(ref.current?.value as TodoTitle);

    ref.current.value = '';
  };

  return (
    <form onSubmit={onSubmit}>
      <Stack $gap="small" $dir="row">
        <Input required placeholder="Название задачи" ref={ref} />
        <Button $variant="primary" type="submit">
          Добавить
        </Button>
      </Stack>
    </form>
  );
});

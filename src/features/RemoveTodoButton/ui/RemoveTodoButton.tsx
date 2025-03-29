import { memo, useCallback } from 'react';

import { Button } from '@/shared/ui';

import { TodoId, useTodoStore } from '@/entities/Todo';

type RemoveTodoButtonProps = {
  id: TodoId;
};

export const RemoveTodoButton = memo(({ id }: RemoveTodoButtonProps) => {
  const removeTodo = useTodoStore(state => state.removeTodo);

  const handleRemove = useCallback(() => {
    removeTodo(id);
  }, [id, removeTodo]);

  return (
    <Button $variant="secondary" onClick={handleRemove}>
      Удалить
    </Button>
  );
});

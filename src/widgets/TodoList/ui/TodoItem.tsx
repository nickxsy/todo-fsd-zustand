import { memo } from 'react';
import { keyframes, styled } from 'styled-components';

import { Text } from '@/shared/ui';

import { Todo } from '@/entities/Todo';

import { CompletedTodoCheckbox } from '@/features/CompletedTodoCheckbox';
import { RemoveTodoButton } from '@/features/RemoveTodoButton';

type TodoItemProps = {
  data: Todo;
  index?: number;
};

const TodoIsDone = keyframes`
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const TodoItemStyled = styled.li`
  display: flex;
  padding: 12px;
  align-items: center;
  gap: 12px;
  position: relative;
  transform: translateY(20px);
  opacity: 0;
  animation: ${TodoIsDone} 300ms ease-in-out forwards;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    border-radius: 8px;
    background: #e8e8e8;
  }
`;

const TodoItemContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const TodoItemNum = styled.div`
  position: absolute;
  left: -30px;
  color: rgba(0, 0, 0, 0.5);
  pointer-events: none;
  user-select: none;
`;

export const TodoItem = memo(({ data, index }: TodoItemProps) => (
  <TodoItemStyled>
    <TodoItemNum>
      <Text $variant="small">{index}</Text>
    </TodoItemNum>
    <TodoItemContent>
      <CompletedTodoCheckbox
        id={data.id}
        title={data.title}
        completed={data.completed}
      />
      <RemoveTodoButton id={data.id} />
    </TodoItemContent>
  </TodoItemStyled>
));

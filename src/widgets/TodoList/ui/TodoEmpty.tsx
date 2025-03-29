import { styled } from 'styled-components';

import emptyImage from '@/app/assets/empty-image.jpg';

import { Image, Stack, Text } from '@/shared/ui';

const TodoEmptyStyled = styled(Stack)`
  align-items: center;
  text-align: center;
`;

const TodoEmptyText = styled(Text)`
  color: #b4b4b4;
`;

const TodoEmptyImage = styled(Image)`
  width: 242px;
  height: 242px;
`;

export const TodoEmpty = () => {
  return (
    <TodoEmptyStyled $gap="small">
      <TodoEmptyImage width="100%" src={emptyImage} alt="empty" />
      <TodoEmptyText $variant="small">
        Добавьте свою первую задачу
      </TodoEmptyText>
    </TodoEmptyStyled>
  );
};

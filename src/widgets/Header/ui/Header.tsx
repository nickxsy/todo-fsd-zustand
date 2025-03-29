import { NavLink } from 'react-router';
import { styled } from 'styled-components';

import { RoutePath } from '@/shared/const';
import { Button, Container, Stack, Wrapper } from '@/shared/ui';
import { cn } from '@/shared/utils';

const HeaderLink = styled(Button)`
  &.active {
    pointer-events: none;
    color: #fff;
  }

  &.active::before {
    background-color: #000;
    border-color: #000;
  }
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
    border: 1px solid #e8e8e8;
    border-radius: 8px;
    background-color: transparent;
    transition:
      border-color 300ms ease,
      background-color 300ms ease,
      transform 300ms ease;
  }

  &:hover::before {
    background-color: #e8e8e8;
    transform: scale3d(1.15, 1.15, 1.15);
  }
`;

const data: { title: string; to: string }[] = [
  {
    title: 'Главная',
    to: RoutePath.main
  },
  {
    title: 'Инфо',
    to: RoutePath.about
  }
];

export const Header = () => {
  return (
    <Wrapper size="small" as="header">
      <Container as="nav">
        <Stack $dir="row" $gap="medium">
          {data.map(item => (
            <HeaderLink
              className={cn((isActive: boolean) => (isActive ? 'active' : ''))}
              key={item.to}
              to={item.to}
              as={NavLink}
            >
              {item.title}
            </HeaderLink>
          ))}
        </Stack>
      </Container>
    </Wrapper>
  );
};

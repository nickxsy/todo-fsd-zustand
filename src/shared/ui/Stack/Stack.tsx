import { styled } from 'styled-components';

type Gap = 'small' | 'medium' | 'large';
type Direction = 'row' | 'column';

export const Stack = styled.div<{ $dir?: Direction; $gap?: Gap }>`
  ${({ $gap }) => {
    switch ($gap) {
      case 'small':
        return '--gap: 8px;';
      case 'medium':
        return '--gap: 14px;';
      case 'large':
        return '--gap: 24px;';
      default:
        return '--gap: 12px;';
    }
  }};

  display: flex;
  flex-direction: ${({ $dir }) => ($dir ? $dir : 'column')};
  gap: var(--gap, 12px);
`;

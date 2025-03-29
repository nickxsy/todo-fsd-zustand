import { memo } from 'react';
import { styled } from 'styled-components';

const CheckboxStyled = styled.input.attrs({ type: 'checkbox' })`
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: none;
  width: 24px;
  height: 24px;
  border: 2px solid #000;
  border-radius: 4px;
  background: ${({ checked }) => (checked ? '#000' : 'transparent')};
  transition:
    background-color 0.2s,
    border-color 0.2s;

  &::after {
    content: '';
    width: 12px;
    height: 12px;
    background: white;
    display: ${({ checked }) => (checked ? 'block' : 'none')};
  }
`;

type CheckboxProps = React.ComponentProps<'input'>;

export const Checkbox = memo(({ ...props }: CheckboxProps) => {
  return <CheckboxStyled {...props} />;
});

Checkbox.displayName = 'Checkbox';

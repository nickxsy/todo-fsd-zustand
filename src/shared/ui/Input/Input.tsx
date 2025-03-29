import { styled } from 'styled-components';

const InputStyled = styled.input`
  appearance: none;
  border: 2px solid #000;
  padding: 12px 15px;
  border-radius: 8px;
  width: 100%;
  transition:
    background-color 0.2s,
    border-color 0.2s;
`;

export const Input = ({ ...props }: React.ComponentProps<'input'>) => (
  <InputStyled {...props} />
);

Input.displayName = 'Input';

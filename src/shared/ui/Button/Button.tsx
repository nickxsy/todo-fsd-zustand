import { styled } from 'styled-components';

type Variant = 'primary' | 'secondary' | 'link' | 'disabled';

export const Button = styled.button<{ $variant?: Variant }>`
  ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
        return {
          '--button-bg-color': '#39aa5d',
          '--button-color': '#fff',
          'background-color': 'var(--button-bg-color)'
        };
      case 'secondary':
        return {
          '--button-bg-color': '#3c4a40',
          '--button-color': '#fff',
          'background-color': 'var(--button-bg-color)'
        };
      case 'link':
        return {
          '--gap': '12px'
        };
      case 'disabled':
        return {
          '--gap': '12px'
        };
      default:
        return null;
    }
  }};

  display: inline-flex;
  font-weight: 600;
  font-size: 14px;
  padding: 12px 16px;
  border-radius: 8px;
  line-height: 1.2;
  justify-content: center;
  align-items: center;
  position: relative;
  color: var(--button-color);

  outline: none;
  box-shadow: none;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

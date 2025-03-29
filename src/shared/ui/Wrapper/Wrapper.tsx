import { styled } from 'styled-components';

type Size = 'small' | 'medium' | 'large';

const WrapperStyled = styled.div<{ $size?: Size }>`
  ${({ $size }) => {
    switch ($size) {
      case 'small':
        return '--padding: 24px;';
      case 'medium':
        return '--padding: 42px;';
      case 'large':
        return '--padding: 64px;';
      default:
        return '--padding: 36px;';
    }
  }};

  padding-top: var(--padding);
  padding-bottom: var(--padding);
`;

type WrapperProps = React.ComponentProps<'div'> & {
  children: React.ReactNode;
  as?: string;
  size?: Size;
};

export const Wrapper = ({ size, as, ...props }: WrapperProps) => (
  <WrapperStyled $size={size} as={as} {...props} />
);

Wrapper.displayName = 'Wrapper';

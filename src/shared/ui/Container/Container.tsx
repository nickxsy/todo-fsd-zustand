import { styled } from 'styled-components';

type Size = 'small' | 'medium' | 'large';

const ContainerStyled = styled.div<{ $size?: Size }>`
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;

  max-width: ${({ $size }) => {
    switch ($size) {
      case 'small':
        return '600px';
      case 'medium':
        return '800px';
      case 'large':
        return '1200px';
      default:
        return null;
    }
  }};
`;

type ContainerProps = React.ComponentProps<'div'> & {
  children: React.ReactNode;
  as?: string;
  size?: Size;
};

export const Container = ({ size, as, ...props }: ContainerProps) => (
  <ContainerStyled $size={size} as={as} {...props} />
);

Container.displayName = 'Container';

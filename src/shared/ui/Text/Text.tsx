// import { memo } from 'react';
import { styled } from 'styled-components';

type Variant = 'small' | 'medium' | 'large';

export const Text = styled.p<{ $variant?: Variant; $serif?: boolean }>`
  ${({ $variant }) => {
    switch ($variant) {
      case 'small':
        return '--font-size: 16px;';
      case 'medium':
        return '--font-size: 20px;';
      case 'large':
        return '--font-size: 42px;';
      default:
        return '--font-size: 24px;';
    }
  }}

  font-size: var(--font-size, 24px);
  font-weight: ${({ $serif }) => ($serif ? 600 : 400)};
  font-family: ${({ $serif }) => ($serif ? 'Philosopher' : 'sans-serif')};
  line-height: 1.5;
`;

// type TextProps = React.ComponentProps<'p'> & {
//   variant?: Variant;
//   serif?: boolean;
//   children: React.ReactNode;
// };

// export const Text = memo(({ variant, serif, ref, ...props }: TextProps) => (
//   <TextStyled
//     data-variant={variant}
//     $serif={serif}
//     $variant={variant}
//     ref={ref}
//     {...props}
//   />
// ));

// Text.displayName = 'Text';

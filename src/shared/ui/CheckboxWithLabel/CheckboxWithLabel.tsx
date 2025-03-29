import { memo } from 'react';
import { styled } from 'styled-components';

import { Checkbox } from '@/shared/ui';

const CheckboxWithLabelStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const CheckboxWithLabel = memo(
  ({
    id,
    children,
    ...props
  }: React.ComponentProps<'div'> & { id: string }) => {
    return (
      <CheckboxWithLabelStyled>
        <Checkbox id={id} {...props} />
        <label htmlFor={id}>{children}</label>
      </CheckboxWithLabelStyled>
    );
  }
);

CheckboxWithLabel.displayName = 'CheckboxWithLabel';

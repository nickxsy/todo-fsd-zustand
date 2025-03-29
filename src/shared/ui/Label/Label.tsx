import { memo } from 'react';

type LabelProps = React.ComponentProps<'label'>;

export const Label = memo(({ ...props }: LabelProps) => <label {...props} />);

Label.displayName = 'Label';

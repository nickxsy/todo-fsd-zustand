import { styled } from 'styled-components';

const ImageStyled = styled.img`
  width: 100%;
  max-width: none;
  pointer-events: none;
  user-select: none;
`;

type ImageProps = React.ComponentProps<'img'>;

export const Image = ({ ...props }: ImageProps) => <ImageStyled {...props} />;

Image.displayName = 'Image';

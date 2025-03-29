import { Container, Text, Wrapper } from '@/shared/ui';

export const Footer = () => {
  return (
    <Wrapper as="footer">
      <Container>
        <Text as="span" $variant="small">
          TodoApp + FSD + Zustand
        </Text>
      </Container>
    </Wrapper>
  );
};

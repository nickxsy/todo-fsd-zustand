import styled from 'styled-components';

import { RoutePath } from '@/shared/const';
import { Container, Link, Stack, Text, Wrapper } from '@/shared/ui';

const NotFoundStack = styled(Stack)`
  align-items: center;
  text-align: center;
`;

const NotFoundPage = () => {
  return (
    <Wrapper>
      <Container>
        <NotFoundStack $gap="large" $dir="column">
          <Text $variant="large" $serif>
            404
          </Text>
          <Text $variant="medium" $serif>
            Страница не найдена 😕
          </Text>
          <Link to={RoutePath.main}>На главную</Link>
        </NotFoundStack>
      </Container>
    </Wrapper>
  );
};

export default NotFoundPage;

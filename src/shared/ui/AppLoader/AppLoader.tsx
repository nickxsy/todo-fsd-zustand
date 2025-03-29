import { styled } from 'styled-components';

import { Spinner } from '@/shared/ui';

const AppLoaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const AppLoader = () => {
  return (
    <AppLoaderStyled>
      <Spinner />
    </AppLoaderStyled>
  );
};

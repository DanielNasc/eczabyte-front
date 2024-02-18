import React from 'react';

import Main from '../../pages/Main';

import { Container, Wrapper } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        {/* <Menubar /> */}
        <Main />
        {/* <Sidebar /> */}
      </Wrapper>
    </Container>
  );
};

export default Layout;

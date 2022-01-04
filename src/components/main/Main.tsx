import React from 'react';

import Header from 'components/header';
import Intro from 'components/intro';

import { MainContainer, Container } from './Main.style';

function Main() {
  return (
    <Container>
      <MainContainer>
        <Header />
        <Intro />
      </MainContainer>
    </Container>
  )
}

export default Main;
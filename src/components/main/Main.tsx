import React from 'react';

import Header from 'components/header';
import Intro from 'components/intro';

import { MainContainer, Container } from './Main.style';
import AboutMe from 'components/about-me';

function Main() {
  return (
    <Container>
      <MainContainer>
        <Header />
        <Intro />
      </MainContainer>
      <AboutMe />
    </Container>
  )
}

export default Main;
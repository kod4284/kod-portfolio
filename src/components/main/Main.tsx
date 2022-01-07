import React from 'react';

import Header from 'components/header';
import Intro from 'components/intro';

import { MainContainer, Container, ContentContainer } from './Main.style';
import AboutMe from 'components/about-me';
import Education from 'components/education';

function Main() {
  return (
    <Container>
      <MainContainer>
        <Header />
        <Intro />
      </MainContainer>
      <ContentContainer>
        <AboutMe />
        <Education />
      </ContentContainer>
    </Container>
  )
}

export default Main;
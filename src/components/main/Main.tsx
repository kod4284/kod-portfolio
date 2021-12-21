import React from 'react';

import Header from 'components/header';
import Intro from 'components/intro';

import { Container } from './Main.style';

function Main() {
  return (
    <Container>
      <Header />
      <Intro />
    </Container>
  )
}

export default Main;
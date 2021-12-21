import React from 'react';

import { Container, MiddleContainer, Text, Keyboard } from './Intro.style';

function Intro() {
  return (
    <Container>
      <Text>
        Perseverance
      </Text>
      <MiddleContainer>
        <Text>
          Passion
        </Text>
        <Keyboard src={require('photos/keyboard.jpeg')} alt="Custom designed keyboard"/>
        <Text>
          Cooperation
        </Text>
      </MiddleContainer>
      <Text>
          in DEV
      </Text>
    </Container>
  );
}

export default Intro;
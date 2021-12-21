import React from 'react';
import { Container, Title, Link } from './Header.style';

function Header() {
  return (
    <Container>
      <Title>
        kod.w
      </Title>
      <Link href='https://www.github.com/kod4284'>
        Github
      </Link>
    </Container>
  );
}

export default Header;
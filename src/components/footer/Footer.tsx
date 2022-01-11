import React from 'react';

import GithubIcon from 'assets/photos/github.png';
import InstagramIcon from 'assets/svgs/instagram.svg';
import LinkedinIcon from 'assets/svgs/linkedin.svg';
import MailIcon from 'assets/photos/mail.png';

import { Container, IconContainer, Divider, Icon, Dock } from './Footer.style';

function Footer() {
  return (
    <Container>
      <Divider>• • •</Divider>
      <Dock>
        <IconContainer>
          <a href="https://github.com/kod4284">
            <Icon src={GithubIcon}/>
          </a>
          <a href="https://www.instagram.com/__dw.ko__/">
            <Icon src={InstagramIcon}/>
          </a>
          <Icon src={MailIcon}/>
          <a href='https://www.linkedin.com/in/daewoongko/'>
            <Icon src={LinkedinIcon}/>
          </a>
        </IconContainer>
      </Dock>
   </Container>
  )
}

export default Footer;

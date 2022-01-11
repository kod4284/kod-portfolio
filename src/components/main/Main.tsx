import React from 'react';

import Header from 'components/header';
import Intro from 'components/intro';

import { MainContainer, Container, ContentContainer } from './Main.style';
import AboutMe from 'components/about-me';
import Education from 'components/education';
import WorkExperience from 'components/work-experience';
import AwardsAndCerts from 'components/awards-and-certs';
import MajorSkills from 'components/major-skills';
import Footer from 'components/footer';

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
        <WorkExperience />
        <AwardsAndCerts />
        <MajorSkills />
        <Footer />
      </ContentContainer>
    </Container>
  )
}

export default Main;
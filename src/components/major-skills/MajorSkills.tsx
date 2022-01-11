import React from 'react';

import TsIcon from 'assets/photos/ts.png';
import JsIcon from 'assets/photos/js.png';
import JavaIcon from 'assets/photos/java.jpeg';
import PythonIcon from 'assets/photos/python.png';
import ReactIcon from 'assets/photos/react.png';
import NodeIcon from 'assets/photos/node-js.png';
import SpringIcon from 'assets/photos/spring.png';
import FlutterIcon from 'assets/photos/flutter.png';

import { TitleText } from 'components/commons/styles';
import {
  Container,
  ContentContainer,
  Icon,
  IconContainer,
  FlexContainer,
  Text
} from './MajorSkills.style';

function MajorSkills() {
  const icons = [
    TsIcon,
    JsIcon,
    JavaIcon,
    PythonIcon,
    ReactIcon,
    NodeIcon,
    SpringIcon,
    FlutterIcon
  ];
  return (
    <Container>
      <TitleText>Major Skills</TitleText>
      <ContentContainer>
        <SkillIcons icons={icons} />
        <Text>And More ...</Text>
      </ContentContainer>
    </Container>
  )
}

function SkillIcons({ icons }: { icons: string[] }) {
  return (
    <FlexContainer>
      {
        icons.map((icon, i) => (
        <IconContainer key={i}>
          <Icon src={icon} />
        </IconContainer>
        ))
      }
    </FlexContainer>
  )
}

export default MajorSkills;

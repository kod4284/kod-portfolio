import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

import TsIcon from 'assets/photos/ts.png';
import JsIcon from 'assets/photos/js.png';
import JavaIcon from 'assets/photos/java.jpeg';
import PythonIcon from 'assets/photos/python.png';
import ReactIcon from 'assets/photos/react.png';
import NodeIcon from 'assets/photos/node-js.png';
import SpringIcon from 'assets/photos/spring.png';
import FlutterIcon from 'assets/photos/flutter.png';

import { OverFlowContainer, TitleText } from 'components/commons/styles';
import {
  Container,
  ContentContainer,
  Icon,
  IconContainer,
  FlexContainer,
  Text
} from './MajorSkills.style';

function MajorSkills() {
  const titleRef = useRef(null);
  const tsRef = useRef(null);
  const jsRef = useRef(null);
  const javaRef = useRef(null);
  const pythonRef = useRef(null);
  const reactRef = useRef(null);
  const nodeRef = useRef(null);
  const springRef = useRef(null);
  const flutterRef = useRef(null);
  const endTextRef = useRef(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top bottom"
      },
      duration: 1,
      ease: "power3.out",
      yPercent: 200
    })
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: tsRef.current,
        start: "top bottom"
      }
    });
    tl.from(tsRef.current, {
      duration: 1,
      ease: "power3.out",
      yPercent: 200
    }, "<0.1")
    .from(jsRef.current, {
      duration: 1,
      ease: "power3.out",
      yPercent: 200
    }, "<0.1")
    .from(javaRef.current, {
      duration: 1,
      ease: "power3.out",
      yPercent: 200
    }, "<0.1")
    .from(pythonRef.current, {
      duration: 1,
      ease: "power3.out",
      yPercent: 200
    }, "<0.1")
    .from(reactRef.current, {
      duration: 1,
      ease: "power3.out",
      yPercent: 200
    }, "<0.1")
    .from(nodeRef.current, {
      duration: 1,
      ease: "power3.out",
      yPercent: 200
    }, "<0.2")
    .from(springRef.current, {
      duration: 1,
      ease: "power3.out",
      yPercent: 200
    }, "<0.1")
    .from(flutterRef.current, {
      duration: 1,
      ease: "power3.out",
      yPercent: 200
    }, "<0.1")
    gsap.from(endTextRef.current, {
      scrollTrigger: {
        trigger: endTextRef.current,
        start: "top bottom"
      },
      duration: 2,
      opacity: 0
    })
  }, []); 
  const icons = [
    {ref: tsRef ,icon: TsIcon},
    {ref: jsRef, icon: JsIcon},
    {ref: javaRef, icon: JavaIcon},
    {ref: pythonRef, icon: PythonIcon},
    {ref: reactRef, icon: ReactIcon},
    {ref: nodeRef, icon: NodeIcon},
    {ref: springRef, icon: SpringIcon},
    {ref: flutterRef, icon: FlutterIcon}
  ];
  return (
    <Container>
      <TitleText ref={titleRef}>Major Skills</TitleText>
      <ContentContainer>
        <SkillIcons icons={icons} />
        <Text ref={endTextRef}>And More ...</Text>
      </ContentContainer>
    </Container>
  )
}

function SkillIcons({ icons }: { icons: { ref: React.RefObject<HTMLImageElement>, icon: string}[] }) {
  return (
    <FlexContainer>
      {
        icons.map(({ref, icon}, i) => (
        <IconContainer key={i}>
          <OverFlowContainer>
            <Icon ref={ref} src={icon} />
          </OverFlowContainer>
        </IconContainer>
        ))
      }
    </FlexContainer>
  )
}

export default MajorSkills;

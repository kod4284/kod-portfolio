import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ReactComponent as Arrow } from 'assets/svgs/arrow-light.svg';

import {
  Text,
  Keyboard,
  MiddleContainer,
  ArrowContainer,
  IntroContainer,
  Container,
} from './Intro.style';

function Intro() {
  const appRef = useRef<HTMLDivElement>(null);
  const keyboardImgRef = useRef<HTMLImageElement>(null);
  const passionTextRef = useRef<HTMLHeadingElement>(null);
  const perseveranceTextRef = useRef<HTMLHeadingElement>(null);
  const cooperationTextRef = useRef<HTMLHeadingElement>(null);
  const inDevTextRef = useRef<HTMLHeadingElement>(null);
  const arrowRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(perseveranceTextRef.current, { y: 2000, ease: 'power3.out', duration: 2 })
      .from(keyboardImgRef.current, {y: 2000, ease: 'power3.out', duration: 2 }, "<0.1")
      .from(passionTextRef.current, { y: 2000, ease: 'power3.out', duration: 2 }, "<0.15")
      .from(cooperationTextRef.current, { y: 2000, ease: 'power3.out', duration: 2 }, "<0.15")
      .from(inDevTextRef.current, { y: 2000, ease: 'power3.out', duration: 2 }, "<0.15")
      .fromTo(arrowRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 })
      .to(arrowRef.current, { y: 15, ease: "circ.in", repeat: -1, yoyo: true, duration: 1},"+=0.1");
  }, []);
  return (
    <Container height={window.innerHeight}>
      <IntroContainer ref={appRef}>
        <Text ref={perseveranceTextRef}>
          Perseverance
        </Text>
        <MiddleContainer>
          <Text ref={passionTextRef}>
            Passion
          </Text>
          <Keyboard ref={keyboardImgRef} src={require('assets/photos/keyboard.jpeg')} alt="Custom designed keyboard"/>
          <Text ref={cooperationTextRef}>
            Cooperation
          </Text>
        </MiddleContainer>
        <Text ref={inDevTextRef}>
            in DEV
        </Text>
      </IntroContainer>
      <ArrowContainer ref={arrowRef}>
        <Arrow />
      </ArrowContainer>
    </Container>
  );
}

export default Intro;
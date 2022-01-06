import React, { useEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';
gsap.registerPlugin(ScrollTrigger);

import {
  Container,
  IntroText,
  IntroTextContainer,
  IntroContainer,
  Cup,
  AboutMeContainer,
  TitleText,
  ContentText,
  GeneKranz,
  PhotoContainer,
  QuoteText,
  NameText
} from "./AboutMe.style";

function AboutMe() {
  const { t } = useTranslation('aboutMePage');

  const firstTextRef = useRef<HTMLHeadingElement>(null);
  const secondTextRef = useRef<HTMLHeadingElement>(null);
  const cupRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.from(firstTextRef.current,
      { 
        x: isSmallSceen() ? 10 : -100,
        y: isSmallSceen() ? -70: -100,
        scale: 1.2,
        scrollTrigger:
        {
          trigger: firstTextRef.current,
          scrub: 0.1,
          start: "bottom center",
          end: "250px center",
        }
        })
        window.innerWidth == 768
    gsap.from(secondTextRef.current,
      { 
        x: isSmallSceen() ? -90 : 190,
        y: isSmallSceen() ? -110: -248,
        scale: 1.2,
        scrollTrigger:
        {
          trigger: secondTextRef.current,
          start: isSmallSceen() ? "top center" :"bottom center",
          end: "250px center",
          scrub: 0.1,
        }
    })
  }, []);
  return (
    <Container>
      <IntroContainer>
        <IntroText ref={firstTextRef}>"Failure Is Not</IntroText>
        <IntroTextContainer>
          <Cup ref={cupRef} src={require("assets/photos/cup.jpeg")} />
          <IntroText ref={secondTextRef}>an Option"</IntroText>
        </IntroTextContainer>
      </IntroContainer>
      <AboutMeContainer>
        <TitleText>About Me</TitleText>
        <ContentText>
          {t("pOne")}
        </ContentText>
        <ContentText>
          {t("pTwo")}
        </ContentText>
      </AboutMeContainer>
      <PhotoContainer>
        <GeneKranz src={require("assets/photos/Gene-Kranz-Apollo-11.jpeg")} />
        <QuoteText>"Failure is not an option"</QuoteText>
        <NameText>— Gene Kranz —</NameText>
      </PhotoContainer>
    </Container>
  )
}

function isSmallSceen() {
  return window.innerWidth <= 768;
}

export default AboutMe;
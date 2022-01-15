import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { applySmoothScroll } from 'lib/smoothScroll';
import gsap from 'gsap';
import ScrollBar from 'smooth-scrollbar';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import {
  TitleText,
  OverFlowContainer,
  ImgOverFlowContainer,
  TitleImage,
} from 'components/commons/styles';

import {
  Container,
  IntroText,
  IntroTextContainer,
  IntroContainer,
  Cup,
  AboutMeContainer,
  ContentText,
  PhotoContainer,
  QuoteText,
  NameText,
} from "./AboutMe.style";

function AboutMe() {
  const { t } = useTranslation('aboutMePage');

  const firstTextRef = useRef<HTMLHeadingElement>(null);
  const secondTextRef = useRef<HTMLHeadingElement>(null);
  const thirdTextRef = useRef<HTMLHeadingElement>(null);
  const cupRef = useRef<HTMLImageElement>(null);
  const aboutMeTextRef = useRef<HTMLHeadingElement>(null);
  const contentTextOneRef = useRef<HTMLParagraphElement>(null);
  const contentTextTwoRef = useRef<HTMLParagraphElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    applySmoothScroll(ScrollTrigger, ScrollBar);

    const introTl = gsap.timeline({
      scrollTrigger:
      {
        trigger: firstTextRef.current,
        start: "top bottom",
      }
    });
 
    introTl.from(firstTextRef.current,
        { 
          duration: 1,
          ease: "power3.out",
          yPercent: 200,
        })
        .from(secondTextRef.current,
        { 
          duration: 1,
          ease: "power3.out",
          yPercent: -200,
        }, "<0.6")
        .from(thirdTextRef.current,
        { 
          duration: 1,
          ease: "power3.out",
          yPercent: 200,
        }, "<0.6")
        .to(cupRef.current,
        {
          duration: 0.1,
          x: "+=10",
          yoyo: true,
          repeat: 5
        })
        .to(cupRef.current,
        {
          duration: 0.1,
          x: "-=10",
          yoyo: true,
          repeat: 5
        }, "<0");



    const tl = gsap.timeline({
      scrollTrigger:
      {
        trigger: aboutMeTextRef.current,
        start: "bottom bottom",
      }
    });
    tl.from(aboutMeTextRef.current, {
      ease: "power3.out",
      yPercent: 200,
      duration: 1,
    }).from(contentTextOneRef.current, {
      ease: "power3.out",
      yPercent: 100,
      duration: 1
    }, "<0.2").from(contentTextTwoRef.current, {
      ease: "power3.out",
      yPercent: 100,
      duration: 1
    }, "<0.2");

    gsap.from(imgRef.current, {
      scale: 1.2,
      scrollTrigger:
      {
        trigger: imgRef.current,
        start: "top bottom",
        scrub: true,
      }
    });

    const tl2 = gsap.timeline({
      scrollTrigger:
      {
        trigger: imgRef.current,
        start: "top center",
      }
    });
    tl2.from(quoteRef.current, {
      ease: "power3.out",
      yPercent: 100,
      duration: 1
    }).from(nameRef.current, {
      ease: "power3.out",
      yPercent: 100,
      duration: 1
    }, "<0.2");
  }, []);

  return (
    <div >
    <Container>
      <IntroContainer>
        <OverFlowContainer>
          <IntroText ref={firstTextRef}>"Failure Is</IntroText>
        </OverFlowContainer>
        <OverFlowContainer>
          <IntroText ref={secondTextRef} id="bold">Not</IntroText>
        </OverFlowContainer>
        <IntroTextContainer className="k">
          <Cup ref={cupRef} src={require("assets/photos/cup.jpeg")} />
          <OverFlowContainer>
            <IntroText ref={thirdTextRef}>an Option"</IntroText>
          </OverFlowContainer>
        </IntroTextContainer>
      </IntroContainer>
      <AboutMeContainer>
        <OverFlowContainer>
          <TitleText ref={aboutMeTextRef}>About Me</TitleText>
        </OverFlowContainer>
        <OverFlowContainer>
          <ContentText ref={contentTextOneRef}>
            {t("pOne")}
          </ContentText>
        </OverFlowContainer>
        <OverFlowContainer>
          <ContentText ref={contentTextTwoRef}>
            {t("pTwo")}
          </ContentText>
        </OverFlowContainer>
      </AboutMeContainer>
      <PhotoContainer>
        <ImgOverFlowContainer>
          <TitleImage ref={imgRef} src={require("assets/photos/Gene-Kranz-Apollo-11.jpeg")} />
        </ImgOverFlowContainer>
        <OverFlowContainer>
          <QuoteText ref={quoteRef}>"Failure is not an option"</QuoteText>
        </OverFlowContainer>
        <OverFlowContainer>
          <NameText ref={nameRef}>— Gene Kranz —</NameText>
        </OverFlowContainer>
      </PhotoContainer>
    </Container>
    </div>
  )
}

export default AboutMe;
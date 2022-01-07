import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { applySmoothScroll } from 'lib/smoothScroll';
import gsap from 'gsap';
import ScrollBar from 'smooth-scrollbar';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import {
  TitleText,
  TextOverFlowContainer,
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
  const cupRef = useRef<HTMLImageElement>(null);
  const aboutMeTextRef = useRef<HTMLHeadingElement>(null);
  const contentTextOneRef = useRef<HTMLParagraphElement>(null);
  const contentTextTwoRef = useRef<HTMLParagraphElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    applySmoothScroll(ScrollTrigger, ScrollBar);
    gsap.from(firstTextRef.current,
      { 
        x: isSmallSceen() ? 10 : -100,
        y: isSmallSceen() ? -70: -100,
        scale: 1.2,
        scrollTrigger:
        {
          trigger: firstTextRef.current,
          start: "bottom center",
          end: "250px center",
          scrub: true,
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
          scrub: true,
        }
    })

    const tl = gsap.timeline({
      scrollTrigger:
      {
        trigger: aboutMeTextRef.current,
        start: "top center",
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
        <IntroText ref={firstTextRef}>"Failure Is Not</IntroText>
        <IntroTextContainer className="k">
          <Cup ref={cupRef} src={require("assets/photos/cup.jpeg")} />
          <IntroText ref={secondTextRef}>an Option"</IntroText>
        </IntroTextContainer>
      </IntroContainer>
      <AboutMeContainer>
        <TextOverFlowContainer>
          <TitleText ref={aboutMeTextRef}>About Me</TitleText>
        </TextOverFlowContainer>
        <TextOverFlowContainer>
          <ContentText ref={contentTextOneRef}>
            {t("pOne")}
          </ContentText>
        </TextOverFlowContainer>
        <TextOverFlowContainer>
          <ContentText ref={contentTextTwoRef}>
            {t("pTwo")}
          </ContentText>
        </TextOverFlowContainer>
      </AboutMeContainer>
      <PhotoContainer>
        <ImgOverFlowContainer>
          <TitleImage ref={imgRef} src={require("assets/photos/Gene-Kranz-Apollo-11.jpeg")} />
        </ImgOverFlowContainer>
        <TextOverFlowContainer>
          <QuoteText ref={quoteRef}>"Failure is not an option"</QuoteText>
        </TextOverFlowContainer>
        <TextOverFlowContainer>
          <NameText ref={nameRef}>— Gene Kranz —</NameText>
        </TextOverFlowContainer>
      </PhotoContainer>
    </Container>
    </div>
  )
}

function isSmallSceen() {
  return window.innerWidth <= 768;
}

export default AboutMe;
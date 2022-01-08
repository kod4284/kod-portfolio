import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';

import { InfoText } from 'components/commons/components';

import {
  TitleText,
  ImgOverFlowContainer,
  OverFlowContainer,
} from 'components/commons/styles';
import {
  Container,
  Gatech,
  GatechLogo,
  ImgContainer,
} from './Education.style';

function Education() {
  const { t } = useTranslation("education");
  const titleTextRef = useRef<HTMLHeadingElement>(null);
  const gatechRef = useRef<HTMLImageElement>(null);
  const gatechLogoRef = useRef<HTMLImageElement>(null);
  const infoTitleTextRef = useRef<HTMLHeadingElement>(null);
  const infoSubTextRef = useRef<HTMLHeadingElement>(null);
  const infoPeriodTextRef = useRef<HTMLHeadingElement>(null);
  const infoRegionTextRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {

    gsap.from(titleTextRef.current, {
      ease: "power3.out",
      yPercent: 200,
      duration: 1,
      scrollTrigger:
      {
        trigger: gatechLogoRef.current,
        start: "bottom bottom",
      } 
    });

    gsap.to(gatechLogoRef.current,
      { 
        y: -100,
        scrollTrigger:
        {
          trigger: gatechLogoRef.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
        }
      });

    gsap.from(gatechRef.current, {
      scale: 1.2,
      scrollTrigger:
      {
        trigger: gatechRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });
    const tl = gsap.timeline({
      scrollTrigger:
      {
        trigger: infoTitleTextRef.current,
        start: "bottom bottom",
      }
    });
    tl.from(infoTitleTextRef.current, {
      ease: "power3.out",
      yPercent: 100,
      duration: 1
    }).from(infoSubTextRef.current, {
      ease: "power3.out",
      yPercent: 100,
      duration: 1
    }, "<0.2").from(infoPeriodTextRef.current, {
      ease: "power3.out",
      yPercent: 100,
      duration: 1
    }, "<0.2").from(infoRegionTextRef.current, {
      ease: "power3.out",
      yPercent: 100,
      duration: 1
    }, "<0");
  }, []);

  return (
    <Container>
      <GatechLogo ref={gatechLogoRef} src={require("assets/photos/gatech-logo.png")} />
      <OverFlowContainer>
        <TitleText ref={titleTextRef}>Education</TitleText>
      </OverFlowContainer>
      <ImgContainer>
        <ImgOverFlowContainer>
          <Gatech ref={gatechRef} src={require("assets/photos/gatech.jpeg")} />
        </ImgOverFlowContainer>
      </ImgContainer>
      <InfoText
        title={{ref: infoTitleTextRef, text: t("school")}}
        sub={{ref: infoSubTextRef, text: t("major")}}
        period={{ref: infoPeriodTextRef, text: t("period")}}
        region={{ref: infoRegionTextRef, text: t("region")}}
      />
  </Container>
  );
}

export default Education;
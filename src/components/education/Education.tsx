import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';

import {
  TitleText,
  ImgOverFlowContainer,
  TextOverFlowContainer,
  InfoTitleText,
  InfoSubText,
  InfoDetailText,
} from 'components/commons/styles';
import { Container, DetailTextContainer, Gatech, GatechLogo, ImgContainer, TextContainer } from './Education.style';

function Education() {
  const { t } = useTranslation("education");
  const titleTextRef = useRef<HTMLHeadingElement>(null);
  const gatechRef = useRef<HTMLImageElement>(null);
  const gatechLogoRef = useRef<HTMLImageElement>(null);
  const InfoTitleTextRef = useRef<HTMLHeadingElement>(null);
  const InfoSubTextRef = useRef<HTMLHeadingElement>(null);
  const InfoPeriodTextRef = useRef<HTMLHeadingElement>(null);
  const InfoRegionTextRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    console.log();
  }, []);

  return (
    <Container>
      <GatechLogo ref={gatechLogoRef} src={require("assets/photos/gatech-logo.png")} />
      <TextOverFlowContainer>
        <TitleText ref={titleTextRef}>Education</TitleText>
      </TextOverFlowContainer>
      <ImgContainer>
        <ImgOverFlowContainer>
          <Gatech ref={gatechRef} src={require("assets/photos/gatech.jpeg")} />
        </ImgOverFlowContainer>
      </ImgContainer>
      <TextContainer>
        <InfoTitleText ref={InfoTitleTextRef}>{t("school")}</InfoTitleText>
        <InfoSubText ref={InfoSubTextRef}>{t("major")}</InfoSubText>
        <DetailTextContainer>
          <InfoDetailText ref={InfoPeriodTextRef}>{t("period")}</InfoDetailText>
          <InfoDetailText ref={InfoRegionTextRef}>{t("region")}</InfoDetailText>
        </DetailTextContainer>
      </TextContainer>
  </Container>
  );
}

export default Education;
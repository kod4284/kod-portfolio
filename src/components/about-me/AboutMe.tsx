import React from "react";
import { useTranslation } from 'react-i18next';

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
  return (
    <Container>
      <IntroContainer>
        <IntroText>{t("failureIsNot")}</IntroText>
        <IntroTextContainer>
          <Cup src={require("assets/photos/cup.jpeg")} />
          <IntroText>{t("anOption")}</IntroText>
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

export default AboutMe;
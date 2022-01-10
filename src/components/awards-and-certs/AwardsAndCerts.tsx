import React from 'react'
import { useTranslation } from 'react-i18next';

import MocIcon from 'assets/photos/moc.png';
import AirForceIcon from 'assets/photos/airforce.png';
import PadongIcon from 'assets/photos/padong.png';
import UdacityIcon from 'assets/photos/udacity.png';

import MocWM from 'assets/photos/ministry-mark.png';
import AirForceWM from 'assets/photos/airforce-mark.png';
import PadongWM from 'assets/photos/google-mark.png';
import UdacityWM from 'assets/photos/udacity-mark.png';

import {
  TitleText,
  DetailTextContainer,
} from 'components/commons/styles';
import {
  Container,
  ContentContainer,
  Icon,
  InfoTitleText,
  InfoSubText,
  InfoDetailText,
  InfoContentContainer,
  InfoTextContainer,
  InfoTitleContainer,
  Watermark,
} from './AwardsAndCerts.style';

function AwardsAndCerts() {
  const { t } = useTranslation("awardsAndCerts");
  const data: IconsWithContentsProps["data"] = [
    {
      icon: MocIcon,
      watermark: MocWM,
      titleText: t("mocTitle"),
      subText: t("mocSub"),
      periodText: t("mocPeriod"),
      regionText: t("mocRegion"),
    },
    {
      icon: AirForceIcon,
      watermark: AirForceWM,
      titleText: t("airforceTitle"),
      subText: t("airforceSub"),
      periodText: t("airforcePeriod"),
      regionText: t("airforceRegion"),
    },
    {
      icon: PadongIcon,
      watermark: PadongWM,
      titleText: t("padongTitle"),
      subText: t("padongSub"),
      periodText: t("padongPeriod"),
      regionText: t("padongRegion"),
    },
    {
      icon: UdacityIcon,
      watermark: UdacityWM,
      titleText: t("udacityTitle"),
      subText: t("udacitySub"),
      periodText: t("udacityPeriod"),
      regionText: t("udacityRegion"),
    }
  ];
  return (
    <Container>
      <TitleText>Awards & Certificates</TitleText>
      <IconsWithContents data={data} />  
    </Container>
  )
}

interface IconsWithContentsProps {
  data: {
    icon: string,
    watermark: string,
    titleText: string,
    subText: string,
    periodText: string,
    regionText: string,
  }[]
}

function IconsWithContents({ data }: IconsWithContentsProps) {
  return (
    <ContentContainer>
    {
      data.map(({icon, watermark, titleText, subText, periodText, regionText}, i) => (
            <InfoContentContainer key={i}>
              <Icon src={icon} />
              <Watermark src={watermark} />
              <InfoTextContainer>
                <InfoTitleContainer>
                  <InfoTitleText>{titleText}</InfoTitleText>
                  <InfoSubText>{subText}</InfoSubText>
                </InfoTitleContainer>
                <DetailTextContainer>
                  <InfoDetailText>{periodText}</InfoDetailText>
                  <InfoDetailText>{regionText}</InfoDetailText>
                </DetailTextContainer>
              </InfoTextContainer>
            </InfoContentContainer>
      ))
    }
    </ContentContainer>
  );
}

export default AwardsAndCerts;
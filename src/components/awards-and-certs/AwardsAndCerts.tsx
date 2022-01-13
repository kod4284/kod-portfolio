import React, { useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';

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
  OverFlowContainer,
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
  const titleRef = useRef(null);
  const mocIconRef = useRef(null);
  const mocTextRef = useRef(null);
  const airforceIconRef = useRef(null);
  const airforceTextRef = useRef(null);
  const padongIconRef = useRef(null);
  const padongTextRef = useRef(null);
  const udacityIconRef = useRef(null);
  const udacityTextRef = useRef(null);

  useEffect(() => {
    gsap.from(titleRef.current,
      { 
        yPercent: 100,
        scrollTrigger:
        {
          trigger: titleRef.current,
          start: "top bottom",
        }
      });
    const tlOne = gsap.timeline({
      scrollTrigger: {
        trigger: mocTextRef.current,
        start: "center bottom",
      }
    });
    tlOne.from(mocIconRef.current, {
      duration: 1,
      yPercent: 200,
      ease: "power3.out"
    }).from(mocTextRef.current, {
      duration: 1,
      opacity: 0,
      ease: "power3.out"
    }, "<0.5");

    const tlTwo = gsap.timeline({
      scrollTrigger: {
        trigger: airforceTextRef.current,
        start: "center bottom",
      }
    });
    tlTwo.from(airforceIconRef.current, {
      duration: 1,
      yPercent: 200,
      ease: "power3.out"
    }).from(airforceTextRef.current, {
      duration: 1,
      opacity: 0,
      ease: "power3.out"
    }, "<0.5");

    const tlThree = gsap.timeline({
      scrollTrigger: {
        trigger: padongTextRef.current,
        start: "center bottom",
      }
    });
    tlThree.from(padongIconRef.current, {
      duration: 1,
      yPercent: 200,
      ease: "power3.out"
    }).from(padongTextRef.current, {
      duration: 1,
      opacity: 0,
      ease: "power3.out"
    }, "<0.5");

    const tlFour = gsap.timeline({
      scrollTrigger: {
        trigger: udacityTextRef.current,
        start: "center bottom",
      }
    });
    tlFour.from(udacityIconRef.current, {
      duration: 1,
      yPercent: 200,
      ease: "power3.out"
    }).from(udacityTextRef.current, {
      duration: 1,
      opacity: 0,
      ease: "power3.out"
    }, "<0.5");

  }, []);

  const data: IconsWithContentsProps["data"] = [
    {
      icon: MocIcon,
      watermark: MocWM,
      titleText: t("mocTitle"),
      subText: t("mocSub"),
      periodText: t("mocPeriod"),
      regionText: t("mocRegion"),
      iconRef: mocIconRef,
      textRef: mocTextRef
    },
    {
      icon: AirForceIcon,
      watermark: AirForceWM,
      titleText: t("airforceTitle"),
      subText: t("airforceSub"),
      periodText: t("airforcePeriod"),
      regionText: t("airforceRegion"),
      iconRef: airforceIconRef,
      textRef: airforceTextRef
    },
    {
      icon: PadongIcon,
      watermark: PadongWM,
      titleText: t("padongTitle"),
      subText: t("padongSub"),
      periodText: t("padongPeriod"),
      regionText: t("padongRegion"),
      iconRef: padongIconRef,
      textRef: padongTextRef
    },
    {
      icon: UdacityIcon,
      watermark: UdacityWM,
      titleText: t("udacityTitle"),
      subText: t("udacitySub"),
      periodText: t("udacityPeriod"),
      regionText: t("udacityRegion"),
      iconRef: udacityIconRef,
      textRef: udacityTextRef
    }
  ];
  return (
    <Container>
      <OverFlowContainer>
        <TitleText ref={titleRef}>Awards & Certificates</TitleText>
      </OverFlowContainer>
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
    iconRef: React.RefObject<HTMLImageElement>,
    textRef: React.RefObject<HTMLDivElement>,
  }[]
}

function IconsWithContents({ data }: IconsWithContentsProps) {
  return (
    <ContentContainer>
    {
      data.map(({
        icon,
        watermark,
        titleText,
        subText,
        periodText,
        regionText,
        iconRef,
        textRef
      }, i) => (
            <InfoContentContainer key={i}>
              <OverFlowContainer flexShrink={0}>
                <Icon ref={iconRef} src={icon} />
              </OverFlowContainer>
              <Watermark src={watermark} />
              <InfoTextContainer ref={textRef}>
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
import React, { useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';

import {
  Container,
  Galaxy,
  GalaxyContainer,
  Ministry,
  MinistryContainer,
  Rokcc,
  ZFlip,
  ZFlipContainer
} from './WorkExperience.style';
import { TitleText, OverFlowContainer } from 'components/commons/styles';
import { InfoText } from 'components/commons/components';

function WorkExperience() {
  const { t } = useTranslation("workExperience");
  const titleTextRef = useRef(null);
  const galaxyRef = useRef(null);
  const zFlipRef = useRef(null);
  const zFlipContainerRef = useRef(null);
  const samsungInfoTitleRef = useRef(null);
  const samsungInfoSubRef = useRef(null);
  const samsungInfoPeriodRef = useRef(null);
  const samsungInfoRegionRef = useRef(null);
  const ministryRef = useRef(null);
  const rokccRef = useRef(null);
  const rokccInfoTitleRef = useRef(null);
  const rokccInfoSubRef = useRef(null);
  const rokccInfoPeriodRef = useRef(null);
  const rokccInfoRegionRef = useRef(null);


  useEffect(() => {
    const tl = gsap.timeline({
        scrollTrigger:
        {
          trigger: titleTextRef.current,
          start: "bottom bottom",
        }
      }
    );
    
    tl.from(titleTextRef.current, {
      ease: "power3.out",
      yPercent: 200,
      duration: 1, 
    }).from(galaxyRef.current, {
      ease: "power3.out",
      yPercent: 200,
      duration: 1, 
    }, "<0.3").from(zFlipContainerRef.current, {
      ease: "power3.out",
      yPercent: 400,
      duration: 2,
    }, "<0").from(zFlipRef.current, {
      ease: "power3.out",
      scale: 1.2,
      duration: 2,
    }, "<0")

    const tl2 = gsap.timeline({
      scrollTrigger:
      {
        trigger: samsungInfoTitleRef.current,
        start: "bottom bottom",
      }
    });
    tl2.from(samsungInfoTitleRef.current, {
      ease: "power3.out",
      yPercent: 200,
      duration: 1, 
    } ).from(samsungInfoSubRef.current, {
      ease: "power3.out",
      yPercent: 200,
      duration: 1, 
    }, "<0.3").from(samsungInfoPeriodRef.current, {
      ease: "power3.out",
      yPercent: 200,
      duration: 2,
    }, "<0.3").from(samsungInfoRegionRef.current, {
      ease: "power3.out",
      yPercent: 200,
      duration: 2,
    }, "<0");

    gsap.from(ministryRef.current, {
      ease: "power3.out",
      yPercent: 200,
      duration: 1, 
      scrollTrigger:
      {
        trigger: ministryRef.current,
        start: "top bottom",
      }
    });
    
    const tl3 = gsap.timeline({
      scrollTrigger:
      {
        trigger: rokccInfoTitleRef.current,
        start: "bottom bottom",
      }
    });
    tl3.from(rokccInfoTitleRef.current, {
      ease: "power3.out",
      yPercent: 200,
      duration: 1, 
    }).from(rokccInfoSubRef.current, {
      ease: "power3.out",
      yPercent: 200,
      duration: 1, 
    }, "<0.3").from(rokccInfoPeriodRef.current, {
      ease: "power3.out",
      yPercent: 200,
      duration: 2,
    }, "<0.3").from(rokccInfoRegionRef.current, {
      ease: "power3.out",
      yPercent: 200,
      duration: 2,
    }, "<0");
    
    gsap.to(rokccRef.current,
      { 
        y: -80,
        scrollTrigger:
        {
          trigger: rokccRef.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
        }
      });
  }, []);

  return (
    <Container>
      <OverFlowContainer>
        <TitleText ref={titleTextRef}>Work Experience</TitleText>
      </OverFlowContainer>
      <ZFlipContainer ref={zFlipContainerRef}>
        <ZFlip ref={zFlipRef} src={require('assets/photos/zflip.jpeg')}/>
      </ZFlipContainer>
      <GalaxyContainer>
        <Galaxy ref={galaxyRef} src={require('assets/photos/galaxy.png')}/>
      </GalaxyContainer>
     <InfoText
        title={{ref: samsungInfoTitleRef, text: t("samsungTitle")}}
        sub={{ref: samsungInfoSubRef, text: t("samsungSub")}}
        period={{ref: samsungInfoPeriodRef, text: t("samsungPeriod")}}
        region={{ref: samsungInfoRegionRef, text: t("samsungRegion")}}
      />
        <MinistryContainer>
          <Ministry ref={ministryRef} src={require('assets/photos/ministry.png')}/>
        </MinistryContainer>
      <Rokcc ref={rokccRef} src={require('assets/photos/rokcc.jpeg')}/>
      <InfoText
        title={{ref: rokccInfoTitleRef, text: t("rokccTitle")}}
        sub={{ref: rokccInfoSubRef, text: t("rokccSub")}}
        period={{ref: rokccInfoPeriodRef, text: t("rokccPeriod")}}
        region={{ref: rokccInfoRegionRef, text: t("rokccRegion")}}
      />
    </Container>
  );
}

export default WorkExperience;
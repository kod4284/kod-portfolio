import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next';

import {
  Container,
  Galaxy,
  GalaxyContainer,
  Ministry,
  MinistryContainer,
  Rokcc,
  Zflip
} from './WorkExperience.style';
import { TitleText, OverFlowContainer } from 'components/commons/styles';
import { InfoText } from 'components/commons/components';

function WorkExperience() {
  const { t } = useTranslation("workExperience");
  const infoTitleRef = useRef(null);
  const infoSubRef = useRef(null);
  const infoPeriodRef = useRef(null);
  const infoRegionRef = useRef(null);

  return (
    <Container>
      <OverFlowContainer>
        <TitleText>Work Experience</TitleText>
      </OverFlowContainer>
      <OverFlowContainer>
        <Zflip src={require('assets/photos/zflip.jpeg')}/>
      </OverFlowContainer>
      <GalaxyContainer>
        <Galaxy src={require('assets/photos/galaxy.png')}/>
      </GalaxyContainer>
      <InfoText
        title={{ref: infoTitleRef, text: t("samsungTitle")}}
        sub={{ref: infoSubRef, text: t("samsungSub")}}
        period={{ref: infoPeriodRef, text: t("samsungPeriod")}}
        region={{ref: infoRegionRef, text: t("samsungRegion")}}
      />
      <MinistryContainer>
        <Ministry src={require('assets/photos/ministry.png')}/>
      </MinistryContainer>
      <Rokcc src={require('assets/photos/rokcc.jpeg')}/>
      <InfoText
        title={{ref: infoTitleRef, text: t("rokccTitle")}}
        sub={{ref: infoSubRef, text: t("rokccSub")}}
        period={{ref: infoPeriodRef, text: t("rokccPeriod")}}
        region={{ref: infoRegionRef, text: t("rokccRegion")}}
      />
    </Container>
  );
}

export default WorkExperience;

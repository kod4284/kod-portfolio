import React from 'react'

import {
  TextContainer,
  OverFlowContainer,
  InfoTitleText,
  InfoSubText,
  InfoDetailText,
  DetailTextContainer
} from './styles';

interface InfoTextProps {
  title: {
    ref: React.RefObject<HTMLHeadingElement>,
    text: string,
  },
  sub: {
    ref: React.RefObject<HTMLHeadingElement>,
    text: string,
  },
  period: {
    ref: React.RefObject<HTMLHeadingElement>,
    text: string,
  }
  region: {
    ref: React.RefObject<HTMLHeadingElement>,
    text: string,
  }
}

export function InfoText({
  title,
  sub,
  period,
  region
}: InfoTextProps) {
  return (
    <TextContainer>
      <OverFlowContainer>
        <InfoTitleText ref={title.ref}>{title.text}</InfoTitleText>
      </OverFlowContainer>
      <OverFlowContainer>
        <InfoSubText ref={sub.ref}>{sub.text}</InfoSubText>
      </OverFlowContainer>
      <OverFlowContainer>
        <DetailTextContainer>
          <InfoDetailText ref={period.ref}>{period.text}</InfoDetailText>
          <InfoDetailText ref={region.ref}>{region.text}</InfoDetailText>
        </DetailTextContainer>
      </OverFlowContainer>
    </TextContainer> 
  );
}

export {}

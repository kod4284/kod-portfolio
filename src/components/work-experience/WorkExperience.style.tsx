import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const GalaxyContainer = styled.div`
  margin: 4rem 0 14rem 0;
  display: flex;
  justify-content: center;
  overflow: hidden;
  @media(max-width: 768px) {
    margin: 0rem 0 9rem 0;
    width: 32rem;
  }
`;

export const GalaxyPositionContainer = styled.div`
  width: 57rem;
  @media(max-width: 768px) {
    width: 31rem;
  }
`;

export const Galaxy = styled.img`
  width: 50rem;
  z-index: 4;
  @media(max-width: 768px) {
    width: 29rem;
  }
`;

export const ZFlip = styled.img`
  z-index: 2;
  width: 22rem;
  @media(max-width: 768px) {
    width: 12rem;
  }
`;

export const ZFlipContainer = styled.div`
  overflow: hidden;
  position: absolute;
  top: 21rem;
  right: 8rem;
  @media(max-width: 768px) {
    width: 12rem;
    top: 15.7rem;
    right: 0.7rem;
  }
`;

export const Ministry = styled.img`
  width: 60rem;
  z-index: 1;
  @media(max-width: 768px) {
    width: 35rem;
  }
`;

export const MinistryContainer = styled.div`
  margin: 15rem 0 6rem 0;
  display: flex;
  z-index: 4;
  justify-content: center;
  @media(max-width: 768px) {
    margin: 6rem 0 3rem 0;
  }
`

export const Rokcc = styled.img`
  position: absolute;
  border-radius: 100%;
  width: 26rem;
  top: 95rem;
  right: 1rem;
  opacity: 35%;
  z-index: 0;
  @media(max-width: 768px) {
    width: 13rem;
    top: 63rem;
    right: 0rem;
  }
`;

export const DetailTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export {};
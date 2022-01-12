import styled from 'styled-components';

export const Container = styled.div`
  > h1 {
    padding-left: 1rem;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Icon = styled.img`
  margin-right: 2rem;
  border-radius: 1rem;
  width: 20rem;
  @media(max-width: 768px) {
    width: 10rem;
    margin-right: 1rem;
  }
`;

export const Watermark = styled.img`
  position: absolute;
  top: 1rem;
  right: 1rem;
  margin-right: 2rem;
  width: 28rem;
  opacity: 25%;
  @media(max-width: 768px) {
    width: 14rem;
    margin-right: 1rem;
  }
`;

export const InfoTextContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
`;

export const InfoTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InfoDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const InfoContentContainer = styled.div`
  margin: 2rem 1rem 2rem 1rem;
  display: flex;
  position: relative;
  @media (max-width: 768px) {
    margin: 0rem 1rem 2rem 1rem;
    :last-child {
      margin-bottom: 0;
    }
  }
`

export const InfoTitleText = styled.h1`
  font-family: 'NanumSquareOTF-Regular';
  font-weight: 700;
  font-size: 3rem;
  @media(max-width: 768px) {
    font-size: 1.7rem;
  }
`;

export const InfoSubText = styled.h2`
  font-family: 'NanumSquareOTF-Regular';
  font-weight: 100;
  font-size: 2.5rem;
  letter-spacing: -0.5px;
  @media(max-width: 768px) {
    font-size: 1.3rem;
    letter-spacing: -0.5px;
  }
`;

export const InfoDetailText = styled.h3`
  font-family: 'NanumSquareOTF-light';
  font-weight: 100;
  font-size: 2rem;
  @media(max-width: 768px) {
    font-size: 1rem;
    letter-spacing: -0.5px;
  }
`;

export {}
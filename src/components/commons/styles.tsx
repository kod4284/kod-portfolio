import styled from "styled-components";

export const TitleText = styled.h1`
  font-family: 'Moon2.0-Regular';
  font-weight: 100;
  margin-top: 8rem;
  margin-bottom: 3rem;
  font-size: 5rem;
  @media(max-width: 768px) {
    font-size: 3rem;
  }
`
export const TitleImage = styled.img`
  width: 53rem;
  border-radius: 2rem;
  @media(max-width: 768px) {
    width: 34rem;
  }
`

export const InfoTitleText = styled.h1`
  font-family: 'NanumSquareOTF-Regular';
  font-weight: 700;
  font-size: 3rem;
  @media(max-width: 768px) {
    font-size: 2rem;
  }
`
export const InfoSubText = styled.h2`
  font-family: 'NanumSquareOTF-Regular';
  font-weight: 100;
  font-size: 2.5rem;
  letter-spacing: -0.5px;
  @media(max-width: 768px) {
    font-size: 1.5rem;
    letter-spacing: -0.5px;
  }
`
export const InfoDetailText = styled.h3`
  font-family: 'NanumSquareOTF-light';
  font-weight: 700;
  font-size: 2rem;
  @media(max-width: 768px) {
    font-size: 1.3rem;
    letter-spacing: -0.5px;
  }
`
export const OverFlowContainer = styled.div`
  overflow: hidden;
`
export const ImgOverFlowContainer = styled.div`
  margin-bottom: 1rem;
  border-radius: 2rem;
  -webkit-appearance: none;
  -webkit-box-shadow: 3px 3px 8px 1px #222;
  box-shadow: 3px 3px 8px 1px #222;
  overflow: hidden;
  transform: translateZ(0);
`
export const TextContainer = styled.div`
  margin: 5rem 7% 4rem 7%;
  display: flex;
  height: 11rem;
  flex-direction: column;
  justify-content: space-around;
  @media(max-width: 768px) {
    margin: 5rem 0 4rem 0;
    height: 9rem;
  }
`

export const DetailTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export {}
import styled from "styled-components";

export const Container = styled.div`
  padding-top: 13rem;
  margin: auto;
  width: 768px;
  @media(max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 8rem;
    width: auto;
  }
`;

export const IntroContainer = styled.div`
`

export const IntroTextContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const IntroText = styled.h1`
  vertical-align: middle;
  font-size: 8rem;
  font-weight: 600;
  padding-bottom: 4rem;
  @media(max-width: 768px) {
    font-size: 4.5rem;
    font-weight: 600;
  }
`

export const Cup = styled.img`
  width: 15rem;
  margin-left: 8rem;
  margin-right: 8rem;
  border-radius: 2rem;
  filter: drop-shadow(5px 5px 5px #222);
  @media(max-width: 768px) {
    width: 10rem;
    margin-left: 0rem;
    margin-right: 2rem;
  }
`

export const AboutMeContainer = styled.div`
  display: block;
  text-align: left;
  padding-left: 1rem;
  padding-right: 1rem;
`

export const TitleText = styled.h1`
  font-family: 'Moon2.0-Regular';
  font-weight: 100;
  font-size: 5rem;
  padding-top: 8rem;
  padding-bottom: 3rem;
  @media(max-width: 768px) {
    font-size: 3rem;
  }
`

export const ContentText = styled.p`
  font-family: "NanumSquareOTF-Light";
  padding: 2rem 1rem 2rem 1rem;
  font-size: 2.5rem;
`

export const GeneKranz = styled.img`
  margin-bottom: 1rem;
  width: 53rem;
  border-radius: 2rem;
  filter: drop-shadow(5px 5px 5px #222);
  @media(max-width: 768px) {
    width: 34rem;
  }
`

export const PhotoContainer = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const QuoteText = styled.i`
  margin-top: 0.3rem;
  font-family: "NanumSquareOTF-Light";
  font-size: 2rem;
`
export const NameText = styled.text`
  margin-top: 0.6rem;
  font-family: "NanumSquareOTF-Light";
  font-size: 1.5rem;
`

export {};
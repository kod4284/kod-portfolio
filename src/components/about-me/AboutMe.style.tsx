import styled from "styled-components";

export const Container = styled.div`
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
  width: fit-content;
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
  -webkit-appearance: none;
  -webkit-box-shadow: 3px 3px 8px 1px #222;
  box-shadow: 3px 3px 8px 1px #222;
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

export const ContentText = styled.p`
  font-family: "NanumSquareOTF-Light";
  padding: 2rem 1rem 2rem 1rem;
  font-size: 2.5rem;
`

export const GeneKranz = styled.img`
  width: 53rem;
  border-radius: 2rem;
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

export const QuoteText = styled.div`
  font-style: italic;
  margin-top: 0.3rem;
  font-family: "NanumSquareOTF-Light";
  font-size: 2rem;
`
export const NameText = styled.div`
  margin-top: 0.6rem;
  font-family: "NanumSquareOTF-Light";
  font-size: 1.5rem;
`


export {};
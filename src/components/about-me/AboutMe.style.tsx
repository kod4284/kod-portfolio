import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IntroContainer = styled.div`
  display: inline-block;
  #bold {
    margin-left: 3.5rem;
    font-family: "OstrichSans-Bold";
    font-weight: 100;
    font-size: 16rem;
    @media(max-width: 768px) {
      margin-left: 1.5rem;
      height: 7rem;
      font-size: 7.5rem;
    }
  }
`

export const IntroTextContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const IntroText = styled.h1`
  display: inline-block;
  font-family: "OstrichSans-Black";
  vertical-align: middle;
  font-size: 11rem;
  font-weight: 600;
  height: 14rem;
  width: fit-content;
  letter-spacing: -1px;
  padding-bottom: 4rem;
  @media(max-width: 768px) {
    font-size: 5.6rem;
    height: 7.5rem;
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
  @media(max-width: 768px) {
    font-size: 2rem;
    padding: 0rem 0rem 2rem 0rem;
  }
`

export const GeneKranz = styled.img`
  width: 53rem;
  border-radius: 2rem;
  @media(max-width: 768px) {
    width: 34rem;
  }
`

export const PhotoContainer = styled.div`
  margin-top: 1rem;
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
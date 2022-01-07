import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Gatech = styled.img`
  width: 53rem;
  border-radius: 2rem;
  @media(max-width: 768px) {
    width: 34rem;
  }
`;

export const GatechLogo = styled.img`
  position: absolute;
  top: 10rem;
  right: 1rem;
  width: 25rem;
  @media(max-width: 768px) {
    width: 13rem;
    top: 10rem;
    right: -1rem;
  }
`;

export const ImgContainer = styled.div`
  padding-top: 3rem;
  display: flex;
  justify-content: center;
`;

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
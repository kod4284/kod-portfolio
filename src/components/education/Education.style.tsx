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
    top: 14rem;
    right: -1rem;
  }
`;

export const ImgContainer = styled.div`
  padding-top: 3rem;
  display: flex;
  justify-content: center;
`;

export {}
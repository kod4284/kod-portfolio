import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Gatech = styled.img`
  object-fit: cover;
  width: 45rem;
  height: 50rem;
  border-radius: 2rem;
  @media(max-width: 768px) {
    width: 30rem;
    height: 40rem;
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
  display: flex;
  justify-content: center;
`;

export {}
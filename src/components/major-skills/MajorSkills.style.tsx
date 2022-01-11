import styled from "styled-components";

export const Container = styled.div`
  > h1 {
    margin-left: 1rem;
  }
`;

export const Icon = styled.img`
  margin-right: 2rem;
  border-radius: 1rem;
  width: 15rem;
  @media(max-width: 768px) {
    width: 6rem;
    margin-right: 1rem;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  flex: 1 0 21%;
  padding: 0.5rem;
  justify-content: space-around;
  align-items: center;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2rem 0 2rem;
  align-items: flex-end;
`;

export const Text = styled.h2`
  margin-top: 6rem;
  margin-right : 3rem;
  font-size: 4rem;
  @media(max-width: 768px) {
    margin-top: 2rem;
    font-size: 2rem;
  }
`;

export {}
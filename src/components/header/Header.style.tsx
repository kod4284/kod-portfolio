import styled from 'styled-components';


export const Container = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 2.8rem;
  font-family: "Moon2.0-Regular";
  @media (max-width: 768px){
    font-size: 2.3rem;
  }
`;

export {};
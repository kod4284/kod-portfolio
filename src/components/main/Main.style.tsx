import styled from 'styled-components';

export const MainContainer = styled.div`
  padding-top: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: #181418;
  color: #F5F3F6;
`;

export const Container = styled.div`
`;


export const ContentContainer = styled.div`
  padding-top: 13rem;
  margin: auto;
  width: 768px;
  @media(max-width: 768px) {
    width: 100%;
    padding: 0 1rem 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 8rem;
  }
`;

export {};
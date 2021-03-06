import styled from 'styled-components';

export const Container = styled.div<{height: number}>`
  height: ${(props) => props.height - 30 + "px"};
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const IntroContainer = styled.div`
  @media (max-width: 768px) {
    flex-direction: column;
    *:first-child {
      align-self: flex-start;
      text-align: left;
    }
    *:last-child {
      text-align: right;
      align-self: flex-end;
    }
    padding-left: 0;
    padding-right: 0;
  }
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  align-content: center;
`;

export const MiddleContainer = styled.div`
  @media (max-width: 768px) {
    flex-direction: column;
    *:first-child {
      text-align: right;
      align-self: flex-end;
    }
    *:last-child {
      text-align: left;
      align-self: flex-start;
    }
  }
  width: 100%;
  text-align: right;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.h2`
  width: 35rem;
  @media (max-width: 768px) {
    font-size: 4.4rem;
    padding: 1rem;
  }
  @media(max-height: 550px) {
    font-size: 3.8rem;
    padding: 0.2rem;
  }
  display: block;
  padding: 5rem;
  font-size: 4.8rem;
  font-weight: 100;
`;

export const ArrowContainer = styled.div`
  display: flex;
  height: 4rem;
  justify-content: center;
  svg {
    width: 2rem;
    fill: #F5F3F6;
  }
`;

export const Keyboard = styled.img`
  @media (max-width: 768px) {
    width: calc(100% + 4rem);
    margin-left: calc(2rem);
    margin-right: calc(2rem);
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  width: 40rem;
`;

export {};
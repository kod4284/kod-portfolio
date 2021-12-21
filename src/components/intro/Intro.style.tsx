import styled from 'styled-components';

export const Container = styled.div`
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
    padding: 1rem;
  }
  display: block;
  padding: 5rem;
  font-size: 4.8rem;
  font-weight: 100;
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
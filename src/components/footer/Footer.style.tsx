import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Divider = styled.div`
  font-size: 8rem;
  letter-spacing: -1rem;
`;

export const Icon = styled.img`
  margin: 1rem;
  width: 6rem;
`;

export const IconContainer = styled.div`
  width: 100%;
  /* height: 100%; */
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  
`;

export const Dock = styled.div`
  padding: 0 0.5rem 0 0.5rem;
  background: #383237;
  border-radius: 1.8rem;
  border-color: #AAA5AA;
  border-style: solid;
  border-width: 1.5px;
  width: 100%;
`;

export {}
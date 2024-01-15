import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tab = styled.div`
  margin-top: 10px;
  padding: 11px 0 15px;
  text-align: center;

  font-weight: bold;
  font-size: 15px;

  outline: 0;
  cursor: pointer;

  color: var(--eczabyte);
  border-bottom: 2px solid var(--eczabyte);

  &:hover {
    background-color: var(--eczabyte-dark-hover);
    transition: background-color ease-in 0.4s;
  }
  transition: background-color ease-out 0.4s;
`;

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;

  flex-shrink: 0;
`;

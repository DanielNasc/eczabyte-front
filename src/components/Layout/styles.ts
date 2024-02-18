import styled, { css } from 'styled-components';
import { HomeCircle } from '../../styles/Icons';

export const Container = styled.div`
  background: var(--primary);
  position: relative;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  width: 100%;
  height: 50px;
  border-radius: 3px;
  transition-duration: 500ms;
  gap: 5px;
  &:hover {
    background-color: blue;
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  margin: 0 auto;

  width: min(601px, 100%);

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;

const iconCSS = css`
  width: 19px;
  height: 19px;
`;
export const HomeCircleIcon = styled(HomeCircle)`
  ${iconCSS}
`;

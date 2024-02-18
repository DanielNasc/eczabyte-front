import styled, { css } from 'styled-components';

import {
  ArrowLeft,
  Home,
  Search,
  Notifications,
  Email,
} from '../../styles/Icons';

export const LogoTypography = styled.p`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  color: #1976d2;
  font-weight: bolder;
  font-size: 40px;
  border-radius: 3px;
  padding: 0px 8px;
`;

export const BackIcon = styled(ArrowLeft)`
  width: 24px;
  height: 24px;

  fill: var(--eczabyte);
`;
const iconCSS = css`
  width: 31px;
  height: 31px;
  cursor: pointer;

  fill: var(--gray);

  &:hover,
  &:active {
    fill: var(--eczabyte);
  }
`;
export const HomeIcon = styled(Home)`
  ${iconCSS}
`;
export const SearchIcon = styled(Search)`
  ${iconCSS}
`;
export const BellIcon = styled(Notifications)`
  ${iconCSS}
`;
export const EmailIcon = styled(Email)`
  ${iconCSS}
`;
export const ProfileInfo = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 19px;
  }
  > span {
    font-size: 15px;
    color: var(--gray);
  }
`;
export const ProfilePage = styled.div``;
export const BottomMenu = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;

  background: var(--primary);
  width: 100%;
  border-top: 1px solid var(--outline);

  display: flex;
  justify-content: space-between;
  padding: 8px min(46px, max(10vw, 10px));

  @media (min-width: 500px) {
    display: none;
  }
`;

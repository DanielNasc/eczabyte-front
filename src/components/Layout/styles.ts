import styled, { css } from 'styled-components';
import {
  MoreHoriz,
  MessageSquare,
  Bookmark,
  Bell,
  Hash,
  HomeAlt,
  Person,
  Settings,
  LogOut,
} from '../../styles/Icons';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background: var(--primary);
  position: relative;
`;

export const Button = styled.button`
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 14px;
  width: 100%;
  padding: 20px;
  height: 50px;
  border-radius: 25px;
  transition-duration: 500ms;
  gap: 5px;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid #555;
    background-color: var(--primary);
    cursor: pointer;
  }
`;

export const CreateTweetBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  background-color: blue;
  padding: 10px 20px;
  margin: 25px 0;
  width: 100%;
  border-radius: 25px;
  transition-duration: 500ms;
  border: 1px solid transparent;
  &:hover {
    background-color: black;
    cursor: pointer;
    border: 1px solid #555;
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  margin: 0 auto;

  width: min(601px, 100%);

  display: flex;
  flex-direction: column;
  justify-content: center;

  /* @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  } */
`;

const iconCSS = css`
  width: 19px;
  height: 19px;
`;
export const HomeAltIcon = styled(HomeAlt)`
  ${iconCSS}
`;
export const HashIcon = styled(Hash)`
  ${iconCSS}
`;
export const MessageSquareIcon = styled(MessageSquare)`
  ${iconCSS}
`;
export const BookmarkIcon = styled(Bookmark)`
  ${iconCSS}
`;
export const BellIcon = styled(Bell)`
  ${iconCSS}
`;
export const MoreHorizIcon = styled(MoreHoriz)`
  ${iconCSS}
`;
export const PersonIcon = styled(Person)`
  ${iconCSS}
`;
export const SettingsIcon = styled(Settings)`
  ${iconCSS}
`;
export const LogoutIcon = styled(LogOut)`
  ${iconCSS}
`;
export const LinkCustom = styled(Link)`
  text-decoration: none;
`;

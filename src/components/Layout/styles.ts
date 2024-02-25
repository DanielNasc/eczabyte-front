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
} from '../../styles/Icons';

export const Container = styled.div`
  background: var(--primary);
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;

  @media (min-width: 680px) {
    grid-template-columns: 1fr auto 1fr;
  }
`;

export const Wrapper = styled.div`
  height: 100%;
  margin: 0 auto;
  width: min(800px, 100%);

  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;

export const AsideNav = styled.aside`
  display: none;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  row-gap: 10px;
  align-items: start;
  position: sticky;
  max-height: 100vh;
  top: 0;
  left: 0;
  width: 220px;
  padding: 0 20px;
  border-right: 1px solid #1e1e1e;

  @media (min-width: 680px) {
    display: flex;
  }
  @media (min-width: 1080px) {
    width: 280px;
  }
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
    background-color: black;
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

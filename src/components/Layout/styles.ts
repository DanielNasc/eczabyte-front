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

export const NewTweetModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-height: 100vh;
  max-width: 100vw;
  z-index: 21;
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 20px;
  backdrop-filter: blur(5px);
`;

export const NewTweetForm = styled.form`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 70px 120px;
  background-color: #000;
  border-radius: 7px;
  gap: 30px;
`;

export const ModalTitle = styled.h3`
  width: fit-content;
  font-size: 1.5em;
  font-weight: 700;
`;

export const ModaTextarea = styled.textarea`
  border: 1px solid #1e1e1e;
  padding: 10px;
  border-radius: 3px;
  font-size: 0.7em;
  resize: none;
`;

export const AsideBar = styled.aside`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  row-gap: 10px;
  align-items: start;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 30px;
  border-right: 1px solid #1e1e1e;
`;

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid var(--outline);
`;

export const FooterMsg = styled.p`
  font-weight: 800;
  color: #999;
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

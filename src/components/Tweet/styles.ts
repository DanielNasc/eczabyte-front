import styled, { css } from 'styled-components';
import { Chat, Favorite, Share } from '../../styles/Icons';

export const Retweeted = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  font-size: 13px;
  color: var(--gray);
`;

export const Body = styled.div`
  display: flex;
  margin-top: 3px;

  position: relative;
`;

export const Avatar = styled.div`
  width: 49px;
  height: 49px;

  border-radius: 50px;
  flex-shrink: 0;
  background: var(--gray);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 2px;
`;

export const Dot = styled.div`
  background: var(--gray);
  width: 2px;
  height: 2px;
  margin: 0 10px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding-left: 8px;

  font-size: 15px;
  white-space: nowrap;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > strong {
    margin-right: 5px;
  }

  > div p,
  time {
    color: var(--gray);
  }

  > strong,
  p {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const Description = styled.p`
  font-size: 15px;
  margin-top: 18px;
  color: #adadad;
`;

export const ImageContent = styled.div`
  margin-top: 12px;
  width: 100%;
  height: min(285px, max(175px, 41vw));

  background: var(--outline);
  border-radius: 7px;

  cursor: pointer;
  &:hover {
    opacity: 0.7;
    transition: opacity ease-in 0.4s;
  }
  /* opacity: 1; */
  transition: opacity ease-out 0.4s;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 11px auto 0;
  padding: 10px 0;
  width: 100%; /* mobile */

  @media (min-width: 330px) {
    width: 63%;
  }

  > div {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
      transition: opacity ease-in 0.3s;
    }
    transition: opacity ease-out 0.3s;
  }
`;

const iconCSS = css`
  width: 19px;
  height: 19px;
`;
export const CommentIcon = styled(Chat)`
  ${iconCSS}
`;
export const RetweetIcon = styled(Share)`
  ${iconCSS}
`;
export const LikeIcon = styled(Favorite)`
  ${iconCSS}
`;

export const ShareIcon = styled(Share)`
  width: 16px;
  height: 16px;

  margin-right: 9px;

  > path {
    fill: var(--gray);
  }
`;

export const Status = styled.a`
  display: flex;
  align-items: center;

  font-size: 14px;

  > svg {
    margin-right: 5px;
  }

  &:nth-child(1) {
    &,
    > svg path {
      color: var(--gray);
    }
  }
  &:nth-child(2) {
    color: var(--share);

    > svg path {
      fill: var(--share);
    }
  }
  &:nth-child(3) {
    color: var(--like);

    > svg path {
      fill: var(--like);
    }
  }
`;

export const TweetContainer = styled.div`
  padding: 30px 0px;
  border: 1px solid #1e1e1e;
  border-left: 0;
  border-right: 0;
  border-top: 0;

  .tweet-img {
    display: flex;
    width: 49px;
    height: 49px;
    border-radius: 100%;
    object-fit: cover;
  }
`;

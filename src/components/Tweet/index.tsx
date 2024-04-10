import React, { useState } from 'react';

import {
  Body,
  CommentIcon,
  Content,
  Description,
  Dot,
  Header,
  Icons,
  ImageContent,
  LikeIcon,
  RetweetIcon,
  Retweeted,
  ShareIcon,
  Status,
  TweetContainer,
} from './styles';
import TweetInterface from '../../core/tweet.interface';

function formatarDataParaPadraoBR(data: Date) {
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();

  return `${dia}/${mes}/${ano}`;
}


const Tweet: React.FC<TweetInterface> = (tweet: TweetInterface) => {
  const [showComents, setShowComents] = useState<boolean>(false);

  return (
    <TweetContainer id={tweet.id.toString()}>
      <Retweeted>
        <ShareIcon />
        Você compartilhou
      </Retweeted>
      <Body>
        <Content>
          <div
            style={{
              display: 'flex',
            }}
          >
            <img
              src="https://source.unsplash.com/random/?profile"
              className="tweet-img"
            />

            <Header>
              <strong>{tweet.name}</strong>
              <div>
                <p>@{tweet.user}</p>
                <Dot />
                <time>{formatarDataParaPadraoBR(new Date(tweet.date))}</time>
              </div>
            </Header>
          </div>
          <Description>{tweet.text}</Description>
          {showComents && <ImageContent />}
          <Icons>
            <Status
              href={`#${tweet.id.toString()}`}
              onClick={() => setShowComents((prev) => !prev)}
            >
              <CommentIcon /> {tweet.comments}K
            </Status>
            <Status>
              <RetweetIcon /> {tweet.retweets}K
            </Status>
            <Status>
              <LikeIcon /> {tweet.likes}K
            </Status>
          </Icons>
        </Content>
      </Body>
    </TweetContainer>
  );
};

export default Tweet;

import React from 'react';

import { Avatar, Body, CommentIcon, Container, Content, Description, Dot, Header, Icons, ImageContent, LikeIcon, RetweetIcon, Retweeted, ShareIcon, Status } from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
        <Retweeted>
            <ShareIcon />
            Você compartilhou
        </Retweeted>
        
        <Body>
            <Avatar />
            
            <Content>
                <Header>
                    <strong>Eczabyte</strong>
                    <span>@eczabyte</span>
                    <Dot />
                    <time>15 de jan</time>
                </Header>
                <Description>Hello World!</Description>
                <ImageContent />
                <Icons>
                    <Status><CommentIcon /> 4K</Status>
                    <Status><RetweetIcon /> 4K</Status>
                    <Status><LikeIcon /> WW</Status>
                </Icons>
            </Content>
        </Body>
    </Container>
  );
}

export default Tweet;

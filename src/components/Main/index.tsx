import React from 'react';
import { BackIcon, BellIcon, BottomMenu, Container, EmailIcon, Header, HomeIcon, ProfileInfo, SearchIcon } from './styles';
import ProfilePage from '../ProfilePage';

const Main: React.FC = () => {
  return (
    <Container>
        <Header>
            <button>
                <BackIcon />
            </button>
            <ProfileInfo>
                <strong>Usuário ユーザー 👤</strong>
                <span>666 Tweets</span>
            </ProfileInfo>
            <ProfilePage></ProfilePage>
            <BottomMenu>
                <HomeIcon className="active" />
                <SearchIcon />
                <BellIcon />
                <EmailIcon />
            </BottomMenu>
        </Header>
    </Container>
  );
}

export default Main;

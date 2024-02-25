import GlobalStyles from '../../styles/GlobalStyles';
import {
  CreateTweetBtn,
  BellIcon,
  BookmarkIcon,
  Button,
  Container,
  HashIcon,
  MessageSquareIcon,
  MoreHorizIcon,
  PersonIcon,
  SettingsIcon,
  Wrapper,
  HomeAltIcon,
  AsideNav,
} from './styles';

import {
  BottomMenu,
  EmailIcon,
  HomeIcon,
  SearchIcon,
} from '../../pages/Home/styles';
import Header from '../Header';
import { Height } from '@styled-icons/material-outlined';

type LayoutType = {
  children: React.ReactNode;
  hasBackPage?: boolean;
};

function Layout({ children, hasBackPage = true }: LayoutType) {
  return (
    <>
      <Container>
        <AsideNav>
          <Button>
            <HomeAltIcon />
            <p>Home</p>
          </Button>
          <Button>
            <HashIcon />
            <p>Explore</p>
          </Button>
          <Button>
            <BellIcon />
            <p>Notifications</p>
          </Button>
          <Button>
            <MessageSquareIcon />
            <p>Messages</p>
          </Button>
          <Button>
            <BookmarkIcon />
            <p>Bookmarks</p>
          </Button>
          <Button>
            <PersonIcon />
            <p>Profile</p>
          </Button>
          <Button>
            <MoreHorizIcon />
            <p>More</p>
          </Button>
          <Button>
            <SettingsIcon />
            <p>Settings</p>
          </Button>
          <CreateTweetBtn>Tweet</CreateTweetBtn>
        </AsideNav>
        <Wrapper>
          <Header hasBackPage={hasBackPage}>
            <strong>Eczabyte ユーザー 👤</strong>
            <span>666 Tweets</span>
          </Header>
          {children}
          <footer
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '20px 0',
              borderBottom: '1px solid var(--outline)',
            }}
          >
            <p style={{ fontWeight: '800', color: '#999' }}>
              Develop By DLL-MG
            </p>
          </footer>
          <BottomMenu>
            <HomeIcon className="active" />
            <SearchIcon />
            <BellIcon />
            <EmailIcon />
          </BottomMenu>
        </Wrapper>
        <div></div>
      </Container>
      <GlobalStyles />
    </>
  );
}

export default Layout;

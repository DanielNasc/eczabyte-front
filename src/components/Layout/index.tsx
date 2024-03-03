import GlobalStyles from '../../styles/GlobalStyles';
import {
  CreateTweetBtn,
  BellIcon,
  Button,
  Container,
  PersonIcon,
  Wrapper,
  HomeAltIcon,
  LogoutIcon,
  LinkCustom,
} from './styles';

import {
  BottomMenu,
  EmailIcon,
  HomeIcon,
  SearchIcon,
} from '../../pages/Home/styles';
import Header from '../Header';

type LayoutType = {
  children: React.ReactNode;
  hasBackPage?: boolean;
};

function Layout({ children, hasBackPage = true }: LayoutType) {
  return (
    <>
      <Container>
        <aside
          style={{
            display: 'flex',
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
            rowGap: '10px',
            alignItems: 'start',
            position: 'fixed',
            top: '0',
            left: '0',
            padding: '0 30px',
            borderRight: '1px solid #1e1e1e',
          }}
        >
          <LinkCustom to="/">
            <Button>
              <HomeAltIcon />
              <p>Home</p>
            </Button>
          </LinkCustom>
          {/* <Button>
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
          </Button> */}
          <LinkCustom to="/profile">
            <Button>
              <PersonIcon />
              <p>Profile</p>
            </Button>
          </LinkCustom>
          {/* <Button>
            <MoreHorizIcon />
            <p>More</p>
          </Button> */}
          {/* <Button>
            <SettingsIcon />
            <p>Settings</p>
          </Button> */}
          <LinkCustom to="/login">
            <Button>
              <LogoutIcon />
              <p>Log Out</p>
            </Button>
          </LinkCustom>
          <CreateTweetBtn>Tweet</CreateTweetBtn>
        </aside>
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
      </Container>
      <GlobalStyles />
    </>
  );
}

export default Layout;

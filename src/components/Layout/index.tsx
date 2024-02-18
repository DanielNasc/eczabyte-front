import GlobalStyles from '../../styles/GlobalStyles';
import { Button, Container, Wrapper } from './styles';

import {
  BellIcon,
  BottomMenu,
  EmailIcon,
  HomeIcon,
  SearchIcon,
} from '../../pages/Home/styles';
import Header from '../Header';
import { HomeCircleIcon } from './styles';

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
            width: '180px',
            alignItems: 'start',
            position: 'fixed',
            top: '0',
            left: '0',
            borderRight: '1px solid #1e1e1e',
          }}
        >
          <Button>
            <HomeCircleIcon />
            <p>Home</p>
          </Button>
          <Button>Explore</Button>
          <Button>Notifications</Button>
          <Button>Messages</Button>
          <Button>Bookmarks</Button>
          <Button>Profile</Button>
          <Button>Settings</Button>
          <Button>Tweet</Button>
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

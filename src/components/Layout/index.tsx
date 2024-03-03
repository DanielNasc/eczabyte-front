import GlobalStyles from '../../styles/GlobalStyles';
import {
  CreateTweetBtn,
  Button,
  Container,
  PersonIcon,
  Wrapper,
  HomeAltIcon,
  AsideNav,
  SettingsIcon,
  Footer,
  FooterMsg,
  NewTweetModal,
  NewTweetForm,
  ModalTitle,
  ModaTextarea,
} from './styles';

import {
  BottomMenu,
  EmailIcon,
  HomeIcon,
  SearchIcon,
  BellIcon,
} from '../../pages/Home/styles';
import Header from '../Header';
import { useState } from 'react';

type LayoutType = {
  children: React.ReactNode;
  hasBackPage?: boolean;
  showHeader?: boolean;
  headerTitle?: string;
};

function Layout({
  children,
  hasBackPage = true,
  showHeader = true,
  headerTitle = '',
}: LayoutType) {
  const [addTweet, setAddTweet] = useState<boolean>(false);

  return (
    <>
      {addTweet && (
        <NewTweetModal
          onClick={() => {
            setAddTweet(false);
          }}
        >
          <NewTweetForm
            action="."
            method="post"
            onClick={(e) => e.stopPropagation()}
          >
            <ModalTitle>Novo Tweet</ModalTitle>
            <ModaTextarea
              rows={6}
              cols={50}
              id="tweet-message"
              placeholder="Use sua imaginação..."
            />
            <CreateTweetBtn
              style={{
                margin: 0,
                maxWidth: '140px',
              }}
            >
              Criar
            </CreateTweetBtn>
          </NewTweetForm>
        </NewTweetModal>
      )}
      <Container>
        <AsideNav>
          <Button>
            <HomeAltIcon />
            <p>Home</p>
          </Button>
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
          <Button>
            <PersonIcon />
            <p>Profile</p>
          </Button>
          {/* <Button>
            <MoreHorizIcon />
            <p>More</p>
          </Button> */}
          <Button>
            <SettingsIcon />
            <p>Settings</p>
          </Button>
          <CreateTweetBtn onClick={() => { setAddTweet(true); }}>Tweet</CreateTweetBtn>
        </AsideNav>
        <Wrapper>
          {showHeader && (
            <Header hasBackPage={hasBackPage}>
              {headerTitle ? (
                <strong>{headerTitle}</strong>
              ) : (
                <>
                  <strong>Eczabyte ユーザー 👤</strong>
                  <span>666 Tweets</span>
                </>
              )}
            </Header>
          )}
          {children}
          <Footer>
            <FooterMsg>Develop By DLL-MGV</FooterMsg>
          </Footer>
            {/* <footer
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px 0',
                borderBottom: '1px solid var(--outline)',
              }} ></ footer> */}
          <BottomMenu>
            <HomeIcon className="active" />
            <SearchIcon />
            <BellIcon />
            <EmailIcon />
          </BottomMenu>
          <div></div>
        </Wrapper>
        <div></div>
      </Container>
      <GlobalStyles />
    </>
  );
}

export default Layout;

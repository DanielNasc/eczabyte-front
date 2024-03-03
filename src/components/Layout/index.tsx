import GlobalStyles from '../../styles/GlobalStyles';
import {
  CreateTweetBtn,
  Button,
  Container,
  PersonIcon,
  Wrapper,
  HomeAltIcon,
  SettingsIcon,
  Footer,
  FooterMsg,
  NewTweetModal,
  NewTweetForm,
  ModalTitle,
  ModaTextarea,
  AsideBar,
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
import { Link } from 'react-router-dom';

type LayoutType = {
  children: React.ReactNode;
  hasBackPage?: boolean;
  showHeader?: boolean;
  showFooter?: boolean;
  headerTitle?: string;
  backTo?: string;
};

function Layout({
  children,
  hasBackPage = true,
  showHeader = true,
  showFooter = true,
  headerTitle = '',
  backTo = '/',
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
        <AsideBar>
          <Link className="link-nav" to="/">
            <Button>
              <HomeAltIcon />
              <p>Home</p>
            </Button>
          </Link>
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
          <Link className="link-nav" to="/profile">
            <Button>
              <PersonIcon />
              <p>Profile</p>
            </Button>
          </Link>
          {/* <Button>
            <MoreHorizIcon />
            <p>More</p>
          </Button> */}
          <Link className="link-nav" to="/settings">
            <Button>
              <SettingsIcon />
              <p>Settings</p>
            </Button>
          </Link>
          <CreateTweetBtn
            onClick={() => {
              setAddTweet(true);
            }}
          >
            Tweet
          </CreateTweetBtn>
        </AsideBar>

        <Wrapper>
          {showHeader && (
            <Header hasBackPage={hasBackPage} backTo={backTo}>
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

          {showFooter && (
            <Footer>
              <FooterMsg>Develop By DLL-MGV</FooterMsg>
            </Footer>
          )}

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

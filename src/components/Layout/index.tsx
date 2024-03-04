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
  IconText,
  AsideLink,
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

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
          <AsideLink className="link-nav" to="/">
            <Button>
              <HomeAltIcon />
              <IconText>Home</IconText>
            </Button>
          </AsideLink>
          <AsideLink className="link-nav" to="/profile">
            <Button>
              <PersonIcon />
              <IconText>IconTextrofile</IconText>
            </Button>
          </AsideLink>
          <AsideLink className="link-nav" to="/settings">
            <Button>
              <SettingsIcon />
              <IconText>Settings</IconText>
            </Button>
          </AsideLink>
          <CreateTweetBtn
            onClick={() => {
              setAddTweet(true);
            }}
          >
            <IconText>Tweet</IconText>
            <FontAwesomeIcon icon={faPenToSquare} />
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
                  <span>150 Tweets</span>
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
          <div className="hidden" />
        </Wrapper>
      </Container>
      <GlobalStyles />
    </>
  );
}

export default Layout;

import GlobalStyles from '../../styles/GlobalStyles';
import {
  CreateTweetBtn,
  BellIcon,
  Button,
  Container,
  PersonIcon,
  Wrapper,
  HomeAltIcon,
  NewTweetModal,
  NewTweetForm,
} from './styles';

import {
  BottomMenu,
  EmailIcon,
  HomeIcon,
  SearchIcon,
} from '../../pages/Home/styles';
import Header from '../Header';
import { useState } from 'react';

type LayoutType = {
  children: React.ReactNode;
  hasBackPage?: boolean;
};

function Layout({ children, hasBackPage = true }: LayoutType) {
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
            <h3
              style={{
                width: 'fit-content',
                fontSize: '1.5em',
                fontWeight: '700',
              }}
            >
              Novo Tweet
            </h3>
            <textarea
              style={{
                border: '1px solid #1e1e1e',
                padding: '10px',
                borderRadius: '3px',
                fontSize: '0.7em',
                resize: 'none',
              }}
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
          {/* <Button>
            <SettingsIcon />
            <p>Settings</p>
          </Button> */}
          <CreateTweetBtn
            onClick={() => {
              setAddTweet(true);
            }}
          >
            Tweet
          </CreateTweetBtn>
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

import Feed from '../../components/Feed';
import Layout from '../../components/Layout';
import Login from '../Login';
import { LogoTypography } from './styles';

const Home = () => {
  return (
    <>
      <Layout hasBackPage={false}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'center',
            // height: '31px',
            // padding: '25px 16px',
          }}
        >
          <div
            style={{
              paddingLeft: '16px',
              color: '#ababab',
              marginTop: '30px',
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
              fontSize: '30px',
              fontWeight: 'bolder',
            }}
          >
            Página <LogoTypography>Y</LogoTypography> Inicial
          </div>
        </div>
        <Feed />
      </Layout>
      <Login />
    </>
  );
};

export default Home;

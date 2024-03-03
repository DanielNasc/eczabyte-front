import Feed from '../../components/Feed';
import Layout from '../../components/Layout';
import Login from '../Login';
import { HomeContainer, HomeWrapper, LogoTypography } from './styles';

const Home = () => {
  return (
    <>
      <Layout hasBackPage={false}>
        <HomeContainer>
          <HomeWrapper>
            Página <LogoTypography>Y</LogoTypography> Inicial
          </HomeWrapper>
        </HomeContainer>
        <Feed />
      </Layout>
      <Login />
    </>
  );
};

export default Home;

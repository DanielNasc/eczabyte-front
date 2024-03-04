import Feed from '../../components/Feed';
import Layout from '../../components/Layout';
import SelectionPopup from '../../components/SelectionPopup';
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
      <SelectionPopup />
    </>
  );
};

export default Home;

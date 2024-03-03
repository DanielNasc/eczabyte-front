import Feed from '../../components/Feed';
import Layout from '../../components/Layout';
import SelectionPopup from '../../components/SelectionPopup';
import { LogoTypography } from './styles';
import Register from '../Register';
import Login from '../Login';

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
      <SelectionPopup 
        items={[
          {
            label: 'Login',
            component: Login
          },
          {
            label: 'Register',
            component: Register
          }
        ]} 
      />
    </>
  );
};

export default Home;

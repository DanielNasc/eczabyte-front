import Feed from '../../components/Feed';
import Layout from '../../components/Layout';

const Home = () => {
  return (
    <Layout hasBackPage={false}>
      <h1
        style={{
          paddingLeft: '16px',
          color: '#ababab',
          marginTop: '30px',
        }}
      >
        Página Inicial
      </h1>
      <Feed />
    </Layout>
  );
};

export default Home;

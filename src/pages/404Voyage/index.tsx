import Layout from '../../components/Layout';
import { PageNotFound } from './style';

const NotFound = () => {
  return (
    <Layout hasBackPage={false} showHeader={false} showFooter={false}>
      <PageNotFound>
        <h1 className="title">404</h1>
        <button className="home-btn">Go Home</button>
      </PageNotFound>
    </Layout>
  );
};

export default NotFound;

import React from 'react';
import Feed from '../../components/Feed';
import {
  Avatar,
  Banner,
  CakeIcon,
  EditButton,
  Follows,
  LocationIcon,
  ProfileData,
  Tab,
} from './styles';
import Layout from '../../components/Layout';

const Profile: React.FC = () => {
  return (
    <Layout>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h2>Eczabyte ユーザー 👤</h2>
        <h3>@eczabyte</h3>
        <p>
          Pessoa do planeta terra, usuário do{' '}
          <a href="https://eczabyte.com">eczabyte.com</a>.
        </p>

        <ul>
          <li>
            <LocationIcon />
            Terra, Via Lacta
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em XX de mês de 20XX
          </li>
        </ul>

        <Follows>
          <span>
            <strong>69 </strong>
            seguindo
          </span>
          <span>
            <strong>42 </strong>
            seguidores
          </span>
        </Follows>
      </ProfileData>
      <Tab>Tweets</Tab>
      <Feed />
    </Layout>
  );
};

export default Profile;

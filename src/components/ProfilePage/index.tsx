import React from 'react';

import { Avatar, Banner, CakeIcon, Container, EditButton, Follows, LocationIcon, ProfileData } from './styles';
import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Usuário ユーザー 👤</h1>
        <h2>@user</h2>
        <p>Pessoa do planeta terra, usuário do <a href="https://eczabyte.com">eczabyte.com</a>.</p>

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
            seguindo <strong>69</strong>
          </span>
          <span>
            <strong>42 </strong> seguidores
          </span>
        </Follows>
      </ProfileData>
      
      <Feed />
      
    </Container>
  );
}

export default ProfilePage;

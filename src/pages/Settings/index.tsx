import React, { useState } from 'react';
import Layout from '../../components/Layout';
import {
  SettingsContainer,
  SettingsForm,
  SettingsInput,
  SettingsButton,
} from './styles';

const Settings: React.FC = () => {
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [gender, setGender] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implemente a lógica para enviar os dados de configuração para o servidor aqui
  };

  return (
    <Layout showHeader={false}>
      <SettingsContainer>
        <h1 className="title">Configurações</h1>
        <div className="user-data">
          <strong>Eczabyte ユーザー 👤</strong>
          <span>@eczabyte</span>
        </div>
        <SettingsForm onSubmit={handleSubmit}>
          <SettingsInput
            type="text"
            placeholder="Nome de usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <SettingsInput
            type="tel"
            placeholder="Telefone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <SettingsInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <SettingsInput
            type="text"
            placeholder="País"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <SettingsInput
            type="text"
            placeholder="Gênero"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <SettingsInput
            type="date"
            placeholder="Data de nascimento"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
          <SettingsInput
            type="password"
            placeholder="Nova senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <SettingsButton type="submit">Salvar</SettingsButton>
        </SettingsForm>
      </SettingsContainer>
    </Layout>
  );
};

export default Settings;

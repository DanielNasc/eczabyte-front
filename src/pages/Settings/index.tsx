import React, { useState } from 'react';
import Layout from '../../components/Layout';
import UserAuthService from '../../Services/userAuthService';
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
  const [error, setError] = useState<string>(''); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userData = { username, phone, email, country, gender, birthdate, password };
      await UserAuthService.updateUser(userData);
      console.log('Configurações atualizadas com sucesso!');
    } catch (error: any) { // Defina 'error' como tipo 'any'
      setError(error.message);
    }
  };

  const validateEmail = (input: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(input);
  };

  const validatePassword = (input: string): boolean => {
    return input.length >= 6;
  };

  const validateDate = (input: string): boolean => {
    return input !== '';
  };

  return (
    <Layout showHeader headerTitle="Settings">
      <SettingsContainer>
        <div className="user-data">
          <h2>User</h2>
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
            required
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            title="Insira um email válido"
          />
          {email && !validateEmail(email) && <p>Email inválido</p>}
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
            required
            onBlur={(e) => {
              if (!validateDate(e.target.value)) {
                setError('Data de nascimento inválida');
              } else {
                setError('');
              }
            }}
          />
          <SettingsInput
            type="password"
            placeholder="Nova senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            onBlur={(e) => {
              if (!validatePassword(e.target.value)) {
                setError('A senha deve ter pelo menos 6 caracteres');
              } else {
                setError('');
              }
            }}
          />
          <SettingsButton type="submit">Salvar</SettingsButton>
          {error && <p>{error}</p>}
        </SettingsForm>
      </SettingsContainer>
    </Layout>
  );
};

export default Settings;

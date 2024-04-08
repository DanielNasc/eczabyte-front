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
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string>(''); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userData: any = {};
    if (username) userData.username = username;
    if (phone) userData.phone = phone;
    if (email) userData.email = email;
    if (country) userData.country = country;
    if (gender) userData.gender = gender;
    if (birthdate) userData.birthdate = birthdate;
    if (password) userData.password = password;

    try {
      await UserAuthService.updateUser(userData);
      console.log('Configurações atualizadas com sucesso!');
    } catch (error: any) { 
      setError(error.message);
    }
  };

  const validateEmail = (input: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(input);
  };

  const validatePassword = (input: string): boolean => {
    return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(input);
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
            onBlur={(e) => {
              if (email && !validateEmail(email)) setError('Email inválido');
            }}
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
            onBlur={(e) => {
              if (birthdate && !validateDate(birthdate)) setError('Data de nascimento inválida');
            }}
          />
          <SettingsInput
            type="password"
            placeholder="Nova senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={(e) => {
              if (password && !validatePassword(password)) setError('A senha deve ter pelo menos 8 caracteres e conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial');
            }}
          />
          <SettingsInput
            type="password"
            placeholder="Confirmar Nova senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={(e) => {
              if (confirmPassword && confirmPassword !== password) setError('As senhas não coincidem');
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

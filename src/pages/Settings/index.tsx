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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userData: any = {};
    if (username) userData.username = username;
    if (email) userData.email = email;
    if (password) userData.password = password;

    try {
      await UserAuthService.updateUser(userData);
      setSuccessMessage('Configurações atualizadas com sucesso!');
      setError('');
      // Limpa os campos após a atualização bem-sucedida
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error: any) {
      setError(error.message);
      setSuccessMessage('');
    }
  };

  const validateEmail = (input: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(input);
  };

  const validatePassword = (input: string): boolean => {
    return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      input
    );
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (validateEmail(e.target.value)) {
      setError(''); // Limpa o erro se o email for válido
    } else {
      setError('Email inválido');
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (validatePassword(e.target.value)) {
      setError(''); // Limpa o erro se a senha for válida
    } else {
      setError(
        'A senha deve ter pelo menos 8 caracteres e conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial'
      );
    }
  };

  return (
    <Layout showHeader headerTitle="Settings">
      <SettingsContainer>
        <div className="user-data">
          <h2>Alterar Dados</h2>
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
        </div>
        <SettingsForm onSubmit={handleSubmit}>
          <SettingsInput
            type="text"
            placeholder="Nome de usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <SettingsInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <SettingsInput
            type="password"
            placeholder="Nova senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <SettingsInput
            type="password"
            placeholder="Confirmar Nova senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={(e) => {
              if (confirmPassword && confirmPassword !== password)
                setError('As senhas não coincidem');
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
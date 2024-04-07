import React, { useContext, useEffect, useState } from 'react';

import { ButtonStyled, Form } from './styles';
import { AuthContext } from '../../contexts/AuthContext';
import { PasswordInput } from '../../components/Inputs/PasswordInput';
import { InputStyled } from '../../components/Inputs/styles';
import AuthService from '../../Services/authService';

type Props = {
  setPoppupVisible: (value: boolean) => void;
};

const Login: React.FC<Props> = ({ setPoppupVisible }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { setUser, user } = useContext(AuthContext);

  useEffect(() => {
    async function checkToken() {
      const res = await AuthService.checkToken();
      if (!res.message) {
        return false;
      }
      setUser(username);
      setPoppupVisible(false);
    }

    checkToken();
  }, []);

  useEffect(() => {
    if (user) {
      setPoppupVisible(false);
    }
  }, [user, setPoppupVisible]);

  const handleSubmit = async (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();

    try {
      await AuthService.login(username, password);
      setUser(username);
      setPoppupVisible(false);
    } catch (error) {
      setError('Usuário ou senha incorretos. Tente novamente.');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputStyled
        placeholder="Username"
        type="text"
        onChange={(e) => setUsername(e.target.value)}
      />

      <PasswordInput
        error={error}
        setPassword={setPassword}
        password={password}
      />

      <ButtonStyled
        type="submit"
        style={{ marginTop: '50px' }}
        value="Entrar"
      />
    </Form>
  );
};

export default Login;

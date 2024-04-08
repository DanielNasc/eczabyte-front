import React, { useContext, useEffect, useState } from 'react';

import { ButtonStyled, Form } from './styles';
import { AuthContext } from '../../contexts/AuthContext';
import { PasswordInput } from '../../components/Inputs/PasswordInput';
import { InputStyled } from '../../components/Inputs/styles';
import AuthService from '../../Services/authService';

type Props = {
  setPoppupVisible: (value: boolean) => void;
};

const Register: React.FC<Props> = ({ setPoppupVisible }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [usernameError, setUsernameError] = useState('');
  const [error, setError] = useState('');
  const { setUser, user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      setPoppupVisible(false);
    }
  }, [user, setPoppupVisible]);

  const handleSubmit = async (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();

    if (!username) {
      setUsernameError('Por favor, insira um username.');
    }

    if (!password) {
      setError('Por favor, insira a senha.');
      return;
    }

    if (password.length < 8) {
      setError('Senha muito curta. Tente novamente.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Senha incorreta. Tente novamente.');
      return;
    }

    try {
      await AuthService.createUser(username, password, email);
      setUser(username);
      setPoppupVisible(false);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setUsernameError(err.message);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <InputStyled
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => {
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(email)) {
              setError('Email inválido. Tente novamente.');
            } else {
              setError('');
            }
          }}
        />

        <InputStyled
          placeholder="Username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <p style={{ color: 'red' }}>{usernameError}</p>

        <PasswordInput
          password={password}
          setPassword={setPassword}
          error={error}
        />

        <PasswordInput
          password={confirmPassword}
          setPassword={setConfirmPassword}
          error={error}
          placeholder="Confirme sua senha"
        />
      </div>

      <ButtonStyled
        type="submit"
        style={{ marginTop: '50px' }}
        value="Entrar"
      />
    </Form>
  );
};

export default Register;

import React, { useContext, useEffect, useState } from 'react';

import {
  ButtonStyled,
  Form,
} from './styles';
import { AuthContext } from '../../contexts/AuthContext';
import { PasswordInput } from '../../components/Inputs/PasswordInput';
import { InputStyled } from '../../components/Inputs/styles';

type Props = {
  setPoppupVisible: (value: boolean) => void;
}

const Login: React.FC<Props> = ({ setPoppupVisible }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { setUser, user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      setPoppupVisible(false);
    }
  }, [user, setPoppupVisible]);


  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();

    if (!password) {
      setError('Por favor, insira a senha.');
      return;
    }

    if (password === 'password') {
      alert('Senha correta. Autenticado com sucesso!');
      setUser(email);
      setPoppupVisible(false);
    } else {
      setError('Senha incorreta. Tente novamente.');
    }
  };


  return (
    <Form onSubmit={handleSubmit}>
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

      <PasswordInput error={error} setPassword={setPassword} password={password} />

      <ButtonStyled
        type="submit"
        style={{ marginTop: '50px' }}
        value="Entrar"
      />
    </Form>
  );
};

export default Login;

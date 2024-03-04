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

const Register: React.FC<Props> = ({ setPoppupVisible }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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

    if (password.length < 8) {
      setError('Senha muito curta. Tente novamente.');
      return;
    }

    if (password === confirmPassword) {
      alert('Registrado com sucesso!');
      setUser(email);
      setPoppupVisible(false);
    } else {
      setError('Senha incorreta. Tente novamente.');
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
       
       <PasswordInput
          password={password}
          setPassword={setPassword}
          error={error} />

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

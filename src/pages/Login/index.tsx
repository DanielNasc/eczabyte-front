import React, { useState } from 'react';

import LoginPoppup from '../../components/LoginPoppup';
import {
  ButtonStyled,
  InputIconContainer,
  InputStyled,
  InputStyledContainer,
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [visiblePoppup, setVisiblePoppup] = useState(true);

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setError('');
  };

  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();

    if (!password) {
      setError('Por favor, insira a senha.');
      return;
    }

    if (password === 'password') {
      console.log('Senha correta. Autenticado com sucesso!');
      setVisiblePoppup(false);
    } else {
      setError('Senha incorreta. Tente novamente.');
    }
  };

  function handleVisible() {
    setShowPassword((value) => {
      return !value;
    });
  }

  return (
    <LoginPoppup
      poppupVisible={visiblePoppup}
      setPoppupVisible={setVisiblePoppup}
      submit={handleSubmit}
    >
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
      <>
        <InputStyledContainer>
          <InputStyled
            style={{ width: '100%' }}
            placeholder="Password"
            type={showPassword ? 'password' : 'text'}
            value={password}
            onChange={handleChangePassword}
          />
          <InputIconContainer onClick={handleVisible}>
            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
          </InputIconContainer>
        </InputStyledContainer>
        <p style={{ color: 'red' }}>{error}</p>
      </>
      <ButtonStyled
        type="submit"
        style={{ marginTop: '50px' }}
        value="Entrar"
      />
    </LoginPoppup>
  );
};

export default Login;

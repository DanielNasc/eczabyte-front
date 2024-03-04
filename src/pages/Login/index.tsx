import React, { useContext, useEffect, useState } from 'react';

import {
  ButtonStyled,
  Form,
  InputIconContainer,
  InputStyled,
  InputStyledContainer,
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../../contexts/AuthContext';

type Props = {
  setPoppupVisible: (value: boolean) => void;
}

const Login: React.FC<Props> = ({ setPoppupVisible }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  const { setUser, user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      setPoppupVisible(false);
    }
  }, [user, setPoppupVisible]);

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
      alert('Senha correta. Autenticado com sucesso!');
      setUser(email);
      setPoppupVisible(false);
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
        <div>
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
        </div>
      </div>

      <ButtonStyled
        type="submit"
        style={{ marginTop: '50px' }}
        value="Entrar"
      />
    </Form>
  );
};

export default Login;

import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  height: 100%;
  margin: 50px;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #1da1f2;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;


export const ButtonStyled = styled.input`
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 10px;
  background: white;
  border: none;
  font-size: 20px;
  color: black;
  font-weight: bolder;
  cursor: pointer;
`;




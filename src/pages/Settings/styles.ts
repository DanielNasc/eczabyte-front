import styled from 'styled-components';

export const SettingsContainer = styled.div`
  margin: 80px 0;

  .title {
    margin-bottom: 8px;
  }

  .user-data {
    margin-bottom: 50px;
  }
`;

export const SettingsForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const SettingsInput = styled.input`
  margin-bottom: 10px;
  padding: 18px 10px;
  border-radius: 5px;
  border: 1px solid #1e1e1e;
  &:focus {
    outline: 1px solid blue;
  }
`;

export const SettingsButton = styled.button`
  width: 150px;
  padding: 16px;
  margin-top: 28px;
  border-radius: 25px;
  font-weight: bold;
  font-size: 15px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
  border: 1px solid transparent;
  transition-duration: 400ms;

  &:hover {
    background-color: black;
    border: 1px solid #555;
  }
`;

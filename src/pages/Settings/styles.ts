import styled from 'styled-components';

export const SettingsContainer = styled.div`
  padding: 16px;
`;

export const SettingsForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const SettingsInput = styled.input`
  margin-bottom: 10px;
  padding: 8px;
`;

export const SettingsButton = styled.button`
  padding: 8px 16px;
  background-color: #1976d2;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

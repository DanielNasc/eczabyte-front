import styled from 'styled-components';

export const ContainerMain = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ContainerPoppup = styled.div`
  width: 500px;
  padding: 20px;
  background: #190b28;
  border-radius: 15px;

  height: 100%;
`;

export const ContainerPoppupInside = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
`;

export const ContainerPoppupHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 500px) {
    width: 80%;
  }
`;

export const LogoTypographSmall = styled.div`
  color: #1976d2;
  font-weight: bolder;
  font-size: 40px;
  border-radius: 3px;
`;

export const CrossClosePoppup = styled.div`
  color: white;
  font-size: 30px;
  :hover {
    color: gray;
  }
`;

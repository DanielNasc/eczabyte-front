import styled from 'styled-components';

export const PageNotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: var(--primary);
  background-color: red;
  max-height: 100vh;
  height: 100%; */

  .title {
    font-size: 150px;
    position: relative;

    &::after {
      position: absolute;
      width: fit-content;
      display: flex;
      bottom: 60px;
      background-color: #fe693c;
      color: black;
      font-weight: 800;
      padding: 1px 3px;
      transform: rotate(15deg);
      right: 50px;
      font-size: 18px;
      content: 'Page Not Found';
    }
  }

  .home-btn {
    padding: 20px 50px;
    border: 1px solid #1e1e1e;
    background-color: black;
    border-radius: 10px;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    transition-duration: 400ms;
    /* margin-top: 50px; */
    &:hover {
      scale: 105%;
    }
  }
`;

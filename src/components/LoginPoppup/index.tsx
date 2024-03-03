import React, { ReactNode } from 'react';
import {
  ContainerMain,
  ContainerPoppup,
  ContainerPoppupHeader,
  ContainerPoppupInside,
  CrossClosePoppup,
  LogoTypographSmall,
} from './style';

type Props = {
  submit: React.FormEventHandler<HTMLFormElement>;
  children: ReactNode;
  poppupVisible: boolean;
  setPoppupVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginPoppup = ({
  children,
  submit,
  poppupVisible,
  setPoppupVisible,
}: Props) => {
  function handleClose() {
    setPoppupVisible(false);
  }

  return poppupVisible ? (
    <ContainerMain>
      <ContainerPoppup>
        <ContainerPoppupHeader>
          <div />
          <LogoTypographSmall>Y</LogoTypographSmall>
          <CrossClosePoppup onClick={handleClose}>ⓧ</CrossClosePoppup>
        </ContainerPoppupHeader>
        <ContainerPoppupInside onSubmit={submit}>
          {children}
        </ContainerPoppupInside>
      </ContainerPoppup>
    </ContainerMain>
  ) : (
    <div></div>
  );
};

export default LoginPoppup;

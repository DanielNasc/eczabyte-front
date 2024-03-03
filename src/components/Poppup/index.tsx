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
  children: ReactNode;
  poppupVisible: boolean;
  setPoppupVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const Popup = ({
  children,
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
        <ContainerPoppupInside>
          {children}
        </ContainerPoppupInside>
      </ContainerPoppup>
    </ContainerMain>
  ) : (
    <div></div>
  );
};

export default Popup;

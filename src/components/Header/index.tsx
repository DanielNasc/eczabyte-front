import React from 'react';
import { HeaderTeamplate } from './styles';
import { BackIcon, ProfileInfo } from '../../pages/Home/styles';

type ChildrenType = { children?: React.ReactNode; hasBackPage: boolean };

const Header: React.FC<ChildrenType> = ({
  children,
  hasBackPage,
}: ChildrenType) => {
  return (
    <HeaderTeamplate>
      {hasBackPage ? (
        <button>
          <BackIcon />
        </button>
      ) : (
        <></>
      )}
      <ProfileInfo>{children}</ProfileInfo>
    </HeaderTeamplate>
  );
};

export default Header;

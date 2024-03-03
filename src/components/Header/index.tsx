import React from 'react';
import { HeaderTeamplate } from './styles';
import { BackIcon, ProfileInfo } from '../../pages/Home/styles';
import { Link } from 'react-router-dom';

type ChildrenType = {
  children?: React.ReactNode;
  hasBackPage: boolean;
  backTo: string;
};

const Header: React.FC<ChildrenType> = ({
  children,
  hasBackPage,
  backTo,
}: ChildrenType) => {
  return (
    <HeaderTeamplate>
      {hasBackPage ? (
        <Link to={backTo}>
          <BackIcon />
        </Link>
      ) : (
        <></>
      )}
      <ProfileInfo>{children}</ProfileInfo>
    </HeaderTeamplate>
  );
};

export default Header;

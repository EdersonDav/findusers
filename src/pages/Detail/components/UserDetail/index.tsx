import { useSelector } from 'react-redux';

import { useDataUser } from '../../../../redux/sliceUser';
import { UserContainer } from './stye';

export const UserDetail = () => {
  const userData = useSelector(useDataUser);
  return (
    <UserContainer>
      <h1>{userData.name}</h1>
    </UserContainer>
  );
};

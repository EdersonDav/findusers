import { useSelector, useDispatch } from 'react-redux';
import { useAppDispatch } from '../../../../redux/hooks';

import { fetchSearchUser } from '../../../../redux/sliceSearchUsers';
import { saveName, useDataName } from '../../../../redux/sliceNameSearch';
import { InputContainer } from './style';

export const Search = () => {
  const dispatch = useDispatch();
  const appDispatch = useAppDispatch();
  const userName = useSelector(useDataName);

  const searchUser = async () => {
    if (userName) {
      appDispatch(fetchSearchUser({ userName, page: 1 }));
    }
  };

  return (
    <InputContainer>
      <label htmlFor="input-search">Search User</label>
      <input
        value={userName}
        type="text"
        id="input-search"
        onChange={({ target: { value } }) => dispatch(saveName(value))}
      />
      <button type="submit" onClick={searchUser}>
        Go
      </button>
    </InputContainer>
  );
};

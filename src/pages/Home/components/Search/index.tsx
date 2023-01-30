import { useSelector, useDispatch } from 'react-redux';
import { FormEvent } from 'react';
import { FiSearch } from 'react-icons/fi';

import { useAppDispatch } from '../../../../redux/hooks';
import { fetchSearchUser } from '../../../../redux/sliceSearchUsers';
import { saveName, useDataName } from '../../../../redux/sliceNameSearch';
import { InputContainer, FormSearch, InputSearch, ButtonSearch } from './style';

export const Search = () => {
  const dispatch = useDispatch();
  const appDispatch = useAppDispatch();
  const userName = useSelector(useDataName);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userName) {
      appDispatch(fetchSearchUser({ userName, page: 1 }));
    }
  };

  return (
    <InputContainer>
      <FormSearch action="" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="input-search">Search User</label>
        <InputSearch
          value={userName}
          type="text"
          id="input-search"
          placeholder="Search User"
          onChange={({ target: { value } }) => dispatch(saveName(value))}
          autoComplete="off"
        />
        <ButtonSearch type="submit">
          <FiSearch size={20} />
        </ButtonSearch>
      </FormSearch>
    </InputContainer>
  );
};

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../../../redux/hooks';
import { useDataName } from '../../../../redux/sliceNameSearch';
import {
  useDataResult,
  fetchSearchUser,
  useCountResult,
} from '../../../../redux/sliceSearchUsers';

import { ResultContainer } from './style';

export const ListSearchResult = () => {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const users = useSelector(useDataResult);
  const userName = useSelector(useDataName);

  useEffect(() => {
    if (userName) {
      dispatch(fetchSearchUser({ userName, page }));
    }
  }, [page]);

  return (
    <ResultContainer>
      {users.map((user) => (
        <div key={user.id}>
          <h1>{user.login}</h1>
          <a href={`/${user.login}`}>ver detalhes</a>
        </div>
      ))}
      <div>
        {useSelector(useCountResult).map((page) => (
          <button key={page} onClick={() => setPage(Number(page))}>
            {page}
          </button>
        ))}
      </div>
    </ResultContainer>
  );
};

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../../../redux/hooks';
import { useDataUser } from '../../../../redux/sliceUser';
import { fetchRepos, useDataRepositories } from '../../../../redux/sliceRepos';

import { RepositoriesContainer } from './stye';
import { returnArrayPages } from '../../../../helpers/returnArrayPages';

export const Repositories = () => {
  const [page, setPage] = useState(1);
  const [pagesCount, setPagesCount] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const userData = useSelector(useDataUser);

  useEffect(() => {
    if (userData.login) {
      dispatch(fetchRepos({ userName: userData.login, page }));
      setPagesCount(returnArrayPages(userData.public_repos));
    }
  }, [page, userData]);

  return (
    <RepositoriesContainer>
      {useSelector(useDataRepositories).map((rep) => (
        <div key={rep.id}>{rep.name}</div>
      ))}
      <div>
        {pagesCount.map((page) => (
          <button onClick={() => setPage(Number(page))} key={page}>
            {page}
          </button>
        ))}
      </div>
    </RepositoriesContainer>
  );
};

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { IRepos } from '../../../../types/interfaces';

import {
  useCountRepos,
  useDataReposPagination,
} from '../../../../redux/sliceRepos';

import { RepositoriesContainer } from './stye';

export const Repositories = () => {
  const [page, setPage] = useState(1);

  return (
    <RepositoriesContainer>
      {useSelector((state) => useDataReposPagination(state, page)).map(
        (rep) => (
          <div key={rep.id}>{rep.name}</div>
        ),
      )}
      <div>
        {useSelector(useCountRepos).map((page) => (
          <button key={page}>{page}</button>
        ))}
      </div>
    </RepositoriesContainer>
  );
};

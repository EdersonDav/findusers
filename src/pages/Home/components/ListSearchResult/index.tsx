import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Pagination } from '../../../../components/Pagination';

import { useAppDispatch } from '../../../../redux/hooks';
import { useDataName } from '../../../../redux/sliceNameSearch';
import {
  useDataResult,
  fetchSearchUser,
  useCountResult,
} from '../../../../redux/sliceSearchUsers';

import { ResultContainer, UsersCard, UserImage, Container } from './style';

export const ListSearchResult = () => {
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const users = useSelector(useDataResult);
  const userName = useSelector(useDataName);
  const countUsers = useSelector(useCountResult);

  useEffect(() => {
    if (userName) {
      dispatch(fetchSearchUser({ userName, page }));
    }
  }, [page]);

  useEffect(() => {
    setPage(1);
  }, [countUsers.total]);

  return (
    <Container>
      {countUsers.total > 0 && <p>{countUsers.total} Users</p>}
      <ResultContainer>
        {users.map((user) => (
          <UsersCard href={`/${user.login}`} key={user.id}>
            <UserImage>
              <img src={user.avatar_url} alt={`Photo user ${user.login}`} />
            </UserImage>
            <h1>{user.login}</h1>
          </UsersCard>
        ))}
      </ResultContainer>
      <Pagination
        current={page}
        total={countUsers.perpage}
        onPageChange={setPage}
      />
    </Container>
  );
};

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { gitHubApi } from '../../services/GitHubAPI';

import { saveRepos } from '../../redux/sliceRepos';
import { saveUser } from '../../redux/sliceUser';

import { UserDetail } from './components/UserDetail';
import { Repositories } from './components/Repositories';

import { Container } from './style';

export const Detail = () => {
  const dispatch = useDispatch();
  const { user } = useParams();
  useEffect(() => {
    if (user) {
      gitHubApi.getUser(user).then((resp) => {
        if (resp) {
          dispatch(saveUser(resp));
        }
      });

      gitHubApi.getRepos(user).then((resp) => {
        if (resp) {
          console.log(resp.length);

          dispatch(saveRepos(resp));
        }
      });
    }
  }, [user]);

  return (
    <Container>
      <h1>Detail</h1>
      <h2>{user}</h2>
      <a href="/">back</a>
      <UserDetail />
      <Repositories />
    </Container>
  );
};

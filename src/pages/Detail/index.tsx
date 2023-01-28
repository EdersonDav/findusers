import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { gitHubApi } from '../../services/GitHubAPI';

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

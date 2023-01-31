import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { TbArrowBackUp } from 'react-icons/tb';

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
    <Container className="wrapper">
      <a href="/">
        <TbArrowBackUp />
        Back to search
      </a>
      <UserDetail />
      <Repositories />
    </Container>
  );
};

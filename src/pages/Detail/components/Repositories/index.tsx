import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { HiOutlineExternalLink, HiCode } from 'react-icons/hi';

import { IoCopyOutline, IoCheckmarkCircleOutline } from 'react-icons/io5';

import { useAppDispatch } from '../../../../redux/hooks';
import { useDataUser, useCountRepos } from '../../../../redux/sliceUser';
import { fetchRepos, useDataRepositories } from '../../../../redux/sliceRepos';

import {
  RepositoriesContainer,
  ReposHeader,
  ReposCard,
  ReposBody,
} from './stye';
import { Pagination } from '../../../../components/Pagination';

export const Repositories = () => {
  const [isCopy, setIsCopy] = useState('');
  const [page, setPage] = useState(1);
  const dispatch = useAppDispatch();
  const userData = useSelector(useDataUser);
  const userReposCount = useSelector(useCountRepos);

  useEffect(() => {
    if (userData.login) {
      dispatch(fetchRepos({ userName: userData.login, page }));
    }
  }, [page, userData]);

  const onClickCopy = (text: string) => {
    setIsCopy(text);
    navigator.clipboard.writeText(text);
    setTimeout(() => {
      setIsCopy('');
    }, 2000);
  };

  return (
    <RepositoriesContainer>
      {useSelector(useDataRepositories).map((rep) => (
        <ReposCard key={rep.id}>
          <ReposHeader>
            <h2>{rep.name}</h2>
            <a href={rep.html_url} target="_blank" rel="noreferrer">
              <HiOutlineExternalLink />
            </a>
          </ReposHeader>
          <ReposBody>
            <p>{rep.description}</p>
            <button onClick={() => onClickCopy(rep.clone_url)}>
              <span className="cloneUrl">{rep.clone_url}</span>
              <span className="clone">Clone URL</span>
              {isCopy === rep.clone_url ? (
                <IoCheckmarkCircleOutline color="#2c974b" />
              ) : (
                <IoCopyOutline />
              )}
            </button>
            <strong>
              <HiCode />
              {rep.language}
            </strong>
          </ReposBody>
        </ReposCard>
      ))}
      <Pagination
        current={page}
        total={userReposCount.perpage}
        onPageChange={setPage}
      />
    </RepositoriesContainer>
  );
};

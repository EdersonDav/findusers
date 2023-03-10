import { useSelector } from 'react-redux';
import { GiFactory } from 'react-icons/gi';
import { MdOutlineLocationOn } from 'react-icons/md';
import { HiWifi, HiOutlineExternalLink } from 'react-icons/hi';
import { AiOutlineMail } from 'react-icons/ai';
import { RiGitRepositoryLine } from 'react-icons/ri';

import { useDataUser } from '../../../../redux/sliceUser';
import { UserContainer, Avatar } from './stye';

export const UserDetail = () => {
  const userData = useSelector(useDataUser);
  return (
    <UserContainer>
      <Avatar>
        <img
          src={userData.avatar_url}
          alt={`Picture user ${useDataUser.name}`}
        />
        <h1>
          {userData.name}
          <a href={userData.html_url} target="_blank" rel="noreferrer">
            <HiOutlineExternalLink />
          </a>
        </h1>
      </Avatar>
      <p>{userData.bio}</p>
      <div className="infos">
        {userData?.company && (
          <span>
            <GiFactory />
            {userData.company}
          </span>
        )}

        {userData.location && (
          <span>
            <MdOutlineLocationOn />
            {userData.location}
          </span>
        )}

        {userData.blog && (
          <span>
            <HiWifi />
            {userData.blog}
          </span>
        )}

        {userData.email && (
          <span>
            <AiOutlineMail />
            {userData.email}
          </span>
        )}
        <span>followers: {userData.followers}</span>
        <span>following: {userData.following}</span>
      </div>

      <strong>
        <RiGitRepositoryLine /> {userData.public_repos} public repositories
      </strong>
    </UserContainer>
  );
};

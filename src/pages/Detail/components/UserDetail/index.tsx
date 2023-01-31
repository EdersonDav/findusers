import { useSelector } from 'react-redux';
import { GiFactory } from 'react-icons/gi';
import { MdOutlineLocationOn } from 'react-icons/md';
import { HiWifi } from 'react-icons/hi';
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
        <h1>{userData.name}</h1>
      </Avatar>
      <p className="bio">{userData.bio}</p>
      <div className="infos">
        {userData?.company && (
          <p>
            <GiFactory />
            {userData.company}
          </p>
        )}

        {userData.location && (
          <p>
            <MdOutlineLocationOn />
            {userData.location}
          </p>
        )}

        {userData.blog && (
          <p>
            <HiWifi />
            {userData.blog}
          </p>
        )}

        {userData.email && (
          <p>
            <AiOutlineMail />
            {userData.email}
          </p>
        )}
      </div>

      <p className="repos">
        <RiGitRepositoryLine /> {userData.public_repos} public repositories
      </p>
    </UserContainer>
  );
};

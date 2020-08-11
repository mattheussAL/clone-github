import React from 'react';

import { Link } from 'react-router-dom';

import { 
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GitHubIcon
} from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link to={'/mattheussAL'} className={'username'}>
          mattheussAL
        </Link>

        <span></span>

        <Link to={'/mattheussAL/github-clone'} className={'reponame'}>
          github-clone
        </Link>
      </Breadcrumb>

      <p>Contain all of my YouTube lessons code.</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>3</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={'https://github.com/mattheussAL/neext-level-week-2'}>
        <GitHubIcon />
        <span>View on Github</span>
      </LinkButton>
    </Container>
  );
}

export default Profile;
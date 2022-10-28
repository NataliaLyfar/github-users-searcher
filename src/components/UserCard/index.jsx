import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useGetUserQuery } from 'redux/githubUsers/githubUsersApi';
import { Card, Typography } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Title, Text, Paragraph, Link } = Typography;

export const UserCard = () => {
  const { login } = useParams();
  const [storageItem, setStorageItem] = useState(() =>
    JSON.parse(localStorage.getItem('favorites') || '[]')
  );

  const {
    userLogin,
    name,
    followers,
    following,
    avatar,
    publicRepos,
    reposUrl,
  } = useGetUserQuery(login, {
    selectFromResult: ({ data }) => ({
      userLogin: data?.login,
      followers: data?.followers,
      following: data?.following,
      name: data?.name,
      publicRepos: data?.public_repos,
      avatar: data?.avatar_url,
      reposUrl: data?.html_url,
    }),
  });

  const isFavorited = storageItem
    .map(user => user.userLogin)
    .includes(userLogin);

  const handleToggleFavorite = () => {
    if (!isFavorited) {
      const newStorageItem = [
        ...storageItem,
        { avatar, userLogin, reposUrl, isFavorited },
      ];
      setStorageItem(newStorageItem);
      localStorage.setItem('favorites', JSON.stringify(newStorageItem));
    } else {
      const newStorageItem = storageItem.filter(
        ({ savedLogin }) => savedLogin !== userLogin
      );
      setStorageItem(newStorageItem);
      localStorage.setItem('favorites', JSON.stringify(newStorageItem));
    }
  };

  return (
    <Card style={{ width: 320 }} cover={<img src={avatar} alt="user avatar" />}>
      <StyledButton
        isFavorited={isFavorited}
        type="button"
        onClick={handleToggleFavorite}
      >
        <HeartOutlined />
      </StyledButton>
      {name && <Title level={3}>{name}</Title>}
      <Paragraph>
        <Text strong>Login:</Text> {userLogin}
      </Paragraph>
      <Paragraph>
        <Text strong>Followers:</Text> {followers}
      </Paragraph>
      <Paragraph>
        <Text strong>Following:</Text> {following}
      </Paragraph>
      <Paragraph>
        <Text strong>Public repos:</Text> {publicRepos}
      </Paragraph>
      <Link href={reposUrl} target="_blank" rel="noreferrer">
        {reposUrl}
      </Link>
    </Card>
  );
};

const StyledButton = styled.button`
  position: absolute;
  right: 20px;
  bottom: 39%;
  background-color: transparent;
  outline: none;
  border: none;
  &:hover,
  &:focus,
  &:active {
    svg {
      color: ${p => p.theme.colors.accent};
    }
    background-color: transparent;
    cursor: pointer;
  }
  color: ${p => (p.isFavorited ? p.theme.colors.accent : p.theme.colors.black)};
`;

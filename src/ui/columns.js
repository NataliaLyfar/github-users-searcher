import { Typography, Image } from 'antd';
import { Link } from 'react-router-dom';

export const columns = [
  {
    title: 'avatar',
    dataIndex: 'avatar_url',
    key: 'avatar_url',
    render: avatar_url => (
      <Image src={avatar_url} alt="user avatar" width={44} />
    ),
  },
  {
    title: 'User',
    dataIndex: 'login',
    key: 'login',
    render: text => (
      <Link to={`/users/${text}`}>
        <Typography.Text copyable>{text}</Typography.Text>
      </Link>
    ),
    sorter: (a, b) => a.login.length - b.login.length,
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    filters: [
      {
        text: 'User',
        value: 'User',
      },
      {
        text: 'Organization',
        value: 'Organization',
      },
    ],
    onFilter: (value, item) => item.type.includes(value),
    responsive: ['md'],
  },
  {
    title: 'Repo url',
    dataIndex: 'html_url',
    key: 'html_url',
    responsive: ['md'],
    render: url => (
      <Typography.Link href={url} target="_blank" rel="noreferrer">
        {url}
      </Typography.Link>
    ),
  },
];

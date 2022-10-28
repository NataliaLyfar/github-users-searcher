import { useState } from 'react';
import { Table, Row, Col, Typography, Image, Popconfirm, Button } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const { Title } = Typography;

export const FavoriteList = () => {
  const [storageItem, setStorageItem] = useState(() =>
    JSON.parse(localStorage.getItem('favorites') || '[]')
  );

  const favoriteColumns = [
    {
      title: 'avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      render: avatar => <Image src={avatar} alt="user avatar" width={44} />,
    },
    {
      title: 'User',
      dataIndex: 'userLogin',
      key: 'userLogin',
      render: text => (
        <Link to={`/users/${text}`}>
          <Typography.Text copyable>{text}</Typography.Text>
        </Link>
      ),
      sorter: (a, b) => a.login.length - b.login.length,
    },
    {
      title: 'Repo url',
      dataIndex: 'reposUrl',
      key: 'reposUrl',
      responsive: ['md'],
      render: url => (
        <Typography.Link href={url} target="_blank" rel="noreferrer">
          {url}
        </Typography.Link>
      ),
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_, record) =>
        storageItem.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.userLogin)}
          >
            <Button type="link">Delete</Button>
          </Popconfirm>
        ) : null,
    },
  ];

  const handleDelete = login => {
    const newData = storageItem.filter(item => item.userLogin !== login);
    setStorageItem(newData);
    localStorage.setItem('favorites', JSON.stringify(newData));
  };

  return (
    <>
      {storageItem.length > 0 && (
        <List>
          <Title level={2}>Favorite Github users</Title>
          <Row>
            <Col xs={24}>
              <Table
                dataSource={storageItem?.map(item => ({
                  ...item,
                  key: item.userLogin,
                }))}
                columns={favoriteColumns}
                pagination={{
                  defaultPageSize: '10',
                  showSizeChanger: true,
                  pageSizeOptions: [5, 10, 15, 30],
                  position: ['topLeft', 'bottomRight'],
                }}
              />
            </Col>
          </Row>
        </List>
      )}
    </>
  );
};

const List = styled.div`
  margin-top: ${p => p.theme.space[5]}px;
`;

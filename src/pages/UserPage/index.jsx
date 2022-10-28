import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { UserCard } from 'components/UserCard';
import { Box } from 'components/ui';
import styled from 'styled-components';

const UserPage = () => {
  const [backLocation, setBackLocation] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (backLocation === null) {
      setBackLocation(location?.state?.from ?? '/');
    }
  }, [backLocation, location?.state?.from]);

  const onGoBack = () => {
    navigate(backLocation);
  };

  return (
    <Container>
      <StyledButton onClick={onGoBack} icon={<ArrowLeftOutlined />} />
      <UserCard />
    </Container>
  );
};

export default UserPage;

const StyledButton = styled(Button)`
  margin-bottom: ${p => p.theme.space[1]}px;
  margin-right: auto;
`;
const Container = styled(Box)`
  flex-direction: column;
  margin: ${p => p.theme.space[3]}px auto;
`;

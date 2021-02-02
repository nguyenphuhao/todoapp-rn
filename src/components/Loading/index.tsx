import React, { useEffect, useState } from 'react';
import { Text } from '../../styled/components';
import { Container, Content } from './styled';

interface LoadingProps {
  value?: string;
  visible: boolean;
}

const Loading: React.FC<LoadingProps> = ({ visible, value = 'Loading' }) => {
  const [threeDots, setThreeDots] = useState<string>('');
  useEffect(() => {
    setTimeout(() => {
      if (threeDots.length >= 3) {
        setThreeDots('');
      } else {
        setThreeDots(threeDots + '.');
      }
    }, 100);
  }, [threeDots]);
  return visible ? (
    <Container>
      <Content>
        <Text>{value}</Text>
        <Text>{threeDots}</Text>
      </Content>
    </Container>
  ) : (
    <></>
  );
};

export default Loading;

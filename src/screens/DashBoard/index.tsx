import React from 'react';
import { View, Text } from 'react-native';
import TodoContainer from '../../containers/TodoContainer';
import { Container } from './styled';
const DashBoard: React.FC = () => {
  return (
    <Container>
      <TodoContainer />
    </Container>
  );
};

export default DashBoard;

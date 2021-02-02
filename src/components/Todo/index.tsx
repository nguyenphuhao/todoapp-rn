import React, { useState } from 'react';
import {
  ListRenderItem,
  FlatList,
  TouchableOpacity,
  Platform,
} from 'react-native';

import ITodo from '../../types/ComponentTypes';

import {
  Header,
  HeaderText,
  SearchInput,
  AddInput,
  Container,
  TodoItem,
  AddNew,
  DeleteIcon,
  FlatViewContainer,
  ActionContainer,
  Keyboard,
  EmptyTextContainer,
} from './styled';
import { Text } from '../../styled/components';
import Icon from 'react-native-vector-icons/FontAwesome';

interface TodoProps {
  data: ITodo[];
  onSearch: (keyword: string) => void;
  onAdd: (title: string) => void;
  onDelete: (id: number) => void;
}

const Todo: React.FC<TodoProps> = ({ data, onSearch, onAdd, onDelete }) => {
  const [todoValue, setTodoValue] = useState<string>('');
  const [searchText, setSearchText] = useState<string>('');

  const handleAdd = () => {
    onAdd(todoValue);
    setTimeout(() => {
      setTodoValue('');
    }, 100);
  };

  const renderTodoItem: ListRenderItem<ITodo> = ({ item }) => {
    const { id, title, isCompleted } = item;
    return (
      <TodoItem>
        <Text>{title}</Text>
        <TouchableOpacity onPress={() => onDelete(id)}>
          <DeleteIcon>
            <Icon name="trash" size={25} color={'#fff'} />
          </DeleteIcon>
        </TouchableOpacity>
      </TodoItem>
    );
  };

  return (
    <Keyboard behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Container>
        <Header>
          <HeaderText>TO-DO</HeaderText>
          <SearchInput
            onChangeText={(text) => {
              setSearchText(text);
              setTimeout(() => {
                onSearch(text);
              }, 50);
            }}
            value={searchText}
            placeholder="Search..."
            placeholderTextColor="#ffffff"
          />
        </Header>
        <FlatViewContainer>
          <FlatList<ITodo>
            data={data}
            renderItem={renderTodoItem}
            keyExtractor={(item) => {
              return item.id.toString();
            }}
            ListEmptyComponent={() => (
              <EmptyTextContainer>
                <Text>Put your todo</Text>
              </EmptyTextContainer>
            )}
          />
        </FlatViewContainer>
        <ActionContainer>
          <AddInput
            onChangeText={setTodoValue}
            value={todoValue}
            placeholder="Enter new todo..."
            placeholderTextColor="#ffffff"
          />
          <TouchableOpacity onPress={() => handleAdd()}>
            <AddNew>
              <Icon name="plus" size={35} color={'#fff'} />
            </AddNew>
          </TouchableOpacity>
        </ActionContainer>
      </Container>
    </Keyboard>
  );
};

export default Todo;

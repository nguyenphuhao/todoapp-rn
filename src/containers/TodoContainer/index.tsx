/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todo from '../../components/Todo';
import { Text } from '../../styled/components';
import RootState from '../../types/StateTypes';
import TodoActionNames from '../../services/Todo/actions';
import { ITodo } from '../../types/ComponentTypes';
import { IAddTodoAction, IDeleteTodoAction } from '../../types/ActionTypes';
import Loading from '../../components/Loading';

const TodoContainer: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.todos.data);
  const isLoading = useSelector((state: RootState) => state.todos.isLoading);

  const fetchTodoList = (title?: string): void => {
    dispatch({ type: TodoActionNames.FETCH_REQUESTED, payload: { title } });
  };

  useEffect(() => {
    fetchTodoList();
  }, []);
  const onAdd = (title: string) => {
    const todo: ITodo = {
      id: data && data.length ? data.length : 0,
      title,
      isCompleted: false,
    };
    dispatch({
      type: TodoActionNames.ADD_REQUESTED,
      payload: { newTodo: todo },
    } as IAddTodoAction);
  };

  const onDelete = async (id: number) => {
    dispatch({
      type: TodoActionNames.DELETE_REQUESTED,
      payload: { id },
    } as IDeleteTodoAction);
  };
  return (
    <>
      <Loading visible={isLoading} />
      <Todo
        data={data}
        onAdd={onAdd}
        onDelete={onDelete}
        onSearch={fetchTodoList}
      /></>
  );
};
export default TodoContainer;

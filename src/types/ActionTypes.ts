import { ITodo } from './ComponentTypes';

export interface ITodoAction {
  type: string;
}

export interface IAddTodoAction extends ITodoAction {
  payload: {
    newTodo: ITodo;
  };
}

export interface IDeleteTodoAction extends ITodoAction {
  payload: {
    id: number;
  };
}

export interface IFetchTodoAction extends ITodoAction {
  payload: {
    data?: ITodo[];
    title?: string;
  };
}

export interface ITodoFailed extends ITodoAction {
  payload: {
    error: string;
  };
}

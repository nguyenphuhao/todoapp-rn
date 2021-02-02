import { ITodoAction } from '../../types/ActionTypes';
import todoSlice from './slices';

enum ActionNames {
  ACTION_NAME = 'todo',

  ADD_REQUESTED = 'todo/addRequested',
  FETCH_REQUESTED = 'todo/fetchRequested',
  UPDATE_REQUESTED = 'todo/updateRequested',
  DELETE_REQUESTED = 'todo/deleteRequested',

  ADD = 'add',
  UPDATE = 'update',
  DELETE = 'delete',
  FETCH = 'fetch',

  ADD_SUCCESS = 'addSuccess',
  UPDATE_SUCCESS = 'updateSuccess',
  DELETE_SUCCESS = 'deleteSuccess',
  FETCH_SUCCESS = 'fetchSuccess',

  ADD_FAILED = 'addFailed',
  UPDATE_FAILED = 'updateFailed',
  DELETE_FAILED = 'deleteFailed',
  FETCH_FAILED = 'fetchFailed',
}

export default ActionNames;

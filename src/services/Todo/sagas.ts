import { put, takeEvery, takeLatest, call, delay } from 'redux-saga/effects';
import {
  addTodo,
  deleteTodo,
  getTodoList,
} from '../../models/TodoAsyncStorage';
import {
  IAddTodoAction,
  IDeleteTodoAction,
  IFetchTodoAction,
} from '../../types/ActionTypes';
import TodoActionNames from './actions';
import { actions } from './slices';

function* fetchTodoSaga(action: IFetchTodoAction) {
  try {
    yield put(actions.fetch());
    const data = yield call(getTodoList, action.payload?.title);
    yield put(actions.fetchSuccess({ data }));
  } catch (error) {
    yield put(actions.fetchFailed({ error: 'Unable to get todo list' }));
  }
}

function* addTodoSaga(action: IAddTodoAction) {
  try {
    yield put(actions.add());
    yield call(addTodo, action.payload.newTodo);
  } catch (error) {
    yield put(actions.addFailed({ error: 'Unable to add todo list' }));
  }
  yield call(fetchTodoSaga, { payload: { title: '' } } as IFetchTodoAction);
}

function* deleteTodoSaga(action: IDeleteTodoAction) {
  try {
    yield put(actions.delete());
    yield call(deleteTodo, action.payload.id);
  } catch (error) {
    yield put(actions.deleteFailed({ error: 'Unable to delete this item' }));
  }
  yield call(fetchTodoSaga, { payload: { title: '' } } as IFetchTodoAction);
}

export function* watchAddTodo() {
  yield takeEvery(TodoActionNames.ADD_REQUESTED, addTodoSaga);
  yield takeEvery(TodoActionNames.DELETE_REQUESTED, deleteTodoSaga);
  yield takeLatest(TodoActionNames.FETCH_REQUESTED, fetchTodoSaga);
}

import { watchAddTodo } from './Todo/sagas';
import { all } from 'redux-saga/effects';
export default function* rootSaga() {
  yield all([watchAddTodo()]);
}

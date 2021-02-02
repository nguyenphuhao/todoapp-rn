import { combineReducers } from 'redux';
import todoSlice from './Todo/slices';

const rootReducer = combineReducers({
  todos: todoSlice.reducer,
});

export default rootReducer;

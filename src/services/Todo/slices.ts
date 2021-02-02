import { createSlice } from '@reduxjs/toolkit';
import { IFetchTodoAction, ITodoFailed } from '../../types/ActionTypes';
import { ITodoState } from '../../types/StateTypes';
import TodoActionNames from './actions';

const initialState: ITodoState = {
  data: [],
  isLoading: true,
  selectedTodo: null,
  newTodo: null,
  error: null,
};

const todoSlice = createSlice({
  name: TodoActionNames.ACTION_NAME,
  initialState,
  reducers: {
    [TodoActionNames.FETCH]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [TodoActionNames.FETCH_SUCCESS]: (state, action: IFetchTodoAction) => {
      state.isLoading = false;
      state.data = action.payload.data || [];
    },
    [TodoActionNames.FETCH_FAILED]: (state, action: ITodoFailed) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },

    [TodoActionNames.ADD]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [TodoActionNames.ADD_SUCCESS]: (state) => {
      state.isLoading = false;
    },
    [TodoActionNames.ADD_FAILED]: (state, action: ITodoFailed) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },

    [TodoActionNames.UPDATE]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [TodoActionNames.UPDATE_SUCCESS]: (state) => {
      state.isLoading = false;
    },
    [TodoActionNames.UPDATE_FAILED]: (state, action: ITodoFailed) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },

    [TodoActionNames.DELETE]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [TodoActionNames.DELETE_SUCCESS]: (state) => {
      state.isLoading = false;
    },
    [TodoActionNames.DELETE_FAILED]: (state, action: ITodoFailed) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },
  },
});

export const actions = todoSlice.actions;
export const reducer = todoSlice.reducer;
export default todoSlice;

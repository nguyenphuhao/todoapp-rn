import rootReducer from '../services/rootReducer';
import ITodo from './ComponentTypes';

export interface ITodoState {
  data: ITodo[];
  newTodo: ITodo | null;
  selectedTodo: ITodo | null;
  isLoading: boolean;
  error: string | null;
}

type RootState = ReturnType<typeof rootReducer>;
export default RootState;

import ITodo from '../types/ComponentTypes';

let TODO_LIST: ITodo[] = [
  {
    id: 0,
    title: 'React Native 1',
    isCompleted: false,
  },
  {
    id: 1,
    title: 'React JS 1',
    isCompleted: false,
  },
  {
    id: 2,
    title: 'NextJS',
    isCompleted: false,
  },
];

class TodoList {
  static _instance: TodoList;
  constructor(public data: ITodo[]) {}
  static getInstance() {
    if (!this._instance) {
      this._instance = new TodoList([]);
    }
    return this._instance;
  }
}

export const getTodoList = async (keyword?: string): Promise<ITodo[]> => {
  const todo = TodoList.getInstance();
  let data = [...TODO_LIST];
  if (keyword && keyword.length) {
    data = data.filter((x: ITodo) => x.title.includes(keyword));
  }
  return data;
};

export const addTodo = async (newTodo: ITodo): Promise<void> => {
  try {
    TODO_LIST.push(newTodo);
  } catch (error) {
    console.log('Hao', error);
  }
};

export const deleteTodo = async (id: number): Promise<void> => {
  const todo = TodoList.getInstance();
  TODO_LIST = TODO_LIST.filter((x: ITodo) => x.id !== id);
};

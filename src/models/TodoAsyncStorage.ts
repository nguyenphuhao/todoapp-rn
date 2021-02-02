import AsyncStorage from '@react-native-community/async-storage';
import { ITodo } from '../types/ComponentTypes';

const TODO_LIST_KEY = '@TODO_LIST_KEY';

async function setData(key: string, data: any[]): Promise<void> {
  const jsonValue = JSON.stringify(data);
  await AsyncStorage.setItem(key, jsonValue);
}

async function getData(key: string): Promise<ITodo[]> {
  const str = await AsyncStorage.getItem(key);
  if (str) {
    const data = JSON.parse(str) as ITodo[];
    return data;
  }
  return [];
}

export const getTodoList = async (keyword?: string): Promise<ITodo[]> => {
  let data = await getData(TODO_LIST_KEY);
  if (keyword && keyword.length) {
    data = data.filter((x: ITodo) => x.title.includes(keyword));
  }
  return data;
};

export const addTodo = async (newTodo: ITodo): Promise<void> => {
  try {
    const data = await getData(TODO_LIST_KEY);
    data.unshift(newTodo);
    await setData(TODO_LIST_KEY, data);
  } catch (error) {
    console.log('Hao', error);
  }
};

export const deleteTodo = async (id: number): Promise<void> => {
  let data = await getData(TODO_LIST_KEY);
  data = data.filter((x: ITodo) => x.id !== id);
  setData(TODO_LIST_KEY, data);
};

import {
  ADD_TODO,
  DELETE_TODO,
  CHANGE_STATUS_TODO,
  FILTER_TODOS,
  GET_TODOS,
  SET_TODOS
} from '../types';
import { v4 as uuidv4 } from 'uuid';

export const addTodo = (title) => {
  const newTodo = {
    id: uuidv4(),
    title,
    createdAt: new Date(),
    checked: false
  };
  return { type: ADD_TODO, payload: newTodo };
};
export const deleteTodo = (id) => ({ type: DELETE_TODO, payload: id });
export const changeStatusTodo = (id) => ({ type: CHANGE_STATUS_TODO, payload: id });
export const filterTodos = (filter) => ({ type: FILTER_TODOS, payload: filter });
export const getTodos = (todos) => ({ type: GET_TODOS, payload: todos });
export const setTodos = (todos) => ({ type: SET_TODOS, payload: todos });

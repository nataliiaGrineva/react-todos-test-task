import {
  ADD_TODO,
  CHANGE_STATUS_TODO,
  GET_TODOS,
  SET_TODOS,
  DELETE_TODO,
  FILTER_TODOS
} from '../types';

const initialState = {
  todos: [],
  filter: 'all'
};

const todos = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TODO: {
      const newTodos = [payload, ...state.todos];
      localStorage.setItem('TODOS', JSON.stringify(newTodos));
      return {
        ...state,
        todos: newTodos
      };
    }
    case GET_TODOS:
      return { ...state, todos: payload };
    case CHANGE_STATUS_TODO: {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === payload) {
          return {
            ...todo,
            checked: !todo.checked
          };
        }
        return todo;
      });

      const indexTodo = newTodos.indexOf(newTodos.find((item) => item.id === payload));
      const [removedTodo] = newTodos.splice(indexTodo, 1);

      if (removedTodo.checked) {
        newTodos.push(removedTodo);
      } else {
        newTodos.unshift(removedTodo);
      }

      localStorage.setItem('TODOS', JSON.stringify(newTodos));

      return {
        ...state,
        todos: newTodos
      };
    }
    case SET_TODOS: {
      localStorage.setItem('TODOS', JSON.stringify(payload));

      return {
        ...state,
        todos: payload
      };
    }
    case DELETE_TODO: {
      const newTodos = state.todos.filter((todo) => todo.id !== payload);
      localStorage.setItem('TODOS', JSON.stringify(newTodos));

      return {
        ...state,
        todos: newTodos
      };
    }
    case FILTER_TODOS:
      return {
        ...state,
        filter: payload
      };
    default:
      return { ...state };
  }
};

export default todos;

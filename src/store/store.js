import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import todos from './reducers/todos';
import photos from './reducers/photos';

const rootReducer = combineReducers({ todos, photos });

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

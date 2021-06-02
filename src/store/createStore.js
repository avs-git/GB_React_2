import { createStore, combineReducers } from 'redux';
import { conversations } from './conversations';
import { messages } from './messages';

const reducers = combineReducers({ conversations, messages });

export const store = createStore(reducers);

import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage
import { conversations } from './conversations';
import { messages } from './messages';
import { gists } from './gists';
import { botAnswer } from './middleware';

const reducers = combineReducers({ conversations, messages, gists });

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  persistedReducer,
  compose(applyMiddleware(thunk, botAnswer)),
);

export const persistor = persistStore(store);

import { conversations as conversationsStatic } from '@static';
import { CONVERSATIONS_FETCH } from './types';

const initialState = conversationsStatic;

export const conversations = (state = initialState, action) => {
  switch (action.type) {
    case CONVERSATIONS_FETCH:
      return action.payload;
    default:
      return state;
  }
};

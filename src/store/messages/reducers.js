import { messages as messagesStatic } from '@static';
import { MESSAGES_FETCH, MESSAGE_SEND } from './types';

const initialState = messagesStatic;

export const messages = (state = initialState, action) => {
  switch (action.type) {
    case MESSAGES_FETCH:
      return [...action.payload];

    case MESSAGE_SEND:
      return {
        ...state,
        [action.conversationId]: [
          ...state[action.conversationId],
          action.payload,
        ],
      };
    default:
      return state;
  }
};

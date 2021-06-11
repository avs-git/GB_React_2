import { fetchMessagesUtil } from '@utils';
import { MESSAGES_FETCH, MESSAGE_SEND } from './types';

export const fetchInitialMessages = (conversationId) => {
  const payload = fetchMessagesUtil(conversationId) || [];

  return {
    type: MESSAGES_FETCH,
    payload,
  };
};

export const sendMessage = ({ conversationId, payload }) => {
  return {
    type: MESSAGE_SEND,
    conversationId,
    payload,
  };
};

import { fetchConversationsUtil } from '@utils';
import { CONVERSATIONS_FETCH } from './types';

export const fetchConversations = () => {
  const payload = fetchConversationsUtil();

  return {
    type: CONVERSATIONS_FETCH,
    payload,
  };
};

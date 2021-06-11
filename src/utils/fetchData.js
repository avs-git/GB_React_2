import { conversations, messages } from '@app/static';

export const fetchConversationsUtil = () => conversations;

export const fetchMessagesUtil = (conversationId) =>
  messages[conversationId] || [];

import { MESSAGE_SEND } from '@store/messages/types';
import { BOT_NAME, botReplics } from '@static';
import { sendMessage } from '@store/messages';
import { randomInRange } from '@utils';

const getBotReplic = () => botReplics[randomInRange(0, botReplics.length - 1)];

export const botAnswer = (store) => (next) => (action) => {
  if (action.type === MESSAGE_SEND && action.payload.author !== BOT_NAME) {
    setTimeout(() => {
      store.dispatch(
        sendMessage({
          conversationId: action.conversationId,
          payload: {
            author: BOT_NAME,
            text: `${getBotReplic()} ${action.payload.author}`,
            id: +new Date(),
          },
        }),
      );
    }, 200);
  }
  return next(action);
};

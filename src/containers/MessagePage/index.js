import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { randomInRange, BOT_NAME, botReplics } from '@utils';

import Messages from '@components/Messages';
import MessageInput from '@components/MessageInput';

// заглушка. Потом здесь будем получать уже какие-то сообщения с сервера
const messages = [
  {
    id: 1,
    author: 'Miguel',
    text: 'Ola!',
  },
  {
    id: 2,
    author: 'Bjorn',
    text: 'Hi!',
  },
  {
    id: 3,
    author: 'Stitch',
    text: 'Aloha!',
  },
  {
    id: 4,
    author: 'Иван',
    text: 'Привет!',
  },
];

const MessagePage = (props) => {
  const {
    user: { name },
  } = props;
  const [messageList, setMessageList] = useState(messages);

  const handleAddMessage = ({ messageText, author = name }) => {
    // Берём максимальный айдишник из массива и прибавляем 1. Потом будем получать айдишник сообщения с сервера
    const id =
      [...messageList].sort(({ id: id1 }, { id: id2 }) => id2 - id1)[0].id + 1;

    setMessageList([
      ...messageList,
      {
        author,
        id,
        text: messageText,
      },
    ]);
  };

  const getBotReplic = () =>
    botReplics[randomInRange(0, botReplics.length - 1)];

  const addBotAnswer = () => {
    const lastAuthorName = messageList[messageList.length - 1].author;
    if (lastAuthorName === BOT_NAME) return;

    handleAddMessage({
      author: BOT_NAME,
      messageText: `${getBotReplic()} ${lastAuthorName}`,
    });
  };

  useEffect(addBotAnswer, [messageList]);

  return (
    <div>
      <Messages messages={messageList} />
      <MessageInput onSend={handleAddMessage} />
    </div>
  );
};

MessagePage.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default MessagePage;

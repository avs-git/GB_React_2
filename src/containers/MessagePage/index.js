import React, { useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { sendMessage } from '@store/messages';

import Messages from '@components/Messages';
import MessageInput from '@components/MessageInput';
import { useStyles } from './styles';

const MessagePage = (props) => {
  const {
    user: { name },
  } = props;
  const { conversationId } = useParams();
  const dispatch = useDispatch();

  const messagesWrapperRef = useRef(null);

  const getMessagesSelectorCb = useCallback(
    (state) => state.messages[conversationId],
    [conversationId],
  );

  const messageList = useSelector((state) =>
    getMessagesSelectorCb(state, conversationId),
  );

  const scrollToLastMessage = () => {
    if (!messagesWrapperRef.current) return;

    const { scrollHeight } = messagesWrapperRef.current;
    messagesWrapperRef.current.scrollTo({
      top: scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  };

  const handleAddMessage = ({ messageText, author = name }) => {
    dispatch(
      sendMessage({
        conversationId,
        payload: {
          author,
          id: +new Date(),
          text: messageText,
        },
      }),
    );
  };

  useEffect(scrollToLastMessage, [messageList]);

  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.messagesWrapper} ref={messagesWrapperRef}>
        <Messages messages={messageList} />
      </div>
      <div className={classes.inputWrapper}>
        <MessageInput onSend={handleAddMessage} />
      </div>
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

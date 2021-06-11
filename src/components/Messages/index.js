import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

import { useStyles } from './styles';

const Messages = (props) => {
  const { messages } = props;

  const classes = useStyles();

  const renderMessages = () =>
    messages.map(({ author, id, text }) => (
      <Message key={id} author={author} text={text} />
    ));

  return <div className={classes.messageWrapper}>{renderMessages()}</div>;
};

Messages.propTypes = {
  messages: PropTypes.array,
};

Messages.defaultProps = {
  messages: [],
};

export default Messages;

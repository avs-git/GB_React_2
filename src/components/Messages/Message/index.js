import React from 'react';
import PropTypes from 'prop-types';

import { BOT_NAME } from '@utils';

// eslint-disable-next-line no-unused-vars
import styles from './styles.css';

const Message = (props) => {
  const { author, text } = props;
  const messageClassName = author === BOT_NAME ? 'chatBotAnswer' : null;

  return (
    <div className={messageClassName}>
      <span>{author}: </span>
      <span>{text}</span>
    </div>
  );
};

Message.propTypes = {
  author: PropTypes.string,
  text: PropTypes.string,
};

Message.defaultProps = {
  author: '__incognito__',
  text: '',
};

export default Message;

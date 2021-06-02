import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

import SendIcon from '@material-ui/icons/Send';

import { useStyles } from './styles';

const MessageInput = (props) => {
  const { onSend } = props;
  const [value, setValue] = useState('');

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;

    onSend({ messageText: value });
    setValue('');
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        classes={{
          root: classes.root,
        }}
        endAdornment={
          <InputAdornment position="end">
            <SendIcon onClick={handleSubmit} />
          </InputAdornment>
        }
        placeholder="Введите сообщение"
        value={value}
        onChange={handleChange}
      />
    </form>
  );
};

MessageInput.propTypes = {
  onSend: PropTypes.func,
};
MessageInput.defaultProps = {
  onSend: () => {},
};

export default MessageInput;

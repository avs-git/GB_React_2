import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography } from '@material-ui/core';

import { BOT_NAME } from '@static';

import { useStyles } from './styles';

const Message = (props) => {
  const { author, text } = props;

  const classes = useStyles({
    isOutgoingMessage: author !== BOT_NAME,
  });

  return (
    <Card className={classes.message}>
      <CardContent>
        <Typography>{author}: </Typography>
        <Typography>{text}</Typography>
      </CardContent>
    </Card>
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

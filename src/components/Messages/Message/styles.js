import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  message: {
    margin: '5px 0',
    alignSelf: ({ isOutgoingMessage }) => (isOutgoingMessage ? 'end' : 'start'),
    background: ({ isOutgoingMessage }) =>
      isOutgoingMessage ? '#EEE' : '#CCC',
  },
}));

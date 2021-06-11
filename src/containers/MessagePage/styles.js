import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  messagesWrapper: {
    flexGrow: 1,
    overflowY: 'auto',
    height: 'calc(100vh - 150px)',
    padding: '0 20px',
  },
  inputWrapper: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    padding: '12px 24px',
    backgroundColor: '#FFF',
    borderTop: '1px solid #dedede',
    zIndex: 10,
  },
}));

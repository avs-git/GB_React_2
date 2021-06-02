import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';

import { useStyles } from './styles';

export default function NavBar(props) {
  const { items } = props;

  const classes = useStyles();
  const { conversationId } = useParams();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          {items.map(({ title, id }) =>
            !title || !id ? null : (
              <Link to={`/conversations/${id}`} key={id}>
                <ListItem button={true} selected={id === conversationId}>
                  <ListItemIcon>
                    <SendIcon />
                  </ListItemIcon>
                  <ListItemText primary={title} />
                </ListItem>
              </Link>
            ),
          )}
        </List>
      </div>
    </Drawer>
  );
}

NavBar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
};

NavBar.defaultTypes = {
  items: [
    {
      title: '',
      id: 0,
    },
  ],
};

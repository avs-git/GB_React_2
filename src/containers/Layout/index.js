import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import NavBar from '@components/NavBar';
import PropTypes from 'prop-types';

import { useStyles } from './styles';

export default function Layout(props) {
  const { navItems, isEmpty, children } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap={true}>
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <NavBar items={navItems} />
      <main className={classes.content}>
        <Toolbar />
        {isEmpty ? (
          <div>
            <h1>Страница не найдена. 404</h1>
          </div>
        ) : (
          children
        )}
      </main>
    </div>
  );
}

Layout.propTypes = {
  isEmpty: PropTypes.bool,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
  children: PropTypes.node,
};

Layout.defaultTypes = {
  isEmpty: false,
  navItems: [
    {
      title: '',
      id: 0,
    },
  ],
  children: null,
};

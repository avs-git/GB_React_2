import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Router from '@containers/Router';

import { store } from '@store';

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

render(<App />, document.getElementById('root'));

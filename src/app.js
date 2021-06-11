import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Router from '@containers/Router';

import { store, persistor } from '@store';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
};

render(<App />, document.getElementById('root'));

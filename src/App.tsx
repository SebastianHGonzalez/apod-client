import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './Store';
import { APODClient } from './Components';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <APODClient />
      </Provider>
    </div>
  );
}

export default App;

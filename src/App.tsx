import React, { Component } from 'react';

import { APODClient } from './Components';
import { APODApiClient } from './Clients';

import config from './Config';


function App() {
  const apodApiClient = new APODApiClient(config.apodApiClient);

  return (
    <div className="App">
      <APODClient apodApiClient={apodApiClient} />
    </div>
  );
}

export default App;

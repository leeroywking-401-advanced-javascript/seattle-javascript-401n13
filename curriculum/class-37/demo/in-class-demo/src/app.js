import React from 'react';
import {Provider} from 'react-redux';

import Players from './components/players.js';

import heyBrian from './state/store/index.js';

const brook = heyBrian();

function App() {
  return (
    <Provider store={brook}>
      <Players />
    </Provider>
  );
}

export default App;

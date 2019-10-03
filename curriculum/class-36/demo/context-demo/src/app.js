import React from 'react';

import CounterProvider from './state/context/counter/counter-context.js'
import NameProvider from './state/context/people/people-context.js'
import Counter from './components/counter.js';
import Person from './components/person.js';

function App() {
  return (
    <CounterProvider>
      <NameProvider>
        <Person />
      <Counter />
    </NameProvider>
    </CounterProvider>
  );
}

export default App;

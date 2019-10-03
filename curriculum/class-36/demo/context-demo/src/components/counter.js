import React, {useContext} from 'react';

import {CounterContext} from '../state/context/counter/counter-context.js';

function Counter(props) {

  const context = useContext(CounterContext);

  return (
    <>
      <button onClick={context.decrement}>-</button>
      <span>{context.count}</span>
      <button onClick={context.increment}>+</button>
    </>
  );

}

export default Counter;

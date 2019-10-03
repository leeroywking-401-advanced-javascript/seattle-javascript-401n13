import React, {useContext} from 'react';

import {NameContext} from '../state/context/people/people-context.js';

function Person(props) {

  const context = useContext(NameContext);

  return (
    <header>
      <h1>{context.name}</h1>
      <button onClick={context.uppercase}>Upper</button>
      <button onClick={context.lowercase}>Lower</button>
      <form onSubmit={(e) => e.preventDefault()}>
        <input onChange={(e) => context.set(e.target.value)} />
      </form>
    </header>
  );

}

export default Person;

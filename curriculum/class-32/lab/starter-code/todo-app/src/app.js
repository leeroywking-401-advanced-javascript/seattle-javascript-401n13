import React from 'react';

import Shopping from './shopping.js';
import Todo from './todo.js';
import TodoList from './todo-list.js';

import './app.scss';

function App(props) {
  return (
    <section>
      <div>
        <Todo />
      </div>
      <div>
        <TodoList />
      </div>
    </section>
  );
}

export default App;

import React from 'react';

import './styles.css';

import Message from './components/message.js';

class App extends React.Component {

  render() {
    return (
      <Message text='this is our awesome thang' />
    );
  }
}

export default App;

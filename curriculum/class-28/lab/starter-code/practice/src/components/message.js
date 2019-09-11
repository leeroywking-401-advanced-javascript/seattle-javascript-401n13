import React from 'react';

class Message extends React.Component {
  render(props) {
    return <h1>{props.text}</h1>
  }
}

export default Message;

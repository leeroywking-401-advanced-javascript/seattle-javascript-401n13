import React from 'react';
import EditorWithFunctionalContext from './functional-context.js';
class Content extends React.Component {

  render() {
    return (
      <>
        <h2>Functional Context</h2>
        <EditorWithFunctionalContext />
      </>
    );
  }
}

export default Content;

import React, { useContext } from 'react';
import { SettingsContext } from '../settings/site-context.js';

const Content = (props) => {

  const context = useContext(SettingsContext);

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
    <h1>{context.title}</h1>
    <form onSubmit={handleSubmit}>
      <h2>Site Settings</h2>
        <span>Site Title</span>
        <input
          placeholder="Site Title"
          name="title"
          onChange={e => context.changeTitleTo(e.target.value)}
          />
          </form>
          </div>
    );
};

export default Content;

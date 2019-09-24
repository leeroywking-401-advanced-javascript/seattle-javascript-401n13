import React from 'react';

import useForm from './hooks/form.js';

function Todo(props) {
  const categories = ['Housework', 'Schoolwork', 'Fun'];
  const [handleChange, handleSubmit] = useForm(saveFormDataToServer);

  function saveFormDataToServer(formData) {
    let json = JSON.stringify(formData);
    fetch(process.env.REACT_APP_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: json,
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(console.error);
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <label>
        <input
          onChange={handleChange}
          placeholder="What do you want to do"
          name="text"
          type="text"
        />
      </label>
      <label>
        <span>Category</span>
        <select onChange={handleChange} name="aisle">
          <option />
          {categories.map((category, idx) => (
            <option value={category} key={idx}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <label>
        <input
          onChange={handleChange}
          placeholder="Dte"
          name="due"
          type="date"
        />
      </label>
      <label>
        <input
          onChange={handleChange}
          placeholder="Assignee"
          name="assignee"
          type="text"
        />
      </label>
      <label>
        <input type="range" name="difficulty" min="1" max="11" />
      </label>
      <label>
        <input
          onChange={handleChange}
          name="complete"
          type="radio"
          value="true"
        />
        Yes
      </label>
      <label>
        <input
          onChange={handleChange}
          name="complete"
          type="radio"
          value="false"
        />
        No
      </label>
      <button>Add to the list</button>
    </form>
  );
}

export default Todo;

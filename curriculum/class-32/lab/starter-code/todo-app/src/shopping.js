import React from 'react';

import useForm from './hooks/form.js';

const API = 'https://api-401n13.herokuapp.com/api/v1/shopping';

function Shopping(props) {
  const [handleChange, handleSubmit] = useForm(saveFormDataToServer);
  const aisles = ['Cat food', 'Wine', 'Meals for One'];

  function saveFormDataToServer(formData) {
    let json = JSON.stringify(formData);
    fetch(API, {
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
      method="post"
      action="https://api-401n13.herokuapp.com/api/v1/shopping"
    >
      <label>
        <input
          onChange={handleChange}
          placeholder="Item"
          name="item"
          type="text"
        />
      </label>
      <label>
        <span>Aisle</span>
        <select onChange={handleChange} name="aisle">
          <option />
          {aisles.map((aisle, idx) => (
            <option value={aisle} key={idx}>
              {aisle}
            </option>
          ))}
        </select>
      </label>
      <label>
        <input
          onChange={handleChange}
          placeholder="Store Name"
          name="store"
          type="text"
        />
      </label>
      <label>
        <input
          onChange={handleChange}
          name="purchased"
          type="radio"
          value="true"
        />
        Yes
      </label>
      <label>
        <input
          onChange={handleChange}
          name="purchased"
          type="radio"
          value="false"
        />
        No
      </label>
      <button>Add to the list</button>
    </form>
  );
}

export default Shopping;

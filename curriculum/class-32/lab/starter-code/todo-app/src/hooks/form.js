import { useState } from 'react';

const useForm = callback => {
  const [values, setValues] = useState({});

  const handleChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // event.target.reset();
    callback(values);
  };

  return [handleChange, handleSubmit, values];
};

export default useForm;

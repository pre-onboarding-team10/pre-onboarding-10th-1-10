import { useState } from 'react';

const useInput = () => {
  const [values, setValues] = useState({ email: '', password: '' });

  const handleChange = event => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  return {
    values,
    handleChange,
  };
};

export default useInput;

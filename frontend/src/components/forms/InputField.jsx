// src/components/form/InputField.jsx
import React from 'react';

const InputField = ({ type, name, placeholder, value, onChange, required }) => {
  return (
    <div className="input-field">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="input"
      />
    </div>
  );
};

export default InputField;

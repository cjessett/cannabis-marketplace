import React from 'react';

export default function Input({ id, type, label, placeholder, value, onChange, classes, pattern, disabled, required }) {
  return (
    <div className={classes}>
      {!disabled && <label htmlFor={id}>{label || placeholder}</label>}
      <input
        id={id}
        type={type}
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        required={required}
        disabled={disabled}
        pattern={pattern}
      />
    </div>
  );
}
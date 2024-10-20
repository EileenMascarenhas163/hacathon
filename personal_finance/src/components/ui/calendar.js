import React from 'react';

export const Calendar = ({ onChange, value, className }) => {
  return (
    <input
      type="date"
      value={value}
      onChange={onChange}
      className={`border p-2 rounded ${className}`}
    />
  );
};
// src/components/ui/label.js
import React from 'react';

export const Label = ({ htmlFor, children, className }) => {
  return (
    <label htmlFor={htmlFor} className={`block text-sm font-medium to-blue-600 ${className}`}>
      {children}
    </label>
  );
};
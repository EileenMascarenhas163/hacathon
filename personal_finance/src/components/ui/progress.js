// src/components/ui/progress.js
import React from 'react';

export const Progress = ({ value, max = 100, className }) => {
  return (
    <progress value={value} max={max} className={`w-full ${className}`}>
      {value}%
    </progress>
  );
};
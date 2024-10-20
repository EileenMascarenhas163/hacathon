// src/components/ui/card.js
import React from 'react';

export const Card = ({ children, className }) => {
  return (
    <div className={`shadow-md rounded-lg p-4 bg-white ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className }) => {
  return <div className={`border-b pb-2 mb-4 ${className}`}>{children}</div>;
};

export const CardTitle = ({ children, className }) => {
  return <div className={`text-lg font-semibold ${className}`}>{children}</div>;
};

export const CardContent = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};
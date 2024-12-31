// src/components/ui/card.jsx
import React from 'react';


export const Card = ({ children, className }) => {
  return (
    <div className={`bg-gray-800 p-6 rounded-lg shadow-lg ${className}`}>
      {children}
    </div>
  );
};

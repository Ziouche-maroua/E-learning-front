// LeftPart.jsx
import React from 'react';

const LeftPart = () => {
  return (
    <div className="w-1/3 border border-blue-800 shadow-blue-800 p-4 mx-4 my-5">
      <ul className="space-y-5">
        <li className="bg-gray-200">Definition</li>
        <li className="bg-gray-300">Example</li>
        <li className="bg-gray-400">Theorem</li>
        <li className="bg-gray-500">Take a quiz</li>
      </ul>
    </div>
  );
};

export default LeftPart;

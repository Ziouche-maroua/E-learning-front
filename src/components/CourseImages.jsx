// CourseImages.jsx

import React from 'react';

const ChapterImage = ({ path }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-16 h-16 text-blue-500"
  >
    <path
      fillRule="evenodd"
      d={path}
      clipRule="evenodd"
    />
  </svg>
);

export default ChapterImage;

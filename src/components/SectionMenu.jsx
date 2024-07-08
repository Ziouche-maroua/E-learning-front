import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const SectionMenu = ({ chapter, sections }) => {
  const [showSections, setShowSections] = useState(false);
  const location = useLocation();

  const toggleSections = () => {
    setShowSections(!showSections);
  };

  return (
    <div>
      <div className={`fixed top-16 left-0 w-full lg:w-1/3 p-4 lg:ml-4 my-5 border border-blue-800 shadow-blue-800 rounded-md ${showSections ? 'block' : 'hidden lg:block'}`}>
        <h2 className="text-3xl font-serif font-extrabold text-center mb-4 relative" style={{ color: 'var(--section-title)' }}>
          {chapter.toUpperCase()}
          <span className="absolute w-full h-1 bg-gray-600 bottom-0 left-0"></span>
        </h2>
        <ul className="space-y-8">
          {sections.map((section, index) => (
            <li
              key={index}
              className={`
                ${location.pathname === section.link ? 'bg-blue-200 text-blue-600' : index === sections.length - 1 ? 'bg-yellow-200 text-black' : 'bg-gray-300 text-black'}
                p-2 rounded-md flex items-center justify-center text-center
              `}
            >
              <Link to={section.link}>{section.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="fixed bottom-16 right-4 lg:hidden">
        <button
          className="px-2 py-1 bg-blue-500 text-white rounded-md shadow-md"
          onClick={toggleSections}
        >
          {showSections ? 'Hide Sections' : 'Show Sections'}
        </button>
      </div>
    </div>
  );
};

export default SectionMenu;

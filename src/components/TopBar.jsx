import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import searchIcon from '../assets/images/search_icon.png';
import LeftSideBar from './LeftSideBar';
import DarkMode from '../DarkMode/DarkMode.js';

const TopBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebarOnHomeClick = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="fixed top-0 w-full h-16 bg-[#ffb300] flex justify-between items-center px-4 z-20">
      <div className="flex items-center">
        <Link to="/" className="text-white text-2xl font-bold flex items-center">
          <span className="text-white courgette-font">FikrSight</span>
        </Link>
      </div>
        

      {/* Adjusted placement of DarkMode component */}
      <div className="flex items-center mb-3 ml-auto"> {/* Use ml-auto to push DarkMode to the right */}
        <DarkMode />
      </div>

      <button onClick={toggleSidebarOnHomeClick} className="text-white ml-4"> {/* Adjusted margin for the button */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>

      <LeftSideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} toggleOnHomeClick={toggleSidebarOnHomeClick} />
    </div>
  );
};

export default TopBar;

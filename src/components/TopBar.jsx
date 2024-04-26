import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import searchIcon from '../assets/images/search_icon.png';
import './TopBar.css';
import LeftSideBar from './LeftSideBar';

const TopBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  
  // Toggle sidebar on home icon click
  const toggleSidebarOnHomeClick = () => {
    setShowSidebar(!showSidebar);
  };

  // Close the sidebar when clicking outside
  const closeSidebar = () => {
    if (showSidebar) {
      setShowSidebar(false);
    }
  };

  return (
    <div className="w-full h-16 bg-blue-500 flex justify-between items-center px-4">
      <div className="flex items-center space-x-2">
        {/* Pass toggleSidebarOnHomeClick as prop */}
        <button onClick={toggleSidebarOnHomeClick} className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
        </button>
        <Link to="/" className="text-white text-2xl font-bold flex items-center" onClick={closeSidebar}>
          <span className="text-white">LearnVisual</span>
        </Link>
        {/* Pass toggleSidebarOnHomeClick as prop */}
        <LeftSideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} toggleOnHomeClick={toggleSidebarOnHomeClick} />
      </div>
      <div className="flex items-center space-x-2">
        <div className="flex items-center relative">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-md pl-10 pr-4 py-2 w-96"
          />
          <div className="absolute left-3 top-2"> <img src={searchIcon} alt="Search" className="w-6 h-6" /> </div>
        </div>
      </div>
      <div>
        <div className="h-10 w-10 bg-white rounded-full"></div>
      </div>
    </div>
  );
};

export default TopBar;

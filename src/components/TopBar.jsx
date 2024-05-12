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

  return (
    <div className="w-full h-16 bg-blue-500 flex justify-between items-center px-4">
      <div className="flex items-center">

        <Link to="/" className="text-white text-2xl font-bold flex items-center">
          <span className="text-white">FikrSight</span>
        </Link>
       
       
      </div>
      <div className="flex items-center flex-grow ml-8">
        <Link to="/" className="text-white mr-4"> Home </Link>
        <Link to="/courses" className="text-white mr-4"> Courses </Link>
        <div className="flex items-center relative">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-md pl-10 pr-4 py-2 w-96"
          />
          <div className="absolute left-3 top-2"> <img src={searchIcon} alt="Search" className="w-6 h-6" /> </div>
        </div>
      </div>
      <button onClick={toggleSidebarOnHomeClick} className="text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
      <LeftSideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} toggleOnHomeClick={toggleSidebarOnHomeClick} />
    </div>
  );
};

export default TopBar;

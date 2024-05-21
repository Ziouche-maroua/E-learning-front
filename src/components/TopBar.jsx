import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import searchIcon from '../assets/images/search_icon.png';
import LeftSideBar from './LeftSideBar';

const TopBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');

  const toggleSidebarOnHomeClick = () => {

    setShowSidebar(!showSidebar);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };


  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Logic to handle search, e.g., filtering content or redirecting to a search results page
    console.log('Search Term:', searchTerm);
  };

  return (

    <div className="fixed top-0 w-full h-16 bg-blue-500 flex justify-between items-center px-4">
      <div className="flex items-center">
        <Link to="/" className="text-white text-2xl font-bold flex items-center">
          <span className="text-white">FikrSight</span>
        </Link>
      </div>


      <div className="flex items-center relative">


      <form onSubmit={handleSearchSubmit} className="flex items-center relative">

        <div style={{ position: 'relative' }}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="border border-gray-300 rounded-md pl-10 pr-4 py-2 w-96"
          />
          <img src={searchIcon} alt="Search" className="w-6 h-6 absolute top-2 left-3" />
        </div>



      </div>



      </form>

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



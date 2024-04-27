import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './LeftSideBar.css';

const LeftSideBar = ({ showSidebar, setShowSidebar, toggleOnHomeClick }) => {
  const sidebarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target) && showSidebar) {
      setShowSidebar(false);
    }
  };

  useEffect(() => {
    if (showSidebar) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSidebar]);

  // Toggle sidebar when clicking on home icon only if toggleOnHomeClick is true
  const handleTriggerClick = () => {
    if (toggleOnHomeClick) {
      setShowSidebar(!showSidebar);
    }
  };

  return (
    showSidebar && (
      <div ref={sidebarRef} className="sidebar absolute top-0 left-15 mt-16 h-96 bg-white shadow-xl">
        <ul className="text-black">
          <Link to="/MotivationPage">
            <li className="cursor-pointer mb-2">Motivation</li>
          </Link>
          {/* Add more sidebar items here */}
        </ul>
      </div>
    )
  );
};

export default LeftSideBar;

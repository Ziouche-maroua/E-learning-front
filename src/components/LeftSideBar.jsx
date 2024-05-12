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

  return (
    showSidebar && (
      <div ref={sidebarRef} className="sidebar absolute top-0 left-15 mt-16 h-76 bg-white shadow-xl">
        <ul className="text-black">
          <Link to="/MotivationPage">
            <li className="cursor-pointer mb-2">Motivation</li>
          </Link>
          <Link to="/SettingsPage">
            <li className="cursor-pointer mb-2 ">Settings</li>
          </Link>
          <Link to="/AccountPage">
            <li className="cursor-pointer mb-2 ">Account</li>
          </Link>
          <Link to="/ProfilePage">
            <li className="cursor-pointer mb-2 ">Profile</li>
          </Link>
          <Link to="/LogoutPage">
            <li className="cursor-pointer mb-2 border-b border-solid border-black">Log out</li>
          </Link>
        </ul>
      </div>
    )
  );
};

export default LeftSideBar;

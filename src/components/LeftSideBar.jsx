import React, { useEffect, useRef } from 'react';

import { Link, useLocation } from 'react-router-dom';



const LeftSideBar = ({ showSidebar, setShowSidebar, toggleOnHomeClick }) => {
  const sidebarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target) && showSidebar) {
      setShowSidebar(false);
    }
  };
=
 const route= useLocation()
 console.log(route.pathname);


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

      <div ref={sidebarRef} className="sidebar fixed top-16 right-0 mt-1 mr-6 h-76 w-48 bg-white shadow-2xl z-10">
        <ul className="text-black">
         { route.pathname === "/chapter2" &&<Link to="/MotivationPage">
            <li className="cursor-pointer mb-2">Motivation</li>
          </Link>}
          <Link to="/SettingsPage">
            <li className="cursor-pointer mb-2">Settings</li>
          </Link>
          <Link to="/AccountPage">
            <li className="cursor-pointer mb-2">Account</li>
          </Link>
          <Link to="/ProfilePage">
            <li className="cursor-pointer mb-2">Profile</li>

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

import React, { useEffect, useRef } from 'react';


import { Link, useLocation } from 'react-router-dom';


const LeftSideBar = ({ showSidebar, setShowSidebar, toggleOnHomeClick }) => {
  const sidebarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target) && showSidebar) {
      setShowSidebar(false);
    }
  };


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

      <div ref={sidebarRef} className="sidebar fixed top-16 right-0 mt-1 mr-6 h-76 w-48 bg-white shadow-lg z-10 rounded-lg p-4">
        <ul className="text-black">
          { route.pathname !== "/" && <Link to="/">
            <li className="cursor-pointer mb-2">Home</li>
          </Link>}

          { route.pathname !== "/GeneralAlgebra" && <Link to="/GeneralAlgebra">
            <li className="cursor-pointer mb-2">Chapters</li>
          </Link>}
          
          <Link to="/LogoutPage">
            <li className="cursor-pointer mb-2 ">Log out</li>

          </Link>
        </ul>
      </div>
    )
  );
};

export default LeftSideBar;
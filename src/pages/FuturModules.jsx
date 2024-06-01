import React from 'react';
import TopBar from '../components/TopBar';
import futureModuleImage from '../assets/images/futurModule.jpg';

const FuturModules = () => {
  return (
    <div>
      <TopBar />
      <div className="pt-16 min-h-screen"> {/* Set minimum height to screen height */}
        <div className="container pt-16 mx-auto px-4 py-12">
          <div className="flex flex-col sm:flex-row items-center justify-start"> {/* Adjust flex direction for small screens */}
            <img
              src={futureModuleImage}
              alt="Future Module"
              className="w-48 h-auto sm:w-96 sm:h-80 rounded-lg sm:mr-8 mb-4 sm:mb-0"  // Adjusted image size for small screens
            />
            <div>
              <p className="text-2xl sm:text-4xl font-bold text-gray-800">We will provide this module as soon as possible.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuturModules;

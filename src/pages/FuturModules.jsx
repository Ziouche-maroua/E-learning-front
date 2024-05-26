import React from 'react';
import TopBar from '../components/TopBar';
import futureModuleImage from '../assets/images/futurModule.jpg';

const FuturModules = () => {
  return (
    <div>
      <TopBar />
      <div className="pt-16  min-h-screen"> {/* Set minimum height to screen height */}
        <div className="container pt-16 mx-auto px-4 py-12"> 
          <div className="flex items-center justify-start"> {/* Align items to the start */}
            <img
              src={futureModuleImage}
              alt="Future Module"
              className="w-96 h-80 rounded-lg mr-8"  // Adjusted image size
            />
            <div>
              <p className="text-4xl font-bold text-gray-800">We will provide this module as soon as possible.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuturModules;

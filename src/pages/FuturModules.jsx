import React from 'react';
import TopBar from '../components/TopBar';
import futureModuleImage from '../assets/images/futurModule.jpg';
import FloatingImage from '../components/FloatingImage';
import '../assets/styles/custom.css'; // Import the custom CSS file

const FuturModules = () => {
  return (
    <div>
      <TopBar />
      <div className="pt-16 min-h-screen"> {/* Set minimum height to screen height */}
        <div className="container pt-16 mx-auto px-4 py-12">
          <div className="flex flex-col sm:flex-row items-center justify-start"> {/* Adjust flex direction for small screens */}
          <FloatingImage
              src={futureModuleImage}
              alt="Home"
              className='w-[563.701px] h-[350px] rounded-md'
            />
            <div>
              <p className="text-2xl sm:text-4xl font-bold varblue-text">We will provide this module as soon as possible.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuturModules;

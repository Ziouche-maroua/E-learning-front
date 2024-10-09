import React from 'react';
import TopBar from '../components/TopBar';
import futureModuleImage from '../assets/images/futurModule.jpg';
import FloatingImage from '../components/Animations/FloatingImage';
import '../assets/styles/custom.css'; // Import the custom CSS file

const FuturModules = () => {
  return (
    <div>
      <TopBar />
      <div className="pt-16 min-h-screen"> {/* Set minimum height to screen height */}
        <div className="container pt-16 mx-auto px-4 py-12">
          <div className="flex flex-col sm:flex-row items-center justify-start"> {/* Adjust flex direction for small screens */}
            <div className="w-[200px] h-[200px] sm:w-[350px] sm:h-[350px] rounded-full overflow-hidden flex-shrink-0 mr-4">
              <FloatingImage
                src={futureModuleImage}
                alt="futur modules"
                className='object-cover w-full h-full'
              />
            </div>
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

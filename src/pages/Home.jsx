import React from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import algebra from '../assets/images/algebra.webp';
import algorithm from '../assets/images/algorithm.png';
import sfsd from '../assets/images/sfsd.webp';
import probability from '../assets/images/probability.webp';

const Home = () => {
  return (
    <div>
      <TopBar />
      <div className="container mx-auto px-2 pt-20 sm:pt-24"> {/* Adjusted padding top for smaller screens */}
        <span className="block text-center text-3xl sm:text-4xl font-bold mt-6 sm:mt-10 text-blue-300">A New Way To Learn <br /> & Get Knowledge</span> {/* Centered and increased font size */}
        <p className="text-base sm:text-lg my-2 sm:my-4 text-center text-[rgba(0,0,0,0.35)]">Learn new skills from the comfort of your home anywhere, anytime.</p> {/* Centered and adjusted font size */}
        <p className="text-3xl mt-10 mb-3 text-black">Explore our courses:</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Algebra Module */}
          <div className="h-auto bg-gray-100 p-8 rounded-lg shadow-md border flex flex-col justify-center items-center">
            <img src={algebra} alt="algebra module" className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4" />
            <div>
              <p className="text-xl sm:text-2xl font-semibold my-2 sm:my-4 text-center">Algebra</p>
              <p className="text-sm sm:text-base font-semibold text-center text-[rgba(103,117,183,0.55)]">The branch of mathematics dealing with vector spaces and linear mappings between these spaces, used to solve systems of linear equations ...</p>
              <Link to="/MotivationPage" className="text-sm sm:text-base font-semibold text-blue-500 underline cursor-pointer block text-center">Learn More</Link>
            </div>
          </div>
          
          {/* Algorithm Module */}
          <div className="h-auto bg-gray-100 p-8 rounded-lg shadow-md border flex flex-col justify-center items-center">
            <img src={algorithm} alt="algo module" className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4" />
            <div>
              <p className="text-xl sm:text-2xl font-semibold my-2 sm:my-4 text-center">Algorithm</p>
              <p className="text-sm sm:text-base font-semibold text-center text-[rgba(103,117,183,0.55)]">A step-by-step procedure or set of rules for solving a problem or accomplishing a task, often used in computer science and mathematics...</p>
              <p className="text-sm sm:text-base font-semibold text-blue-500 underline cursor-pointer block text-center">Learn More</p>
            </div>
          </div>
          
          {/* Probability Module */}
          <div className="h-auto bg-gray-100 p-8 rounded-lg shadow-md border flex flex-col justify-center items-center">
            <img src={probability} alt="probability module" className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4" />
            <div>
              <p className="text-xl sm:text-2xl font-semibold my-2 sm:my-4 text-center">Probability</p>
              <p className="text-sm sm:text-base font-semibold text-center text-[rgba(103,117,183,0.55)]">The branch of mathematics concerned with the likelihood of events occurring, based on the analysis of random variables and uncertainty...</p>
              <p className="text-sm sm:text-base font-semibold text-blue-500 underline cursor-pointer block text-center">Learn More</p>
            </div>
          </div>
          
          {/* File Structure and Data Structure Module */}
          <div className="h-auto bg-gray-100 p-8 rounded-lg shadow-md border flex flex-col justify-center items-center">
            <img src={sfsd} alt="sfsd module" className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4" />
            <div>
              <p className="text-xl sm:text-2xl font-semibold my-2 sm:my-4 text-center">File structure and data structure</p>
              <p className="text-sm sm:text-base font-semibold text-center text-[rgba(103,117,183,0.55)]">File structure refers to the organization and layout of data within a file, while data structure refers to the organization and storage of data ...</p>
              <p className="text-sm sm:text-base font-semibold text-blue-500 underline cursor-pointer block text-center">Learn More</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

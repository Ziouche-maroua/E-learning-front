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

      <div className="container mx-auto px-2 pt-16 lg:pt-20">
        <span className="block text-center lg:text-left text-3xl sm:text-4xl font-bold mt-6 sm:mt-10 text-blue-300">
          A New Way To Learn <br className="lg:hidden" /> & Get Knowledge
        </span>
        <p className="text-base sm:text-lg my-4 text-center lg:text-left text-[rgba(0,0,0,0.35)]">
          Learn new skills from the comfort of your home anywhere, anytime.
        </p>
        <p className="text-3xl mt-10 mb-3 text-black">Explore our courses:</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 xl:gap-10">
          {/* Algebra Module */}
          <Link to="/MotivationPage">
            <div className="h-auto bg-gray-100 p-8 rounded-lg shadow-md border flex flex-col justify-between items-center">
              <img
                src={algebra}
                alt="algebra module"
                className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4"
              />
              <div className="text-center">
                <p className="text-xl font-semibold my-2 sm:my-4">
                  Algebra
                </p>
                <p className="text-sm font-semibold text-[rgba(103,117,183,0.55)] text-left">
                  The branch of mathematics dealing with vector spaces and linear mappings between these spaces, used to solve systems of linear equations
                </p>
              
              </div>
            </div>
          </Link>

          {/* Algorithm Module */}
          <div className="h-auto bg-gray-100 p-8 rounded-lg shadow-md border flex flex-col justify-between items-center">
            <img
              src={algorithm}
              alt="algo module"
              className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4"
            />
            <div className="text-center">
              <p className="text-xl font-semibold my-2 sm:my-4">
                Algorithm
              </p>
              <p className="text-sm font-semibold text-[rgba(103,117,183,0.55)] text-left">
                A step-by-step procedure or set of rules for solving a problem or accomplishing a task, often used in computer science and mathematics
              </p>
             
            </div>
          </div>

          {/* Probability Module */}
          <div className="h-auto bg-gray-100 p-8 rounded-lg shadow-md border flex flex-col justify-between items-center">
            <img
              src={probability}
              alt="probability module"
              className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4"
            />
            <div className="text-center">
              <p className="text-xl font-semibold my-2 sm:my-4">
                Probability
              </p>
              <p className="text-sm font-semibold text-[rgba(103,117,183,0.55)] text-left">
                The branch of mathematics concerned with the likelihood of events occurring, based on the analysis of random variables and uncertainty
              </p>
             
            </div>
          </div>

          {/* File Structure and Data Structure Module */}
          <div className="h-auto bg-gray-100 p-8 rounded-lg shadow-md border flex flex-col justify-between items-center">
            <img
              src={sfsd}
              alt="sfsd module"
              className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4"
            />
            <div className="text-center">
              <p className="text-xl font-semibold my-2 sm:my-4">
                File structure and data structure
              </p>
              <p className="text-sm font-semibold text-[rgba(103,117,183,0.55)] text-left">
                File structure refers to the organization and layout of data within a file, while data structure refers to the organization and storage of data
              </p>

             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

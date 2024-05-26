import React from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Chatbox from '../components/ChatBox';  
import algebra from '../assets/images/algebra.webp';
import algorithm from '../assets/images/algorithm.png';
import sfsd from '../assets/images/sfsd.webp';
import probability from '../assets/images/probability.webp';

const Home = () => {
  return (
    <div>
      <TopBar />

      <div className="container mx-auto px-2 pt-8 lg:pt-12"> {/* Reduced padding-top */}
        <span className="block text-center lg:text-left text-3xl sm:text-4xl font-bold mt-4 sm:mt-6 text-blue-300">
          A New Way To Learn <br className="lg:hidden" /> & Get Knowledge
        </span>
        <p className="text-base sm:text-lg my-4 text-center lg:text-left text-[rgba(0,0,0,0.35)]">
          Learn new skills from the comfort of your home anywhere, anytime.
        </p>
        <p className="text-3xl mt-8 mb-3 text-black">Explore our courses:</p> {/* Adjusted margin-top */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 xl:gap-10">
          <Link to="/MotivationPage">
            <div className="min-h-[24rem] bg-gray-100 p-8 rounded-lg shadow-md border flex flex-col justify-between items-center text-center"> {/* Added min-height */}
              <img
                src={algebra}
                alt="algebra module"
                className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4"
              />
              <div className="flex-1">
                <p className="text-xl font-semibold my-2 sm:my-4">
                  Algebra
                </p>
                <p className="text-sm font-semibold text-[rgba(103,117,183,0.55)]">
                  The branch of mathematics dealing with vector spaces and
                  linear mappings between these spaces, used to solve systems
                  of linear equations.
                </p>
              </div>
            </div>
          </Link>

          <Link to="/FuturModules">
            <div className="min-h-[24rem] bg-gray-100 p-8 rounded-lg shadow-md border flex flex-col justify-between items-center text-center"> {/* Added min-height */}
              <img
                src={algorithm}
                alt="algo module"
                className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4"
              />
              <div className="flex-1">
                <p className="text-xl font-semibold my-2 sm:my-4">
                  Algorithm
                </p>
                <p className="text-sm font-semibold text-[rgba(103,117,183,0.55)]">
                  A step-by-step procedure or set of rules for solving a problem
                  or accomplishing a task, often used in computer science and
                  mathematics.
                </p>
              </div>
            </div>
          </Link>

          <Link to="/FuturModules">
            <div className="min-h-[24rem] bg-gray-100 p-8 rounded-lg shadow-md border flex flex-col justify-between items-center text-center"> {/* Added min-height */}
              <img
                src={probability}
                alt="probability module"
                className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4"
              />
              <div className="flex-1">
                <p className="text-xl font-semibold my-2 sm:my-4">
                  Probability
                </p>
                <p className="text-sm font-semibold text-[rgba(103,117,183,0.55)]">
                  The branch of mathematics concerned with the likelihood of
                  events occurring, based on the analysis of random variables
                  and uncertainty.
                </p>
              </div>
            </div>
          </Link>

          <Link to="/FuturModules">
            <div className="min-h-[24rem] bg-gray-100 p-8 rounded-lg shadow-md border flex flex-col justify-between items-center text-center"> {/* Added min-height */}
              <img
                src={sfsd}
                alt="sfsd module"
                className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4"
              />
              <div className="flex-1">
                <p className="text-xl font-semibold my-2 sm:my-4">
                  File structure and data structure
                </p>
                <p className="text-sm font-semibold text-[rgba(103,117,183,0.55)]">
                  File structure refers to the organization and layout of data
                  within a file, while data structure refers to the organization
                  and storage of data.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <Chatbox />  {/* Add the Chatbox component */}
    </div>
  );
};

export default Home;

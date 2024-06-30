import React from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Chatbox from '../components/ChatBox';  
import homeImage from '../assets/images/homeImage.png';
import algebra from '../assets/images/algebra.webp';
import algorithm from '../assets/images/algorithm.png';
import sfsd from '../assets/images/sfsd.webp';
import probability from '../assets/images/probability.webp';
import AnimatedText from '../components/Animations/AnimatedText';
import FloatingImage from '../components/Animations/FloatingImage';
import '../assets/styles/custom.css'; // Import the custom CSS file

const Home = () => {
  return (
    <div>
      <TopBar />
      <div className="container mx-auto px-2 pt-8 lg:pt-12">
        <div className='flex w-full h-[374px] relative z-5 mt-16 px-4'>
          <div className='flex flex-col justify-center flex-1'>
            <AnimatedText
              text="A New Way To Learn & Get Knowledge"
              className=" varblue-text font-['Inter'] text-[40px] font-semibold leading-[77.455px] mb-4"
            />
            <p className="font-['Inter'] text-[24px] font-semibold leading-[29.045px] mb-4" style={{ color: 'var(--primary-font-color)' }}>
              Learn new skills from the comfort of your home or anywhere anytime
            </p>
          </div>
          <div className='ml-9 flex-1 flex justify-end'>
            <FloatingImage
              src={homeImage}
              alt="Home"
              className='w-[563.701px] h-[350px]'
            />
          </div>
        </div>

        <span className="block mt-10 mb-6 font-['Inter'] text-[30px] font-semibold leading-[36.307px] capitalize text-left" style={{ color: 'var(--secondary-color)' }}>
          Explore our courses
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 xl:gap-10">
          <Link to="/MotivationPage">
            <div className="card gradient-border">
              <img
                src={algebra}
                alt="algebra module"
                className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4"
              />
              <div className="card-content">
                <p className="card-title">
                  Algebra
                </p>
                <p className="card-description">
                  The branch of mathematics dealing with vector spaces and
                  linear mappings between these spaces, used to solve systems
                  of linear equations.
                </p>
              </div>
            </div>
          </Link>

          <Link to="/FuturModules">
            <div className="card gradient-border">
              <img
                src={algorithm}
                alt="algo module"
                className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4"
              />
              <div className="card-content">
                <p className="card-title">
                  Algorithm
                </p>
                <p className="card-description">
                  A step-by-step procedure or set of rules for solving a problem
                  or accomplishing a task, often used in computer science and
                  mathematics.
                </p>
              </div>
            </div>
          </Link>

          <Link to="/FuturModules">
            <div className="card gradient-border">
              <img
                src={probability}
                alt="probability module"
                className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4"
              />
              <div className="card-content">
                <p className="card-title">
                  Probability
                </p>
                <p className="card-description">
                  The branch of mathematics concerned with the likelihood of
                  events occurring, based on the analysis of random variables
                  and uncertainty.
                </p>
              </div>
            </div>
          </Link>

          <Link to="/FuturModules">
            <div className="card gradient-border">
              <img
                src={sfsd}
                alt="sfsd module"
                className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4"
              />
              <div className="card-content">
                <p className="card-title">
                  File and data structure
                </p>
                <p className="card-description">
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

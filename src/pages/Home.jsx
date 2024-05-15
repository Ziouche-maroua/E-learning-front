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
      <div className="container mx-auto px-2 pt-16">
        <span className="text-4xl font-bold mt-20 text-blue-500 ">A New Way To Learn <br /> & Get Knowledge</span>
        <p className="text-lg my-4 text-[rgba(0,0,0,0.35)]">Learn new skills from the comfort of your home anywhere, anytime.</p>
        <p className="text-3xl mt-15 mb-3 text-black">Explore our courses:</p>

        <div className="grid grid-cols-4 gap-8">
          <div className="h-87 bg-gray-100 p-8 rounded-lg shadow-md border">
            <img
              src={algebra}
              alt="algebra module"
              className="w-24 h-24 mx-auto"
            />
            <div className="h-full flex flex-col justify-between">
              <div>
                <p className="text-xl font-semibold my-4">Algebra</p>
                <p className="text-sm font-semibold text-[rgba(103,117,183,0.55)]">
                  The branch of mathematics dealing with vector spaces and linear mappings between these spaces, used to solve systems of linear equations ...
                </p>
                <Link to="/MotivationPage" className="text-sm font-semibold text-blue-500 underline cursor-pointer">Learn More</Link>
              </div> 
            </div>
          </div>
          <div className="h-87 bg-gray-100 p-8 rounded-lg shadow-md border">
            <img
              src={algorithm}
              alt="algo module"
              className="w-24 h-24 mx-auto"
            />
           <div className="h-full flex flex-col justify-between">
              <div>
                <p className="text-xl font-semibold my-4">Algorithm</p>
                <p className="text-sm font-semibold text-[rgba(103,117,183,0.55)]">
                A step-by-step procedure or set of rules for solving a problem or
            accomplishing a task, often used in computer science and
            mathematics...
                </p>
                <p className="text-sm font-semibold text-blue-500 underline cursor-pointer">Learn More</p>
              </div>
             
            </div>
          </div>
          <div className="h-87 bg-gray-100 p-8 rounded-lg shadow-md border">
            <img
              src={probability}
              alt="probability module"
              className="w-24 h-24 mx-auto"
            />
          <div className="h-full flex flex-col justify-between">
              <div>
                <p className="text-xl font-semibold my-4">Probabilty</p>
                <p className="text-sm font-semibold text-[rgba(103,117,183,0.55)]">
                The branch of mathematics concerned with the likelihood of events
            occurring, based on the analysis of random variables and
            uncertainty...
                </p>
                <p className="text-sm font-semibold text-blue-500 underline cursor-pointer">Learn More</p>
              </div>
             
            </div>
          </div>
          <div className="h-87 bg-gray-100 p-8 rounded-lg shadow-md border">
            <img
              src={sfsd}
              alt="sfsd module"
              className="w-24 h-24 mx-auto"
            />
          <div className="h-full flex flex-col justify-between">
              <div>
                <p className="text-xl font-semibold my-4">File structure and data structure</p>
                <p className="text-sm font-semibold text-[rgba(103,117,183,0.55)]">
                File structure refers to the organization and layout of data within
            a file, while data structure refers to the organization and storage
            of data ...
                </p>
                <p className="text-sm font-semibold text-blue-500 underline cursor-pointer">Learn More</p>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

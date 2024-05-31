import React, { useState } from 'react';
import Chatbox from '../components/ChatBox'; 
import Def from '../components/DefOfLinearTransformation';
import DefDynamic from '../components/TransformationDynamicExample';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';

const DefApp = () => {
  const [showSections, setShowSections] = useState(false);

  const toggleSections = () => {
    setShowSections(!showSections);
  };

  return (
    <div className="h-screen flex flex-col">
      <TopBar />
      <div className="flex flex-1 pt-16 flex-col lg:flex-row"> {/* Adjusted for responsive design */}
        <div className={`w-full lg:w-1/3 border border-blue-800 shadow-blue-800 p-4 mx-4 my-5 rounded-md ${showSections ? '' : 'hidden lg:block'}`}>
          <h2 className="text-3xl font-serif font-extrabold text-center mb-4 relative text-yellow-900">
            LINEAR TRANSFORMATION
            <span className="absolute w-full h-1 bg-gray-600 bottom-0 left-0"></span>
          </h2>
          <ul className="space-y-9">
            <li className="bg-blue-200 p-2 text-blue-600 rounded-md flex items-center justify-center text-center">
              <Link to="/chapter2/definition">Definition</Link>
            </li>
            <li className="bg-gray-300 p-2 rounded-md flex items-center justify-center text-center">
              <Link to="/chapter2/properties">Properties</Link>
            </li>
            <li className="bg-gray-300 p-2 rounded-md flex items-center justify-center text-center">
              <Link to="/chapter2/KernalImg">Image and Kernel</Link>
            </li>
            <li className="bg-gray-300 p-2 rounded-md flex items-center justify-center text-center">
              <Link to="/chapter2/InjectifSurjectif">Bijectif, Surjectif, Injectif</Link>
            </li>
            <li className="bg-gray-300 p-2 rounded-md flex items-center justify-center text-center">
              <Link to="/chapter2/Morphisme">Endomorphism and Isomorphism</Link>
            </li>
            <li className="bg-yellow-200 text-gray-800 p-2 rounded-md flex items-center justify-center text-center">
              <Link to="/chapter2/Quiz">Take a quiz about linear transformation</Link>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-2/3 border p-4 mx-4 my-5 border-blue-800 shadow-blue-800">
         
          <p className="text-2xl kanit-font text-gray-800 mt-4 mb-8">
            A linear transformation is a mathematical function between two vector spaces that respects vector addition
            and scalar multiplication. It describes how vectors in one space are transformed into vectors in another
            while preserving the structure of the spaces involved
          </p>
          <Def />
          <p className=" text-2xl text-yellow-950 kanit-font mt-4">Try it yourself !</p>
          <DefDynamic />
        </div>
      </div>
      <div className="fixed bottom-16 right-4 lg:hidden"> {/* Adjusted position */}
        <button
          className="px-2 py-1 bg-blue-500 text-white rounded-md shadow-md"
          onClick={toggleSections}
        >
          {showSections ? 'Hide Sections' : 'Show Sections'}
        </button>
      </div>
      <Chatbox />
    </div>
  );
};

export default DefApp;

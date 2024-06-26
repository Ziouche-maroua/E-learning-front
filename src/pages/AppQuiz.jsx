import React from 'react';
import  { useState } from 'react';
import Chap2quiz from '../components/Chap2quiz';
import Chatbox from '../components/ChatBox'; 
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';

const Quiz = () => {
  const [showSections, setShowSections] = useState(false);

  const toggleSections = () => {
    setShowSections(!showSections);
  };
  return (
    <div className="h-screen flex flex-col">

    <TopBar />
      <div className="flex flex-1 pt-16">   
      <div className={`fixed top-16 left-0 w-full lg:w-1/3 p-4 lg:ml-4 my-5 border border-blue-800 shadow-blue-800 rounded-md  ${showSections ? '' : 'hidden lg:block'}`}>
      <h2 className="text-3xl font-serif font-extrabold text-center mb-4 relative" style={{color:'var(--section-title)'}}> LINEAR TRANSFORMATION
            <span className="absolute w-full h-1 bg-gray-600 bottom-0 left-0"></span></h2>
    <ul className="space-y-8">
      <li className="  bg-gray-300 text-black  p-2   rounded-md flex items-center justify-center text-center">
        <Link to="/chapter2/definition">Definition</Link>
      </li>
      <li className=" bg-gray-300 p-2  text-black  rounded-md flex items-center justify-center text-center">
        <Link to="/chapter2/properties">Properties</Link>
      </li>
      <li className="bg-gray-300 p-2 text-black   rounded-md flex items-center justify-center text-center">
        <Link to="/chapter2/KernalImg">Image and Kernel</Link>
      </li>
      <li className="bg-gray-300  p-2  text-black  rounded-md flex items-center justify-center text-center">
        <Link to="/chapter2/InjectifSurjectif">Bijectif, Surjectif, Injectif</Link>
      </li>
      <li className="bg-gray-300  p-2  text-black  rounded-md flex items-center justify-center text-center">
        <Link to="/chapter2/Morphisme">Endomorphism and Isomorphism</Link>
      </li>
      <li className="bg-yellow-200 text-black  p-2 rounded-md flex items-center justify-center text-center">
        <Link to="/chapter2/Quiz">Take a quiz about linear transformation</Link>
      </li>
      
    </ul>
    </div> 
    <div className="w-full lg:w-2/3 p-4 mx-4 my-5 lg:ml-[36%] border border-blue-800 shadow-blue-800 rounded-md"> 
     
      <Chap2quiz/>
      
  </div>
  </div>
  <div className="fixed bottom-16 right-4 lg:hidden">
        <button
          className="px-2 py-1 bg-blue-500 text-white rounded-md shadow-md"
          onClick={toggleSections}
        >
          {showSections ? 'Hide Sections' : 'Show Sections'}
        </button>
      </div>
  <Chatbox/>
  </div>
  );
  };
  export default Quiz;
import React from 'react';
import Chap2quiz from '../components/Chap2quiz';
import Chatbox from '../components/ChatBox'; 
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';

const Quiz = () => {
  return (
    <div className="h-screen flex flex-col">

    <TopBar />
      <div className="flex flex-1 pt-16">   
      <div className="w-1/3 bg-white shadow-lg border border-blue-200 rounded-lg p-4 mx-4 my-5 ">
    <h2 className="text-3xl font-serif font-extrabold text-center mb-4 relative text-yellow-900 ">  LINEAR TRANSFORMATION
            <span className="absolute w-full h-1 bg-gray-600 bottom-0 left-0"></span></h2>
    <ul className="space-y-9">
      <li className="  bg-gray-300  p-2   rounded-md flex items-center justify-center text-center">
        <Link to="/chapter2/definition">Definition</Link>
      </li>
      <li className=" bg-gray-300 p-2  rounded-md flex items-center justify-center text-center">
        <Link to="/chapter2/properties">Properties</Link>
      </li>
      <li className="bg-gray-300 p-2 rounded-md flex items-center justify-center text-center">
        <Link to="/chapter2/KernalImg">Image and Kernel</Link>
      </li>
      <li className="bg-gray-300  p-2 rounded-md flex items-center justify-center text-center">
        <Link to="/chapter2/InjectifSurjectif">Bijectif, Surjectif, Injectif</Link>
      </li>
      <li className="bg-gray-300  p-2 rounded-md flex items-center justify-center text-center">
        <Link to="/chapter2/Morphisme">Endomorphism and Isomorphism</Link>
      </li>
      <li className="bg-yellow-200 text-gray-800 p-2 rounded-md flex items-center justify-center text-center">
        <Link to="/chapter2/Quiz">Take a quiz about linear transformation</Link>
      </li>
      
    </ul>
    </div> 
    <div className="w-2/3 bg-white shadow-lg border border-blue-200 rounded-lg p-4 mx-4 my-5">
     
      <Chap2quiz/>
      
  </div>
  </div>
  <Chatbox/>
  </div>
  );
  };
  export default Quiz;
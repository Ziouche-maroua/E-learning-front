import React from 'react';
import Chap2quiz from '../components/Chap2quiz';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';

const Quiz = () => {
  return (
    <div className="h-screen flex flex-col">

    <TopBar />
      <div className="flex flex-1 pt-16">   
    <div className="w-1/3 border border-blue-800 shadow-blue-800 p-4 mx-4 my-5">
    <ul className="space-y-5">
      <li className="bg-gray-200 ">
        <Link to="/chapter2/definition">Definition</Link>
      </li>
      <li className="bg-gray-300 ">
        <Link to="/chapter2/properties">Properties</Link>
      </li>
      <li className="bg-gray-300  ">
        <Link to="/chapter2/KernalImg">Image and Kernel</Link>
      </li>
      <li className="bg-gray-300 ">
        <Link to="/chapter2/InjectifSurjectif">Bijectif, Surjectif, Injectif</Link>
      </li>
      <li className="bg-gray-300">
        <Link to="/chapter2/Morphisme">Endomorphism and Isomorphism</Link>
      </li>
      <li className="bg-gray-300 text-blue-400">
        <Link to="/chapter2/Quiz">Take a quiz about linear trasformation</Link>
      </li>
      
    </ul>
    </div> 
    <div className="w-2/3 border border-blue-800 shadow-blue-800 p-4 mx-4 my-5">
      <h1>Linear Transformation</h1>
      <h2>Quiz about linear transformation</h2>
      <Chap2quiz/>
      
  </div>
  </div>
  </div>
  );
  };
  export default Quiz;

import React from 'react';
import MultMat from '../components/MultMat';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';

const Matrixoperation = () => {
  return (
    <div className="h-screen flex flex-col">

    <TopBar />
      <div className="flex flex-1 pt-16">   
    <div className="w-1/3 border border-blue-800 shadow-blue-800 p-4 mx-4 my-5 rounded-md">
    <h2 className="text-3xl font-serif font-extrabold text-center mb-4 relative text-purple-900 ">  ALGEBRA
            <span className="absolute w-full h-1 bg-gray-600 bottom-0 left-0"></span></h2>
    <ul className="space-y-9">
      <li className="bg-gray-200 p-2 rounded-md">
        <Link to="/chapter3/definition">Definition</Link>
      </li>
      <li className="bg-blue-200  p-2 text-blue-600 rounded-md">
        <Link to="/chapter3/properties">Properties</Link>
      </li>
      <li className="bg-gray-300 p-2 rounded-md">
        <Link to="/chapter3/Operation">Operation</Link>
      </li>
      
      <li className="bg-yellow-200 text-gray-800 p-2 rounded-md">
        <Link to="/chapter2/Quiz">Take a quiz about matrix</Link>
      </li>
      
    </ul>
  </div>
    <div className="w-2/3 border border-blue-800 shadow-blue-800 p-4 mx-4 my-5 rounded-md">
      <h1>MATRIX</h1>
      <h2>Operation</h2>
      

      <MultMat/>
      
     
    </div>
    </div>
    </div>
  );
};

export default Matrixoperation;
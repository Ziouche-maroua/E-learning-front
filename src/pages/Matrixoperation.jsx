
import React from 'react';
import MultMat from '../components/MultMat2';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import MatrixAddition from '../components/ADDmat'
import Chatbox from '../components/ChatBox';
const Matrixoperation = () => {
  return (
    <div className="h-screen flex flex-col">

    <TopBar />
      <div className="flex flex-1 pt-16">   
    <div className="w-1/3 border border-blue-800 shadow-blue-800 p-4 mx-4 my-5 rounded-md">
    <h2 className="text-3xl font-serif font-extrabold text-center mb-4 relative text-yellow-900 "> MATRIX
            <span className="absolute w-full h-1 bg-gray-600 bottom-0 left-0"></span></h2>
    <ul className="space-y-9">
      <li className="bg-gray-300 p-2 rounded-md flex items-center justify-center text-center">
        <Link to="/chapter3/Matdefinition">Definition</Link>
      </li>
      <li className="bg-gray-300  p-2 rounded-md flex items-center justify-center text-center">
        <Link to="/chapter3/Elementary">Elementary matrices</Link>
      </li>
      <li className="bg-blue-200 p-2 text-blue-600 rounded-md flex items-center justify-center text-center">
        <Link to="/chapter3/Operations">Operations on matrices</Link>
      </li>
      <li className="bg-gray-300  p-2  rounded-md flex items-center justify-center text-center">
        <Link to="/chapter3/MatrixInverse">matrix inverse</Link>
      </li>
      
      <li className="bg-yellow-200 text-gray-800 p-2 rounded-md flex items-center justify-center text-center">
        <Link to="/chapter3/Quiz3">Take a quiz about matrix</Link>
      </li>
      
    </ul>
  </div>
    <div className="w-2/3 border border-blue-800 shadow-blue-800 p-4 mx-4 my-5 rounded-md">
   
      

      <MultMat/>

      <MatrixAddition/>
      
     
    </div>
    </div>
    <Chatbox />
    </div>
  );
};

export default Matrixoperation;

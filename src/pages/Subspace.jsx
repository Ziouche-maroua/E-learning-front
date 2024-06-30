
import Chatbox from '../components/ChatBox';
import React from 'react';
import SousE from '../components/VectorSpace/Sous';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
const SE = () => {
  return (
    <div className="h-screen flex flex-col">

    <TopBar />
      <div className="flex flex-1 pt-16">   
    <div className="w-1/3 border border-blue-800 shadow-blue-800 p-4 mx-4 my-5 rounded-md">
          <h2 className="text-3xl font-serif font-extrabold text-center mb-4 relative text-purple-900 " style={{color:'var(--section-title)'}}> Vectors Space
            <span className="absolute w-full h-1 bg-gray-600 bottom-0 left-0"></span></h2> 
    <ul className="space-y-9">
      <li className=" bg-gray-300 p-2 text-black  rounded-md flex items-center justify-center text-center ">
        <Link to="/chapter1/definition ">Definition</Link>
        </li>
        <li className="bg-blue-200  text-blue-600 p-2 rounded-md flex items-center justify-center text-center">
        <Link to="/chapter1/Subspace">Subspace</Link>
      </li>
      
      <li className="bg-gray-300 p-2 text-black rounded-md flex items-center justify-center text-center">
        <Link to="/chapter1/Lesfamilles">Linearly Independent Family </Link>
      </li>
      <li className="bg-gray-300 p-2  text-black rounded-md flex items-center justify-center text-center">
        <Link to="/chapter1/FamilleG">Generating Family </Link>
      </li>
      <li className="bg-gray-300 p-2  text-black rounded-md flex items-center justify-center text-center">
        <Link to="/chapter1/BaseDim">Base and dimension </Link>
      </li>
      
      <li className="bg-yellow-200 text-black p-2 rounded-md flex items-center justify-center text-center">
        <Link to="/chapter1/VSQuiz">Take a quiz about vector space</Link>
      </li>
      
    </ul>
  </div>
    <div className="w-2/3 border border-blue-800 shadow-blue-800 p-4 mx-4 my-5 rounded-md">
      
      <SousE/>
    </div>
    </div>
    <Chatbox />
    </div>
  );
};
export default SE;
import React from 'react';
import AppProps from '../components/PropsOfLinearTransformation';
import Chatbox from '../components/ChatBox'; 
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';

const AppProperties = () => {
  return (
    <div className="h-screen flex flex-col">

    <TopBar />
      <div className="flex flex-1 pt-16">   
      <div className="w-1/3 border border-blue-800 shadow-blue-800 p-4 mx-4 my-5 rounded-md">
    <h2 className="text-3xl font-serif font-extrabold text-center mb-4 relative text-purple-900 ">  ALGEBRA
            <span className="absolute w-full h-1 bg-gray-600 bottom-0 left-0"></span></h2>
            <ul className="space-y-9">
      <li className="  bg-gray-300  p-2   rounded-md">
        <Link to="/chapter2/definition">Definition</Link>
      </li>
      <li className="bg-blue-200  text-blue-600 p-2  rounded-md">
        <Link to="/chapter2/properties">Properties</Link>
      </li>
      <li className="bg-gray-300 p-2 rounded-md">
        <Link to="/chapter2/KernalImg">Image and Kernel</Link>
      </li>
      <li className="bg-gray-300  p-2 rounded-md">
        <Link to="/chapter2/InjectifSurjectif">Bijectif, Surjectif, Injectif</Link>
      </li>
      <li className="bg-gray-300  p-2 rounded-md">
        <Link to="/chapter2/Morphisme">Endomorphism and Isomorphism</Link>
      </li>
      <li className="bg-yellow-200 text-gray-800 p-2 rounded-md">
        <Link to="/chapter2/Quiz">Take a quiz about linear trasformation</Link>
      </li>
      
    </ul>
  </div>
    <div className="w-2/3 border border-blue-800 shadow-blue-800 p-4 mx-4 my-5">
      <h1>Linear Transformation</h1>
      <h2>Properties</h2>
      <p>
      A linear transformation between two vector spaces and is a map such that the following hold: 
      </p>
      <span>Let T:U to V the linear transfomation u in U and v in V and let a scaller c in R, we have : </span>
        <h1>T(u+v)=T(u)+T(v)</h1>
        <h1>T(c*u)=c * T(u)</h1>

      <AppProps/>
      
     
    </div>
    </div>
    <Chatbox/>
    </div>
  );
};

export default AppProperties;

import React from 'react';
import Def from '../components/DefOfLinearTransformation';
import DefDynamic from '../components/TransformationDynamicExample';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
const DefApp = () => {
  return (
    <div className="h-screen flex flex-col">

    <TopBar />
      <div className="flex flex-1 pt-16">   
    <div className="w-1/3 border border-blue-800 shadow-blue-800 p-4 mx-4 my-5 rounded-md">
          <h2 className="text-3xl font-serif font-extrabold text-center mb-4 relative text-purple-900 "> ALGEBRA
            <span className="absolute w-full h-1 bg-gray-600 bottom-0 left-0"></span></h2> 
    <ul className="space-y-9">
      <li className="bg-blue-200 text-blue-600 p-2 rounded-md ">
        <Link to="/chapter2/definition">Definition</Link>
      </li>
      <li className="bg-gray-300 p-2 rounded-md">
        <Link to="/chapter2/properties">Properties</Link>
      </li>
      <li className="bg-gray-300 p-2 rounded-md">
        <Link to="/chapter2/KernalImg">Image and Kernel</Link>
      </li>
      <li className="bg-gray-300 p-2 rounded-md ">
        <Link to="/chapter2/InjectifSurjectif">Bijectif, Surjectif, Injectif</Link>
      </li>
      <li className="bg-gray-300 p-2 rounded-md">
        <Link to="/chapter2/Morphisme">Endomorphism and Isomorphism</Link>
      </li>
      <li className="bg-yellow-200 text-gray-800 p-2 rounded-md">
        <Link to="/chapter2/Quiz">Take a quiz about linear trasformation</Link>
      </li>
      
    </ul>
  </div>
    <div className="w-2/3 border border-blue-800 shadow-blue-800 p-4 mx-4 my-5 rounded-md">
      <h1>Linear Transformation</h1>
      <h2>Definition</h2>
      <p>
        A linear transformation is a mathematical function between two vector spaces that respects vector addition and scalar multiplication. It describes how vectors in one space are transformed into vectors in another while preserving the structure of the spaces involved.
      </p>
      <Def />
      <p>Try it yourself!</p>
      <DefDynamic />
    </div>
    </div>
    </div>
  );
};

export default DefApp;

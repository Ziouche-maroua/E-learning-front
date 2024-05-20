
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
      <div className="flex flex-1 pt-16">
        <div className={`w-full lg:w-1/3 border ${showSections ? '' : 'hidden lg:block'} border-blue-800 shadow-blue-800 p-4 mx-4 my-5`}>
          <ul className="space-y-9">
            <li className="bg-blue-300 text-yellow-100 p-2">
              <Link to="/chapter2/definition">Definition</Link>
            </li>
            <li className="bg-yellow-200 p-2">
              <Link to="/chapter2/properties">Properties</Link>
            </li>
            <li className="bg-blue-300 p-2">
              <Link to="/chapter2/KernalImg">Image and Kernel</Link>
            </li>
            <li className="bg-yellow-200 p-2">
              <Link to="/chapter2/InjectifSurjectif">Bijectif, Surjectif, Injectif</Link>
            </li>
            <li className="bg-blue-300  p-2">
              <Link to="/chapter2/InjectifSurjectif">Endomorphism and Isomorphism</Link>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-2/3 border p-4 mx-4 my-5 border-blue-800 shadow-blue-800">
          <h1>Linear Transformation</h1>
          <h2>Definition</h2>
          <p>
            A linear transformation is a mathematical function between two vector spaces that respects vector addition
            and scalar multiplication. It describes how vectors in one space are transformed into vectors in another
            while preserving the structure of the spaces involved.
          </p>
          <Def />
          <p>Try it yourself!</p>
          <DefDynamic />
        </div>
      </div>
      <div className="fixed bottom-4 right-4 lg:hidden">
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

export default DefApp;
